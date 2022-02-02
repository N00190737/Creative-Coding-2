let distance =  23;
let rectX = 20;
let rectY =20;
let numBoxs = 5;
let spacing = 5;
let numRows = 5;
let numCols = 5;
let width = 500;
let height = 500;


clap(1,10);

function setup(){
    createCanvas(width,height);
    background(0);
    
}



function draw(){
    fill(255,0,0);
    stroke(255);
    drawGrid();
}

function drawBoxs(){
    for(let i = 0; i<numBoxs; i++){
        let totalSpacing = rectWidth + spacing;
        rect(i*totalSpacing + rectX, rectY, rectWidth, rectHeight);
    }
}

function clap(startnum, endnum){
    let loopCount = endnum - startnum;
    for(let i=0; i<=loopCount; i++){
    console.log("Whats the craic " + ( startnum+i))
    }
}

function addMeUp(num01,num02){
    let total = num01 + num02;
    console.log("Calculation is complete my guy");
    return total;
}

function drawGrid(){
        for(let i; i<numBoxs; i++){
            let rectWidth = width/numBoxs;
            let rectHeight = height/numBoxs;
            rect(rectX,rectY,rectWidth,rectHeight)
        }
}