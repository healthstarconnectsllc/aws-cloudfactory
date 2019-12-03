var gulp        = require('gulp');
var realExec    = require('gulp-exec');
var path        = require('path');
var config      = require('config').get('cloudformation');
var exec        = filterExec;

var name = 'gen-any-gbl-cfn-stk-resources-ami.yml';
var stackPath = path.join(__dirname, name);
var stackName = path.parse(stackPath).name;
var distFile = path.join(process.cwd(), 'dist', name);

gulp.task('cfn:resources:ami:test', function() {
    return gulp.src(stackPath)
        .pipe(exec(`aws cloudformation validate-template \
            --template-body file://<%= file.path %>`));
});

gulp.task('cfn:resources:ami:build',function() {
    return gulp.src(stackPath)
        .pipe(exec(`aws cloudformation package \
        --template-file ${stackPath} \
        --s3-bucket ${config.storage.bucket} \
        --output-template-file ${distFile} \
        --force-upload`));
});

gulp.task('cfn:resources:ami:publish', function() {
    return gulp.src(stackPath)
        .pipe(exec(`aws cloudformation deploy \
            --template-file ${distFile} \
            --stack-name ${stackName} \
            --parameter-overrides \
                ParameterKey=Owner,ParameterValue=${config.general.owner} \
                ParameterKey=Application,ParameterValue=${config.general.application} \
                ParameterKey=RootCidr,ParameterValue=${config.networking.addressPrefix} \
            --capabilities CAPABILITY_NAMED_IAM`));
});

function filterExec(command) {
    var filteringCommand =  command.replace(/(\r\n|\n|\r\t)/gm,"");
    return realExec(filteringCommand);
}