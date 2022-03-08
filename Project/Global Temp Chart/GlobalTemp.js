class GlobalTempChart {
    constructor(_data, _legend) {
        this.data = _data;
        this.legend = _legend;

        this.spacing = 10;
        this.margin = 30;
        this.numTicks = 10;
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
        this.titleSize = 24;
        this.showHorizontialLines = true;
        this.rotateLabels = false;
        this.showCategories = true;
        this.numPlaces = 0;
        this.titleSpacing = 100;
        this.labelSpacing = 30;
        this.yAxis = "Global Temp (C°)";
        this.yAxisSpacing = 100;
        this.labelSize = 20;
        this.xAxis = "Years (1880-2016)";
        this.xAxisSpacing = 100;
        this.categoryFontSize = 18;

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

        let listValues = this.data.map(function(x) { return x.mean })
        this.maxValue = max(listValues);
        this.minValue = min(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawTicks();
        this.drawHorizontalLines();
        this.drawChart();
        this.drawAxis();
        pop()
    }

    scaleData(num) {
        return map(num, this.minValue, this.maxValue, 0, this.chartHeight);
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
            textSize(this.titleSize);
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
                text((i * this.tickIncrements.toFixed(3)), -15, this.tickSpacing * - i);
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

     drawLabels() {
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
            }
        }
    }
     

     drawChart() {
        push();
        noFill();
        strokeWeight(2);
        stroke(color('#ff6961'));
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
          vertex(
            (this.barWidth + this.spacing) * i, -this.scaleData(this.data[i].mean)
          );
          ellipse(
            (this.barWidth + this.spacing) * i, -this.scaleData(this.data[i].mean), 3);
        }
        endShape();
        push();
    }
}
