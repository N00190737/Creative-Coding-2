let data01 = [
    { name: "Minecraft", total: 280 },
    { name: "GTA V", total: 160 },
    { name: "Tetris", total: 100 },
    { name: "Wii Sports", total: 82 },
    { name: "PUBG", total: 75 },
    { name: "Mario Kart", total: 58 },
    { name: "Pokemon", total: 47 },
    { name: "Red Dead 2", total: 43 },
];

let chart01;
let chart02;
let chart03;

// function preload() {
//   labelFont = loadFont('../fonts/BebasNeue-Regular.ttf');
// }

function setup() {
    createCanvas(1600, 800);
    
    // textFont

    chart01 = new VerticalBarChart(data01);
    chart01.chartWidth = 300;
    chart01.chartHeight = 300;
    chart01.posX = 100;
    chart01.posY = 400;
    chart01.title = "Vertical Bar Chart";
    chart01.updateValues();

    chart02 = new HorizontalBarChart(data01);
    chart02.chartWidth = 300;
    chart02.chartHeight = 300;
    chart02.posX = 600;
    chart02.posY = 400;
    chart02.title = "Horizontal Bar Chart";
    chart02.updateValues();

    // chart03 = new StackedBarChart(data01);
    // chart03.chartWidth = 400;
    // chart03.chartHeight = 300;
    // chart03.posX = 1050;
    // chart03.posY = 400;
    // chart03.title = "Stacked Bar Chart";
    // chart03.updateValues();

}


function draw() {
    background(16, 58, 72);
    //Vertical Bar Chart
    chart01.updateValues();
    chart01.render();

    //Horizontal Bar Chart
    chart02.updateValues();
    chart02.render();

    //Stacked Bar Chart
    // chart03.updateValues();
    // chart03.render();
}