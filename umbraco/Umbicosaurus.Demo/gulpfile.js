/// <binding ProjectOpened='default' />
const { watch, src, dest } = require('gulp');

const externalFiles = ['../../angular/**', '../../thesaurus.json'];

function copyFiles()
{
    return src(externalFiles)
        .pipe(dest('App_Plugins/Umbicosaurus/'));
}

function defaultTask()
{
    copyFiles();
    watch(externalFiles, copyFiles);
}

exports.default = defaultTask