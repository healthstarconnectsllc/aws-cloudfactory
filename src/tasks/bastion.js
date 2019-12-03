var gulp    = require('gulp');
var exec    = require('gulp-exec');
var argv    = require('yargs').argv;
var path    = require('path');
var config  = require('../config');

config.stackName = argv.stackName ? argv.stackName : 'bastion-network';

gulp.task('publish-bastion', function() {
    /*var bastionStackPath = path.join(__dirname, 'stacks/servers/bastion/gen-any-gbl-cfn-stk-bastion.yml');
    var distBastionPath = path.join(__dirname, 'dist/bastion-package.yml');

    

    pack();

    return gulp.src(bastionStackPath)
        .pipe(exec(`aws cloudformation deploy \
            --template-file ${distBastionPath} \
            --stack-name ${options.stackName} \
            --parameter-overrides \
                ParameterKey=Owner,ParameterValue=${options.owner} \
                ParameterKey=Application,ParameterValue=${options.application} \
                ParameterKey=AddressPrefix,ParameterValue=${options.rootCidr} \
            --capabilities CAPABILITY_NAMED_IAM`))
        .pipe(exec.reporter());*/
});

function pack() {
    return gulp.src(bastionStackPath)
        .pipe(exec(`aws cloudformation package \
            --template-file <%= file.basename %> \
            --s3-bucket <%= config.packageBucket %> \
            --output-template-file <%= config.distPath + file.basename %> \
            --force-upload`, config))
        .pipe(exec.reporter())
}

module.exports = pack;