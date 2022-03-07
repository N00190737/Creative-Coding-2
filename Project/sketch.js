let data01 = [
    {   name: "Minecraft",
        total: 446,
        thumbnail: "placeholder",
        year: "2011",
        genre: "Sandbox",
},
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

let stackedData = [
    {   year:"2006",
        total: 5.2,
        sales: [0, 0 , 5, 0.2],
    },
    {   year:"2007",
        total: 10.4,
        sales: [0, 0, 10, 0.4],
    },
    {   year:"2008",
        total: 15,
        sales: [0, 0, 11, .4],
    },
    {   year:"2009",
        total: 16,
        sales: [0, 0, 15, 1],
    },
    {   year:"2010",
        total: 45,
        sales: [0, 0, 2, 43],
    },
    {   year:"2011",
        total: 41,
        sales: [4, 0, 7, 30],
    },
    {   year:"2012",
        total: 21,
        sales: [5, 0 ,15, 1],
    },
    {   year:"2013",
        total: 60,
        sales: [24, 33, 2, 1],
    },
    {   year:"2014",
        total: 36.5,
        sales: [21, 13, 2, .5],
    },
    {   year:"2015",
        total: 37.5,
        sales: [18, 15, 4, .5],
    },
    {   year:"2016",
        total: 47.5,
        sales: [28, 15, 4, .5],
    },
    {   year:"2017",
        total: 40.5,
        sales: [22, 9, 9, .5],
    },
    {   year:"2018",
        total: 47,
        sales: [32, 10, 4, 1],
    },
    {   year:"2019",
        total: 79,
        sales: [54, 20, 4, 1],
    },
    {   year:"2020",
        total: 47,
        sales:[22, 20, 4, 1],
    },
]

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

let legend03 = [
    {name: "Minecraft", colour:'#8cfeff'},
    {name: "GTA V", colour:'#9cecbd'},
    {name: "Tetris", colour:'#eaaf6a'},
    {name: "Wii Sports", colour:'#fc8980'}
]

let chart01;
let chart02;
let chart03;
let chart04;
let chart05;

let screenWidth = 2500;
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
    chart02.posX = 800;
    chart02.posY = 450;
    chart02.title = "Horizontal Bar Chart";
    chart02.updateValues();

    chart03 = new StackedBarChart(stackedData , legend03);
    chart03.chartWidth = 400;
    chart03.chartHeight = 300;
    chart03.posX = 125;
    chart03.posY = 950;
    chart03.title = "Stacked Bar Chart";
    chart03.updateValues();

    chart04 = new AverageBarChart(stackedData, legend03);
    chart04.chartWidth = 400;
    chart04.chartHeight = 300;
    chart04.posX = 800;
    chart04.posY = 950;
    chart04.title = "Full Bar Chart";
    chart04.updateValues();

    chart05 = new ScatterChart(data01, legend);
    chart05.chartWidth = 300;
    chart05.chartHeight = 800;
    chart05.posX = 1400;
    chart05.posY = 950;
    chart05.title = "New Chart";
    chart05.updateValues();

}


function draw() {
    background(16, 58, 72);
    scale(1)
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