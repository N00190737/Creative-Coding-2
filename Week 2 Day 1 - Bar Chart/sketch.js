let chartWidth = 400;
let chartHeight = 400;
let data = [230, 390, 120, 69, 308];
let spacing = 10;
let margin = 20;
let numSideLines = 10;
let sideLines = chartHeight / numSideLines;

let availibleWidth = chartWidth - (margin*2) - (spacing*(data.length - 1))
let barWidth = availibleWidth / data.length;

console.log(barWidth);

function setup() {
    createCanvas(500, 500);
    background(0);
}
    
function draw() {
    background(0);

    translate(50,450);

    stroke(255,200);
    strokeWeight(1);
    line(0, 0, 0, -400);
    line(0, 0, 400, 0);

    fill(255);
    noStroke();

    stroke(255, 200);
    strokeWeight(1);
        for (let i = 0; i <= numSideLines; i++) {
            line(0, -sideLines * i, -numSideLines, -sideLines * i);
            textAlign(CENTER, CENTER);
            text(i * sideLines, -30, -sideLines * i + 2)
    }

    translate(margin, 0);
    
    // rect((barWidth+spacing)*0, 0, barWidth, -data[0]);
    // rect((barWidth+spacing)*1, 0, barWidth, -data[1]);
    // rect((barWidth+spacing)*2, 0, barWidth, -data[2]);

    for (let i = 0; i < data.length; i++) {
        dataX = chartWidth / data.length;
        dataY = chartHeight / data.length;
        rect((barWidth+spacing)*i, 0, barWidth, -data[i]);
        textAlign(CENTER, CENTER);
        text(data[i], dataX * i + margin, data[i])
    }
} 