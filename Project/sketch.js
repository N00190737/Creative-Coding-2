let data01 = [
    { name: "Oranges", total: 23 },
    { name: "Bananas", total: 34 },
    { name: "Pears", total: 23 },
    { name: "Apples", total: 18 }
];

let chart01;
let chart02;


function setup() {
    createCanvas(1200, 800);

    chart01 = new VerticalBarChart(data01);
    chart01.chartWidth = 300;
    chart01.chartHeight = 300;
    chart01.posX = 50;
    chart01.posY = 400;
    chart01.title = "Vertical Bar Chart";
    chart01.updateValues();

    chart02 = new HorizontalBarChart(data01);
    chart02.chartWidth = 300;
    chart02.chartHeight = 300;
    chart02.posX = 450;
    chart02.posY = 400;
    chart02.title = "Horizontal Bar Chart";
    chart02.updateValues();

}


function draw() {
    background(50);
    //Vertical Bar Chart
    chart01.updateValues();
    chart01.render();

    //Horizontal Bar Chart
    chart02.updateValues();
    chart02.render();
}