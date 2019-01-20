const path = require('path');
const rm = require('rimraf');
const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const copy = require('copy');
const fs = require('fs');
const rootPath = path.resolve(__dirname, '../');
const config = require('./webpack.conf');

let building = ora('Start Building...');
building.start();
// 删除 min目录原有旧文件并生成新的产物
rm(path.resolve(rootPath, 'min', 'museutils.min.js'), err => {
    if (err) throw (err);
    webpack(config, (err, stats) => {
        if (err) throw err;
        building.stop();
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');
        console.log(chalk.bgGreen('Build Completed!'));
        copyMinFileToRootpath();
    });
});

// 删除根目录旧有index.js，粘贴 min目录下的构建产物
const copyMinFileToRootpath = () => {
    rm(path.resolve(rootPath, 'index.js'), err => {
        if (err) throw err;
        copy(path.resolve(rootPath, `min/*.min.js`), rootPath, (err ,files) => {
            if (err) throw err;
            console.log(chalk.bgGreen('Copy min/*.min.js To RootPath Completed!'));
            fs.rename('museutils.min.js', 'index.js', err => {
                if (err) throw err;
                console.log(chalk.bgGreen('Rename *.min.js To index.js Completed!'));
            });
        });
    });
};