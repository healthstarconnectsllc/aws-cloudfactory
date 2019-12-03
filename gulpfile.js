var gulp        = require('gulp'); 
var glob        = require('glob');
var clean       = require('gulp-clean');
var nop         = require('gulp-nop');
var files       = undefined;

preloadFiles();

gulp.task('cfn:test', function() {
    gulp.series(getTasks('test'))();
    return gulp.src('.').pipe(nop());
});

gulp.task('cfn:clean', function() {
    return gulp.src(['dist/*', '!dist/.gitkeep'], {read: false})
        .pipe(clean());
});

gulp.task('cfn:build', gulp.series('cfn:clean', function() {
    gulp.series(getTasks('build'))();
    return gulp.src('.').pipe(nop());
}));

gulp.task('cfn:publish', function() {
    gulp.series(getTasks('publish'))();
    return gulp.src('.').pipe(nop());
});

/*gulp.task('cfn:publish', gulp.series('cfn:build', function() {
    gulp.series(getTasks('publish'))();
    return gulp.src('.').pipe(nop());
}));*/

gulp.task('default', gulp.series('cfn:build'));
gulp.task('clean', gulp.series('cfn:clean'));
gulp.task('build', gulp.series('cfn:build'));
gulp.task('test', gulp.series('cfn:test'));
gulp.task('publish', gulp.series('cfn:publish'));

function preloadFiles() {
    files = glob.sync('./src/**/*.gulp.task.js');
    files.forEach(function(file) {
        console.log('Loading: '+file);
        require(file);
    });
}

// this needs access further down
function getTasks(taskType) {
    var tasks = [];
    for(var task in gulp._registry._tasks) {
        if(task.endsWith(':'+taskType) && task !== 'cfn:'+taskType) {
            tasks.push(task);
        }
    }

    if(tasks.length === 0) {
        throw "No tasks were found";
    }

    return tasks;
}
