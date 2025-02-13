const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    const renamedFiles = [];
    const fileCount = {};

    for (const name of names) {
        let newName = name;
        
        if (fileCount[name] !== undefined) {
            fileCount[name]++;
            newName = `${name}(${fileCount[name]})`;
        } else {
            fileCount[name] = 0;
        }
        
        while (renamedFiles.includes(newName)) {
            fileCount[name]++;
            newName = `${name}(${fileCount[name]})`;
        }
        
        renamedFiles.push(newName);
    }
    
    return renamedFiles;
}

module.exports = {
  renameFiles
};
