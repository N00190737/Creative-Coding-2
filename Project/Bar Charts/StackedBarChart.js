class StackedBarChart {
    constructor(_data, _legend) {
        this.data = _data;
        this.legend02 = _legend;

        this.spacing = 10;
        this.margin = 30;
        this.numTicks = 8;
        this.posX = 50;
        this.posY = 100;
        this.colors = [
                                    color('#8cfeff'),
                                    color('#9cecbd'),
                                    color('#eaaf6a'),
                                    color('#fc8980'),
                                    color('#fdda0d')
                                ];
        
        this.showValues = true;
        this.showLabels = true;
        this.showTitle = true;
        this.rotateLabels = true;
        this.showCategories = true;
        this.showHorizontialLines = false;
        this.showTicks = true;
        this.numPlaces = 0;
        this.titleSpacing = 25;
        this.labelSpacing = 15;
        this.yAxis = "Sales";
        this.yAxisSpacing = 50;
        this.labelSize = 14;
        this.xAxis = "Years";
        this.xAxisSpacing = 60;
        this.categoryFontSize = 14;

        this.chartWidth;
        this.chartHeight;
        this.tickIncrements;
        this.maxValue;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.updateValues();
    }
    

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;

        let listValues = this.data.map(function(x) { return x.total })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        this.drawLegend();
        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }


    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x

        //title
        if (this.showTitle) {
            noStroke();
            fill(255);
            textSize(16);
            textStyle(BOLD);
            textAlign(CENTER, BOTTOM);
            text(this.title, this.chartWidth / 2, -this.chartHeight - this.titleSpacing);
        }

        if(this.showCategories) {
            //Side Categories
            push()
                noStroke();
                textSize(this.categoryFontSize);
                textAlign(CENTER, CENTER);
                textStyle(BOLD);
                rotate(270);
                text(this.yAxis, this.chartHeight / 2, -this.yAxisSpacing);
            pop()
        }

            //Bottom Categories
            push()
                noStroke();
                textSize(this.categoryFontSize);
                textStyle(BOLD);
                textAlign(CENTER, CENTER);
                text(this.xAxis, this.chartWidth / 2, this.xAxisSpacing);
            pop()

    }

    drawTicks() {
        if(this.showTicks)             
            for (let i = 0; i <= this.numTicks; i++) {
                //ticks
                stroke(255);
                strokeWeight(1)
                line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
    }   
}

    drawHorizontalLines() {
       if(this.showHorizontialLines){
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
        }
       }
    }

    

    drawRects() {
        push();

        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {

            push();
            for (let j = 0; j < this.data[i].sales.length; j++) {
                let colorNumber = j % 5;
                fill(this.colors[colorNumber]);
                noStroke();
                rect((this.barWidth + this.spacing) * i,0, this.barWidth, this.scaleData(-this.data[i].sales[j]));
                translate(0, this.scaleData(-this.data[i].sales[j]))
            }
            pop();

            //bars
        

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total.toFixed(this.numPlaces), ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(this.labelSize);
                    textAlign(RIGHT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(270);
                    text(this.data[i].year, 0, 0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(this.labelSize);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].years, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }


        }
        pop()
    }

    drawLegend() {
       
        push();
        translate(0, -this.chartHeight);
        for (let i = 0; i < this.legend02.length; i++) {
            noStroke();
            textSize(14);
            textAlign(LEFT, CENTER);
            fill(this.legend02[i].colour)
            text(this.legend02[i].name, this.chartWidth + this.margin, this.tickSpacing * i);
            ellipse(this.chartWidth + this.margin -10, this.tickSpacing * i, 10, 10)
        }
        pop();

        
    }


}
