const fs = require('fs');
const Papa = require('papaparse');

/***
 * Pulls CSV from file system at a given path
 * @param pathToCSV
 * @returns {Promise}
 */
exports.getCSV = (pathToCSV) => {
    return new Promise((resolve, reject) => {
        const stream = fs.readFile(pathToCSV, 'utf8', (err,data) => {
            if(err) return reject(err);
            resolve(data);
        });
    })
};

/***
 * Converts a .csv snapshot into an array of JSON objects in the format {account, amount}
 * @param csv
 * @returns {Array}
 */
exports.csvToJson = (csv, accountIndex, amountIndex) => {
    const result = Papa.parse(csv);
    const tupled = result.data.map(r => ({account: r[accountIndex], amount: r[amountIndex]}))
    return tupled;
};

