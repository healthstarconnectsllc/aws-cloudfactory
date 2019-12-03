var gulp    = require('gulp');
var exec    = require('gulp-exec');
var argv    = require('yargs').argv;
var path    = require('path');
var config  = require('../config');

config.stackName = argv.stackName ? argv.stackName : 'generic-network';

const networkStackPath = path.join(__dirname, 'stacks/network/gen-any-gbl-cfn-stk-network.yml');

gulp.task('cfn:network:publish', function() {
    /*var options = {
        stackName: argv.stackName ? argv.stackName : 'generic-network',
        owner: argv.owner ? argv.owner : 'General',
        application: argv.application ? argv.application : 'any',
        rootCidr: argv.rootCidr ? argv.rootCidr : '10.10',
        packageBucket: packageBucket
    };

    pack();

    return gulp.src(networkStackPath)
        .pipe(exec(`aws cloudformation deploy \
            --template-file ${distNetworkPath} \
            --stack-name ${options.stackName} \
            --parameter-overrides \
                ParameterKey=Owner,ParameterValue=${options.owner} \
                ParameterKey=Application,ParameterValue=${options.application} \
                ParameterKey=AddressPrefix,ParameterValue=${options.rootCidr}`))
        .pipe(exec.reporter());*/
});

function pack() {
    return gulp.src(networkStackPath)
        .pipe(exec(`aws cloudformation package \
            --template-file <%= file.basename %> \
            --s3-bucket <%= config.packageBucket %> \
            --output-template-file <%= config.distPath + file.basename %>  \
            --force-upload`, config))
        .pipe(exec.reporter())
}

module.exports = pack;