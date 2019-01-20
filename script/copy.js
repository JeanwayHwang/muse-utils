const path = require('path');
const rm = require('rimraf');
const fs = require('fs');
const copy = require('copy');
const ora = require('ora');
const chalk = require('chalk');
const rootPath = path.resolve(__dirname, '../');
const targetPath = path.resolve(rootPath, 'lib');

let copying = ora('copying...');
copying.start();

rm(path.resolve(rootPath, 'lib', '*.js'), err => {
    if (err) throw err;
    // 批量复制模板文件
    let folderList = fs.readdirSync(path.resolve(rootPath, 'src'));
    folderList.forEach((item, index) => {
        copy(path.resolve(rootPath, `src/${item}/*.js`), targetPath, (err ,files) => {
            if (err) throw err;
            if (index === folderList.length - 1) {
                copying.stop();
                console.log(chalk.bgGreen('copy completed!'));
            }
        })
    });
});