// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", (d, i) => i * 30)
//     .attr("y", (d, i) => h - 3 * d)
//     .attr("width", 25)
//     .attr("height", (d, i) => 3 * d)
//     .attr("fill", "navy");

// svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .attr("x", (d, i) => i * 30)
//     .attr("y", (d, i) => h - 3 * d - 3)
//     .text((d, i) => d)
//     .style("font-size", "25px")
//     .attr("fill", "red");

// const dataset = [
//     [34, 78],
//     [109, 280],
//     [310, 120],
//     [79, 411],
//     [420, 220],
//     [233, 145],
//     [333, 96],
//     [222, 333],
//     [78, 320],
//     [21, 123],
// ];

// const w = 500;
// const h = 500;

// const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

// svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle")
//     .attr("cx", (d, i) => d[0])
//     .attr("cy", (d, i) => h - d[1])
//     .attr("r", 5);

// svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .attr("x", (d) => d[0] + 5)
//     .attr("y", (d) => h - d[1])
//     .text((d) => `${d[0]}, ${d[1]}`);

// const scale = d3.scaleLinear();
// scale.domain([250, 500]);
// scale.range([10, 150]);

// const output = scale(50);
// d3.select("body").append("h2").text(output);

// const dataset = [
//     [34, 78],
//     [109, 280],
//     [310, 120],
//     [79, 411],
//     [420, 220],
//     [233, 145],
//     [333, 96],
//     [222, 333],
//     [78, 320],
//     [21, 123],
// ];

// const w = 500;
// const h = 500;

// // Padding between the SVG canvas boundary and the plot
// const padding = 30;

// // Create an x and y scale

// const xScale = d3
//     .scaleLinear()
//     .domain([0, d3.max(dataset, (d) => d[0])])
//     .range([padding, w - padding]);

// // Add your code below this line

// const yScale = d3
//     .scaleLinear()
//     .domain([0, d3.max(dataset, (d) => d[1])])
//     .range([h - padding, padding]);

// // Add your code above this line

// const output = yScale(411); // Returns 30
// d3.select("body").append("h2").text(output);

const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123],
];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]);

const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - padding, padding]);

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d[0]))
    .attr("cy", (d) => yScale(d[1]))
    .attr("r", (d) => 5);

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) => d[0] + "," + d[1])
    .attr("x", (d) => xScale(d[0] + 10))
    .attr("y", (d) => yScale(d[1]));

const xAxis = d3.axisBottom(xScale);
// Add your code below this line
const yAxis = d3.axisLeft(yScale);
// Add your code above this line

svg.append("g")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

// Add your code below this line
svg.append("g")
    .attr("transform", "translate(" + padding + ", 0)")
    .call(yAxis);
