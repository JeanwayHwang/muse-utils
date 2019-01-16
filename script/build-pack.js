const path = require('path');
const rm = require('rimraf');
const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');

const rootPath = path.resolve(__dirname, '../');
const config = require('./webpack.conf');

let building = ora('Start Building...');
building.start();
// 删除 min目录原有旧文件
rm(path.resolve(rootPath, 'min', 'museutils.min.js'), err => {
    if (err) throw (err);
    webpack(config, (err, stats) => {
        if (err) throw (err);
        building.stop();
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');
        console.log(chalk.cyan('Build Completed!'));
    });
});