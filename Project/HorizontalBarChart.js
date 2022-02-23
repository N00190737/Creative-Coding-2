class HorizontalBarChart {
    constructor(_data) {
        this.data = _data;

        this.spacing = 10;
        this.margin = 30;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 100;
        this.colors = [color('#8cfeff'), color('#9cecbd'), color('#eaaf6a'), color('#fc8980')];
        
        this.showValues = true;
        this.showLabels = true;
        this.showTitle = true;
        this.rotateLabels = false;
        this.numPlaces = 0;
        this.titleSpacing = 25;
        this.labelSpacing = 15;
        this.titleSpacing = 25;
        this.yAxis = "Copies Sold";
        this.yAxisSpacing = 50;

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
        this.drawVerticalLines();
        this.drawRects();
        this.drawAxis();
        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }


    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartWidth); //y
        line(0, 0, this.chartHeight, 0); //x

        //title
        if (this.showTitle) {
            noStroke();
            fill(255);
            textSize(16);
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
                rotate(3 * PI / 2);
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
            line(i * this.tickSpacing, 0, i * this.tickSpacing, 15);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(CENTER, RIGHT);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -this.tickSpacing * -i, 30);
            }
        }
    }

    drawVerticalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //vertical lines
            stroke(255, 50);
            strokeWeight(1);
            line(i * this.tickSpacing, 0, this.tickSpacing * i, -this.chartWidth);
        }
    }

    drawRects() {
        push();
        translate(0, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 4;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect(0, (this.barWidth + this.spacing) * -i, this.scaleData(this.data[i].total), -this.barWidth);

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, CENTER);
            text(this.data[i].total, this.scaleData(this.data[i].total) + this.labelSpacing , ((this.barWidth + this.spacing) * -i)  - this.barWidth / 2 );

            //text
            if (this.showLabels) {
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(RIGHT, CENTER);
                    text(this.data[i].name, -10, ((this.barWidth + this.spacing) * -i)  -this.barWidth / 2);
            }

            


        }
        pop()
    }

}
