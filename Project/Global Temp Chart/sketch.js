let chart01;

let screenWidth = 1500;
let screenHeight = 1500;


function setup() {
    generateData();
    angleMode(DEGREES);
    createCanvas(screenWidth, screenHeight);

    chart01 = new GlobalTempChart(data);
    chart01.chartWidth = 1000;
    chart01.chartHeight = 1000;
    chart01.posX = 250;
    chart01.posY = 1250;
    chart01.title = "Global Temperature Time Series";
    chart01.updateValues();
}

function draw() {
    background(16, 58, 72);
    scale(.8);

    //Vertical Bar Chart
    chart01.updateValues();
    chart01.render();
}