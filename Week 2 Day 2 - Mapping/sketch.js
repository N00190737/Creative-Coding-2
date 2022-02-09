let chartWidth = 400;
let chartHeight = 400;
let data = [50, 90, 200, 70, 50];
let maxValue;
let scaledData = [];
let spacing = 10;
let margin = 20;
let numSideLines = 10;
let sideLines = chartHeight / numSideLines;
let sideLinesIncrements;
let dataLabels = ["Games", "Movies", "Tv", "Sports", "Books"]

let availibleWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1))
let barWidth = availibleWidth / data.length;

function setup() {
    createCanvas(500, 500);
    background(0);

    maxValue = max(data);
    sideLinesIncrements = Math.round(maxValue / numSideLines);

    for (let i = 0; i < data.length; i++) {
        let tempVal = map(data[i], 0, maxValue, 0 , chartHeight)
        scaledData.push(tempVal);
    }
}

function draw() {
    background(0);

    translate(50, 450);

    stroke(255, 200);
    strokeWeight(1);
    line(0, 0, 0, -chartHeight);
    line(0, 0, chartWidth, 0);

    fill(255);
    noStroke();

    stroke(255, 200);
    strokeWeight(1);
    for (let i = 0; i <= numSideLines; i++) {
        line(0, -sideLines * i, -numSideLines, -sideLines * i);
        textAlign(CENTER, CENTER);
        text(i * sideLinesIncrements, -30, -sideLines * i + 2);

    }

    translate(margin, 0);

    // rect((barWidth+spacing)*0, 0, barWidth, -data[0]);
    // rect((barWidth+spacing)*1, 0, barWidth, -data[1]);
    // rect((barWidth+spacing)*2, 0, barWidth, -data[2]);

    for (let i = 0; i < data.length; i++) {
        dataX = chartWidth / data.length
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        noStroke();
        fill(255);
        textSize(15);
        textAlign(CENTER, CENTER);
        text(data[i], ((barWidth + spacing) * i ) + barWidth/2, -scaledData[i] - 10);
        

        noStroke();
        fill(255);
        textSize(15);
        textAlign(CENTER, CENTER);
        text(dataLabels[i], ((barWidth + spacing) * i ) + barWidth/2, 13);
        
    }
}
