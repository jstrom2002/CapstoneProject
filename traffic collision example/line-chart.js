// Line chart: Visualization of traffic collision casualties in Alberta
// Author: Indratmo
// Data source: Government of Alberta
// https://open.alberta.ca/opendata/traffic-collision-casualties-alberta
// d3.js version 4.5.0
//
// The organization of the code follows examples in the "Interactive Data Visualization for the Web" book
// It's possible to organize the code using an object-oriented programming paradigm
// See http://elliotbentley.com/2017/08/09/a-better-way-to-structure-d3-code-es6-version.html

// The width and height of the SVG element to draw the chart
let width = 750;
let height = 250;

let padding = 50;

// The dataset
let dataset;

// For converting strings to years
let parseYear = d3.timeParse("%Y");
let formatTime = d3.timeFormat("%Y");

// For converting CSV values from strings to years and numbers
let rowConverter = function(d) {
    return {
        year: parseYear(d.Year),
        incidents: d.Incidents,
        total: parseInt(d.Value)
    };
};

// Load the csv file into dataset
d3.csv("trafficcollisioncasualtiesv4.02016-01-11.csv", rowConverter, function (data) {
    dataset = data;

    // Injured data, killed data, and total casualties data
    let injuredData = dataset.filter(function (d) {
        return d.incidents === "Number injured";
    });

    let killedData = dataset.filter(function (d) {
        return d.incidents === "Number killed";
    });

    let totalData = dataset.filter(function (d) {
        return d.incidents === "Total number of casualties";
    });

    // Create the scale functions for injured data
    let xScale = d3.scaleTime()
        .domain([
            d3.min(injuredData, function(d) { return d.year; }),
            d3.max(injuredData, function(d) { return d.year; })
        ])
        .range([padding, width - padding*4]); // to put labels

    let yScaleInjured = d3.scaleLinear()
        .domain([
            d3.min(totalData, function (d) { return d.total; }),
            d3.max(totalData, function(d) { return d.total; })
        ])
        .range([height - padding, padding]);

    let yScaleKilled = d3.scaleLinear()
        .domain([
            d3.min(killedData, function (d) { return d.total; }),
            d3.max(killedData, function(d) { return d.total; })
        ])
        .range([height - padding, padding]);

    // Define x-axis and y-axes
    let xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(15)
        .tickFormat(formatTime);

    let yAxisInjured = d3.axisLeft()
        .scale(yScaleInjured)
        .ticks(5);

    let yAxisKilled = d3.axisLeft()
        .scale(yScaleKilled)
        .ticks(5);

    // Create SVG element to draw injured line
    let svgInjured = d3.select("#chartInjured")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Define injured line generator
    let injuredLine = d3.line()
        .x(function (d) {
            return xScale(d.year);
        })
        .y(function (d) {
            return yScaleInjured(d.total);
        });

    // Draw injured line and total casualties line
    svgInjured.append("path")
        .datum(injuredData)
        .attr("class", "line")
        .attr("d", injuredLine);

    svgInjured.append("path")
        .datum(totalData)
        .attr("class", "total-line")
        .attr("d", injuredLine);


    // Create SVG element to draw killed line
    let svgKilled = d3.select("#chartKilled")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Define killed line generator
    let killedLine = d3.line()
        .x(function (d) {
            return xScale(d.year);
        })
        .y(function (d) {
            return yScaleKilled(d.total);
        });

    // Draw killed line
    svgKilled.append("path")
        .datum(killedData)
        .attr("class", "line")
        .attr("d", killedLine);

    // Draw the first and the last data points and their values
    // The magic numbers are used to adjust their positions
    svgInjured.append("circle")
        .attr("cx", xScale(totalData[0].year))
        .attr("cy", yScaleInjured(totalData[0].total))
        .attr("r", 4)
        .attr("class", "data-point");

    svgInjured.append("text")
        .attr("x", xScale(totalData[0].year))
        .attr("y", yScaleInjured(totalData[0].total) + 20)
        .attr("class", "data-point-value")
        .text(function () {
            return totalData[0].total;
        });

    svgInjured.append("circle")
        .attr("cx", xScale(totalData[totalData.length-1].year))
        .attr("cy", yScaleInjured(totalData[totalData.length-1].total))
        .attr("r", 4)
        .attr("class", "data-point");

    svgInjured.append("text")
        .attr("x", xScale(totalData[totalData.length-1].year) - 25)
        .attr("y", yScaleInjured(totalData[totalData.length-1].total) - 15)
        .attr("class", "data-point-value")
        .text(function () {
            return totalData[totalData.length-1].total;
        });

    svgInjured.append("text")
        .attr("x", xScale(totalData[totalData.length-1].year) + 10)
        .attr("y", yScaleInjured(totalData[totalData.length-1].total))
        .attr("class", "total-label")
        .text("Total number of casualties");

    svgInjured.append("text")
        .attr("x", xScale(injuredData[injuredData.length-1].year) + 10)
        .attr("y", yScaleInjured(injuredData[injuredData.length-1].total) + 15)
        .attr("class", "label")
        .text("Injured");

    svgKilled.append("text")
        .attr("x", xScale(killedData[killedData.length-1].year) + 10)
        .attr("y", yScaleKilled(killedData[killedData.length-1].total))
        .attr("class", "label")
        .text("Killed");

    // Draw axes
    svgKilled.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0, " + (height-45) + ")") // provide space to display the years and data source
        .call(xAxis);

    svgInjured.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + (padding-10) + ", 0)")
        .call(yAxisInjured);

    svgKilled.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + (padding-10) + ", 0)")
        .call(yAxisKilled);

    // Add data source
    svgKilled.append("text")
        .text("Data source: https://open.alberta.ca/opendata/traffic-collision-casualties-alberta")
        .attr("x", padding-10)
        .attr("y", height-5)
        .attr("class", "footer");
});
