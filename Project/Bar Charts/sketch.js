let data01 = [
    {   name: "Minecraft",
        total: 200,
        thumbnail: "placeholder",
        year: "2011",
        genre: "Sandbox",
    },
    {   name: "GTA V",
        total: 135,
        thumbnail: "placeholder",
        year: "2013",
        genre: "Action",
        sales: [0, 34, 142, 180]
    },        
    {   name: "Tetris",
        total: 100,
        thumbnail: "placeholder",
        year: "2006",
        genre: "Puzzle",
        sales: [5, 28, 66, 100]
    },        
    {   name: "Wii Sports",
        total: 82,
        thumbnail: "placeholder",
        year: "2006",
        genre: "Sports",
        sales: [18, 29, 56, 83]
    },
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
        average: 1.3
    },
    {   year:"2007",
        total: 10.4,
        sales: [0, 0, 10, 0.4],
        average: 2.6
    },
    {   year:"2008",
        total: 11.4,
        sales: [0, 0, 11, .4],
        average: 5.7
    },
    {   year:"2009",
        total: 16,
        sales: [0, 0, 15, 1],
        average: 4
    },
    {   year:"2010",
        total: 45,
        sales: [0, 0, 2, 43],
        average: 11.25
    },
    {   year:"2011",
        total: 41,
        sales: [4, 0, 7, 30],
        average: 10.5
    },
    {   year:"2012",
        total: 21,
        sales: [5, 0 ,15, 1],
        average: 5.25
    },
    {   year:"2013",
        total: 60,
        sales: [24, 33, 2, 1],
        average: 15
    },
    {   year:"2014",
        total: 36.5,
        sales: [21, 13, 2, .5],
        average: 9.125
    },
    {   year:"2015",
        total: 37.5,
        sales: [18, 15, 4, .5],
        average: 9.375
    },
    {   year:"2016",
        total: 47.5,
        sales: [28, 15, 4, .5],
        average: 11.875
    },
    {   year:"2017",
        total: 40.5,
        sales: [22, 9, 9, .5],
        average: 10.125
    },
    {   year:"2018",
        total: 47,
        sales: [32, 10, 4, 1],
        average: 11.75
    },
    {   year:"2019",
        total: 79,
        sales: [54, 20, 4, 1],
        average: 19.75
    },
    {   year:"2020",
        total: 47,
        sales:[22, 20, 4, 1],
        average: 11.75
    },
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

let params = {
    Spacing: 10,
    SpacingMin: 0,
    SpacingMax: 50,
    SpacingStep: 5,

    Margin: 30,
    MarginMin: 0,
    MarginMax: 60,
    MarginStep: 5,

    NumofTicks: 10,
    NumofTicksMin: 0,
    NumofTicksMax: 20,
    NumofTicksStep: 2,

    ShowValues: true,

    ShowLabels: true,

    ShowTitle: true,

    ShowHorizontialLines: true,

    RotateLabels: true,

    ShowCategories: true,

    NumPlaces: 0,
    NumPlacesMin: 0,
    NumPlacesMax: 5,
    NumPlacesStep: 1,

    TitleSpacing: 25,
    TitleSpacingMin: 0,
    TitleSpacingMax: 50,
    TitleSpacingStep: 1,

    LabelSpacing: 15,
    LabelSpacingMin: 0,
    LabelSpacingMax: 30,
    LabelSpacingStep: 1,

    LabelSize: 14,
    LabelSizeMin: 12,
    LabelSizeMax: 24,
    LabelSizeStep: 1,

    YAxis: "Copies Sold (Millions)",

    YAxisSpacing: 65,
    YAxisSpacingMin: 0,
    YAxisSpacingMax: 100,
    YAxisSpacingStep: 5,

    XAxis: "Game Names",

    XAxisSpacing: 100,
    XAxisSpacingMin: 0,
    XAxisSpacingMax: 150,
    XAxisSpacingStep: 5,

    CategoryFontSize: 14,
    CategoryFontSizeMin: 12,
    CategoryFontSizeMax: 24,
    CategoryFontSizeStep: 1
}

let visible = true;

var gui;

let chart01;
let chart02;
let chart03;
let chart04;
let chart05;

let screenWidth = 1350;
let screenHeight = 1050;


function setup() {
    angleMode(DEGREES);
    createCanvas(screenWidth, screenHeight);

    chart01 = new VerticalBarChart(data01, legend);
    chart01.chartWidth = 300;
    chart01.chartHeight = 300;
    chart01.posX = 125;
    chart01.posY = 450;
    chart01.title = "Vertical Bar Chart";
    chart01.updateValues();
    gui = createGui('Vertical Bar Chart');
	gui.addObject(params);
    gui.setPosition(1375, 100);

    chart02 = new HorizontalBarChart(data01, legend);
    chart02.chartWidth = 300;
    chart02.chartHeight = 300;
    chart02.posX = 800;
    chart02.posY = 450;
    chart02.title = "Horizontal Bar Chart";
    chart02.updateValues();
    gui = createGui('Horizontal Bar Chart');
	gui.addObject(params);
    gui.setPosition(1600, 100);

    chart03 = new StackedBarChart(stackedData , legend03);
    chart03.chartWidth = 400;
    chart03.chartHeight = 300;
    chart03.posX = 125;
    chart03.posY = 950;
    chart03.title = "Stacked Bar Chart";
    chart03.updateValues();
    gui = createGui('Stacked Bar Chart');
	gui.addObject(params);
    gui.setPosition(1825, 100);

    chart04 = new AverageBarChart(stackedData, legend03);
    chart04.chartWidth = 400;
    chart04.chartHeight = 300;
    chart04.posX = 800;
    chart04.posY = 950;
    chart04.title = "Average Bar Chart";
    chart04.updateValues();
    gui = createGui('Average Bar Chart');
	gui.addObject(params);
    gui.setPosition(2050, 100);
}

function draw() {
    background(16, 58, 72);
    scale(1);
    //Vertical Bar Chart
    chart01.updateValues();
    chart01.render();

    if (params.showValues == true) {
        for (let i = 0; i <= this.numTicks; i++) {
            fill(255, 200);
            noStroke();
            textSize(14);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
        }
    }

    //Horizontal Bar Chart
    chart02.updateValues();
    chart02.render();

    // Stacked Bar Chart
    chart03.updateValues();
    chart03.render();

    // Temp Bar Chart
    chart04.updateValues();
    chart04.render();
}