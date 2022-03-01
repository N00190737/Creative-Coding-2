let data01 = [
    {   name: "Minecraft",
        total: 446,
        thumbnail: "placeholder",
        year: "2011",
        genre: "Sandbox",
        sales: [0, 54, 154, 238]},        
    {   name: "GTA V",
        total: 356,
        thumbnail: "placeholder",
        year: "2013",
        genre: "Action",
        sales: [0, 34, 142, 180]},        
    {   name: "Tetris",
        total: 199,
        thumbnail: "placeholder",
        year: "2006",
        genre: "Puzzle",
        sales: [5, 28, 66, 100]},        
    {   name: "Wii Sports",
        total: 186,
        thumbnail: "placeholder",
        year: "2006",
        genre: "Sports",
        sales: [18, 29, 56, 83]},
    {   name: "Cyberpunk 2077",
        total: 14,
        thumbnail: "placeholder",
        year: "2020",
        genre: "Action",
        sales: [0, 0, 0, 14]}
];

let scatterData = [
    {name:"Minecraft", sales: 446, priceToMake: 1.5},
    {name:"GTA V", sales: 356, priceToMake: 265000},
    {name:"Tetris", sales: 199, priceToMake: 2},
    {name:"Wii Sports", sales: 186, priceToMake: 5},
    {name:"CyberPunk 2077", sales: 14, priceToMake: 313000}
]

let legend = [
    {name: "Minecraft", colour:'#8cfeff'},
    {name: "GTA V", colour:'#9cecbd'},
    {name: "Tetris", colour:'#eaaf6a'},
    {name: "Wii Sports", colour:'#fc8980'},
    {name: "CyberPunk 2077", colour:'#fdda0d'}
]

let legend02 = [
    {name: "2006", colour:'#8cfeff'},
    {name: "2010", colour:'#9cecbd'},
    {name: "2014", colour:'#eaaf6a'},
    {name: "2016", colour:'#fc8980'},
    {name: "2022", colour:'#fdda0d'}
]

let chart01;
let chart02;
let chart03;
let chart04;
let chart05;

let screenWidth = 1900;
let screenHeight = 1050;



// function preload() {
//     img = loadImage('assets/Minecraft.jpeg');
//     img = loadImage('assets/GTAV.jpeg');
//     img = loadImage('assets/Tetris.jpg');
//     img = loadImage('assets/wii sports.jpeg');
// }

//GUI
// let params = {
//     //Scalable Values
//     numPlaces: 0,
//     numMin: 0,
//     numMax: 2,



//     //Ticked Values
//     showValues: true,
//     showLabels: true,
//     showTitles: true,
//     rotateLabels: true,
//     showCategories: true

// }

// let myPos;

// let visible = true;

// var gui;

function setup() {
    angleMode(DEGREES);
    createCanvas(screenWidth, screenHeight);
    
    
    // textFont

    chart01 = new VerticalBarChart(data01, legend);
    chart01.chartWidth = 300;
    chart01.chartHeight = 300;
    chart01.posX = 125;
    chart01.posY = 450;
    chart01.title = "Vertical Bar Chart";
    chart01.updateValues();

    chart02 = new HorizontalBarChart(data01, legend);
    chart02.chartWidth = 300;
    chart02.chartHeight = 300;
    chart02.posX = screenWidth/2 -150;
    chart02.posY = 450;
    chart02.title = "Horizontal Bar Chart";
    chart02.updateValues();

    chart03 = new StackedBarChart(data01, legend02);
    chart03.chartWidth = 300;
    chart03.chartHeight = 300;
    chart03.posX = screenWidth / 2 + 500;
    chart03.posY = 450;
    chart03.title = "Stacked Bar Chart";
    chart03.updateValues();

    chart04 = new FullBarChart(data01, legend02);
    chart04.chartWidth = 300;
    chart04.chartHeight = 300;
    chart04.posX = screenWidth / 2 - 600;
    chart04.posY = 950;
    chart04.title = "Full Bar Chart";
    chart04.updateValues();

    chart05 = new ScatterChart(data01, legend);
    chart05.chartWidth = 300;
    chart05.chartHeight = 300;
    chart05.posX = screenWidth / 2 + 300;
    chart05.posY = 950;
    chart05.title = "New Chart";
    chart05.updateValues();

}


function draw() {
    background(16, 58, 72);
    scale(.9)
    //Vertical Bar Chart
    chart01.updateValues();
    chart01.render();

    //Horizontal Bar Chart
    chart02.updateValues();
    chart02.render();

    // Stacked Bar Chart
    chart03.updateValues();
    chart03.render();

    // Temp Bar Chart
    chart04.updateValues();
    chart04.render();

    // Scatter Bar Chart
    chart05.updateValues();
    chart05.render();

    //GUI
//     if (params.showValues == true) {
//         fill(params.fColor);
//     } else {
//         noFill();
//     }
}