var gulp    = require('gulp');
var exec    = require('gulp-exec');
var path    = require('path');
var config  = require('config').get('cloudformation');

var name = 'gen-any-gbl-cfn-stk-network.yml';
var stackPath = path.join(__dirname, name);
var stackName = path.parse(stackPath).name;
var distFile = path.join(process.cwd(), 'dist', name);

gulp.task('cfn:network:test', function() {
    return gulp.src(stackPath)
        .pipe(exec(`aws cloudformation validate-template \
            --template-body file://<%= file.path %>`));
});

gulp.task('cfn:network:build',function() {

    return gulp.src(stackPath)
        .pipe(exec(`aws cloudformation package \
            --template-file ${stackPath} \
            --s3-bucket ${config.storage.bucket} \
            --output-template-file ${distFile} \
            --force-upload`));
});

gulp.task('cfn:network:publish', function() {
    return gulp.src('.')
        .pipe(exec(`aws cloudformation deploy \
            --template-file ${distFile} \
            --stack-name ${stackName} \
            --parameter-overrides \
                ParameterKey=Owner,ParameterValue=${config.general.owner} \
                ParameterKey=Application,ParameterValue=${config.general.application} \
                ParameterKey=RootCidr,ParameterValue=${config.networking.addressPrefix}`))
        .pipe(exec.reporter());
});
