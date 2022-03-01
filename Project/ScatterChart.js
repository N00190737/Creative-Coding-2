class ScatterChart {
    constructor(_data) {
        this.data = _data;

        this.spacing = 10;
        this.margin = 30;
        this.numTicks = 7;
        this.posX = 50;
        this.posY = 100;
        this.colors = [
                                    color('#8cfeff'),
                                    color('#9cecbd'),
                                    color('#eaaf6a'),
                                    color('#fc8980'),
                                ];
        
        this.showValues = true;
        this.showLabels = true;
        this.showTitle = true;
        this.rotateLabels = true;
        this.showCategories = true;
        this.numPlaces = 0;
        this.titleSpacing = 25;
        this.labelSpacing = 15;
        this.yAxis = "Price to make (100,000's)";
        this.yAxisSpacing = 65;
        this.labelSize = 14;
        this.xAxis = "Sales (Millions)";
        this.xAxisSpacing = 60;
        this.categoryFontSize = 14;
        this.thumbnailSizeX = 50;
        this.thumbnailSizeY = 50;

        this.chartWidth;
        this.chartHeight;
        this.tickIncrements;
        this.maxValue;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.currentValue;

        this.updateValues();
    }
    

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;

        let listValues = this.data.map(function(x) { return x.total })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;

        this.currentValue = data01.currentValue;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawTicks();
        // this.drawHorizontalLines();
        // this.drawGames();
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
        for (let i = 0; i <= this.numTicks; i++) {
            //Y ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //X ticks
            stroke(255);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 10,);

            //Y numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.currentValue), -15, this.tickSpacing * -i);
            }

            //X numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(CENTER, RIGHT);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -this.tickSpacing * -i, 30);
                        }            
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);


        }
    }

    drawRects() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {

            rect(this.scaleData(-this.data[i].total), this.currentValue, this.thumbnailSizeX, this.thumbnailSizeY)

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(this.labelSize);
                    textAlign(RIGHT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(270);
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(this.labelSize);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }
        }
        pop()
    }

    drawGame() {
        for (let i = 0; i < data.length; i++) {

        }
    }    
}
