//link to data
//  https://pkgstore.datahub.io/core/global-temp/annual_csv/data/a26b154688b061cdd04f1df36e4408be/annual_csv.csv

let data = [];
let table;

function preload() {
    table = loadTable('data/data.csv', 'csv', 'header');
}

function generateData() {
    for (let r = 0; r < table.getRowCount(); r++) {
        data.push(table.rows[r].obj)
    }

    for (let i = 0; i < data.length; i++) {
        data[i].year = int(data[i].year)
        data[i].mean = float(data[i].mean)
    }
}