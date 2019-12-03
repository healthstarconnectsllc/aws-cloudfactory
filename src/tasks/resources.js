/*var gulp    = require('gulp');
var exec    = require('gulp-exec');
var argv    = require('yargs').argv;
var path    = require('path');
var config  = require('../config');

config.resources = path.join(__dirname, 'custom-resources', '**', '*.yml');
config.stackName = argv.stackName ? argv.stackName : 'bastion-network';

gulp.task('cfn:resources:publish', function() {
    pack();

    return gulp.src(config.resources)
        .pipe(exec(`aws cloudformation deploy \
            --template-file <%= config.distPath + file.basename %> \
            --stack-name <%= config.stackName %> \
            --capabilities CAPABILITY_NAMED_IAM`, config))
        .pipe(exec.reporter());
});

function pack() {
    return gulp.src(config.resources)
        .pipe(exec(`aws cloudformation package \
        --template-file <%= file.path %> \
        --s3-bucket <%= config.packageBucket %> \
        --output-template-file <%= config.distPath + file.basename %> \
        --force-upload`, config))
        .pipe(exec.reporter());
}

module.exports = pack;*/