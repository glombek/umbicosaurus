const { watch, src, dest } = require('gulp');

const pluginFiles = ['../../angular/**', '../../thesaurus.json'];
const authorFiles = ['../../thesaurus.schema.json'];

function copyPluginFiles()
{
    return src(pluginFiles)
        .pipe(dest('App_Plugins/Umbicosaurus/'));
}

function copyAuthorFiles() {
    return src(authorFiles)
        .pipe(dest('App_Plugins/Umbicosauthor/'));
}

function defaultTask(cb)
{
    copyPluginFiles();
    copyAuthorFiles();
    cb();
}

function watchTask(cb) {
    watch(authorFiles, copyAuthorFiles);
}

exports.default = defaultTask;
exports.watch = watchTask;