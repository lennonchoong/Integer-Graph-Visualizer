import React, { Component } from 'react';

class Canvas extends Component {
    constructor() {
        super();
        this.canvasRef = React.createRef();
    }

    // calculates bar's width based on given graph width
    calculateBarWidth(width) {
        const barAlloc = 0.6 * width;
        return barAlloc / this.props.numArr.length;
    }

    // calculates bar's margins based on given graph width
    calculateBarMargins(width) {
        const marginAlloc = 0.4 * width;
        return marginAlloc / (this.props.numArr.length + 1);
    }

    // gets scaled unit height for each bar to scale to
    calculateScaledUnitHeight(height) {
        const maxElem = Math.max(...this.props.numArr);
        return height / maxElem;
    }

    // initializes coordinates and widths needed for drawing graph
    initializeDimensions() {
        this.width = parseFloat(this.props.graphWidth);
        this.height = parseFloat(this.props.graphHeight);
        this.unitHeight = this.calculateScaledUnitHeight(0.85 * this.height);
        this.barMargin = this.calculateBarMargins(0.95 * this.width);
        this.barWidth = this.calculateBarWidth(0.95 * this.width);
    }

    // draws x and y axes
    drawAxes(height, width) {
        this.ctx.fillStyle = '#e5c07b';
        this.ctx.fillRect(20, 0.05 * height, 1.5, 0.9 * height);
        this.ctx.fillRect(20, 0.95 * height, 0.95 * width, 1.5);
    }

    // draws display numbers at the bottom of the x-axis
    drawDisplayNumbers(num, offset) {
        this.ctx.font = "20px Montserrat";
        this.ctx.fillStyle = "#abb2bf";
        this.ctx.textAlign = "center";
        this.ctx.fillText(num, offset + this.barMargin + this.barWidth/2, 0.95 * this.height + 25);
    }

    // draws bar graph
    drawBarGraph() {
        this.drawAxes(this.height, this.width);
        
        const numArr = this.props.numArr;
        
        // draws a individual bars
        const drawSingleBar = (x, y, width, height) => {
            this.ctx.fillStyle = '#E06C75';
            this.ctx.fillRect(x, y, width, height);
            
        }

        let offset = 20;
        
        for (let i = 0; i < numArr.length; i++) {
            const xCoord = offset + this.barMargin;
            const yCoord =  0.05 * this.height + (0.9 * this.height - numArr[i] * this.unitHeight );
            const barHeight = numArr[i] * this.unitHeight;

            drawSingleBar(xCoord, yCoord, this.barWidth, barHeight);
            this.drawDisplayNumbers(numArr[i], offset);
            offset += (this.barMargin + this.barWidth);
        }
    }

    // draws a line graph
    drawLineGraph() {
        this.drawAxes(this.height, this.width);

        const numArr = this.props.numArr;

        // draw vertical line on dot
        const drawVerticalLine = (x, y1, y2) => {
            this.ctx.strokeStyle = '#abb2bf';
            this.ctx.setLineDash([12, 4]);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y2);
            this.ctx.lineTo(x, y1);
            this.ctx.stroke();
        }

        // draw dot on graph
        const drawDot = (x, y) => {
            this.ctx.fillStyle = '#98c379';
            this.ctx.beginPath();
            this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
            this.ctx.fill();
        }

        // draw line between previous and current dot
        const drawLineBetween = (x1, y1, x2, y2) => {
            this.ctx.strokeStyle = "#61afef";
            this.ctx.setLineDash([]);
            this.ctx.lineWidth = 1.5;
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2,  y2);
            this.ctx.stroke();
        }

        let offset = 20;
        let prevCoord = [20, 0.95 * this.height]; // previous coords

        for (let i = 0; i < numArr.length; i++) {
            const xCoord = offset + this.barMargin + this.barWidth / 2;
            const y1Coord = 0.05 * this.height + (0.9 * this.height);
            const y2Coord = 0.05 * this.height + (0.9 * this.height - this.props.numArr[i] * this.unitHeight);

            drawVerticalLine(xCoord, y1Coord, y2Coord);
            drawDot(xCoord, y2Coord);
            drawLineBetween(prevCoord[0], prevCoord[1], xCoord, y2Coord);
            this.drawDisplayNumbers(numArr[i], offset);

            // update previous coords to current coords
            prevCoord[0] = xCoord;
            prevCoord[1] = y2Coord;
            offset += (this.barMargin + this.barWidth);
        }
    }

    // initializes canvas' ref and it's context on component mount
    componentDidMount() {
        this.canvas = this.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');
    }

    // sets dimensions to canvas, and other calculated bar dimensions as class' attributes
    getSnapshotBeforeUpdate() {
        this.initializeDimensions();
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        
        // draw types of graph on state update
        if (this.props.type === 'bar') {
            this.drawBarGraph();
        } else if (this.props.type === 'line') {
            this.drawLineGraph();
        }
    }

    render() {
        return (
            <canvas ref={this.canvasRef}></canvas>
        )
    }
}

export default Canvas