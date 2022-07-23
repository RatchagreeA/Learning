// const titleDiv = document.createElement("div");
// titleDiv.setAttribute("id", "title");
// titleDiv.innerHTML = "United States GDP";

// const visHolderDiv = document.createElement("div");
// visHolderDiv.setAttribute("class", "visHolder");

// const containerDiv = document.createElement("div");
// containerDiv.setAttribute("class", "container");
// containerDiv.appendChild(titleDiv);
// containerDiv.appendChild(visHolderDiv);

// const mainDiv = document.querySelector(".main");
// mainDiv.appendChild(containerDiv);

const margin = {
    top: 100,
    right: 20,
    bottom: 30,
    left: 60,
};
const width = 920 - margin.left - margin.right;
const height = 630 - margin.top - margin.bottom;
const x = d3.scaleLinear().range([0, width]);
const y = d3.scaleTime().range([0, height]);
const xFormat = d3.format("d");
const yFormat = d3.timeFormat("%M:%S");
const xAxis = d3.axisBottom(x).tickFormat(xFormat);
const yAxis = d3.axisLeft(y).tickFormat(yFormat);
const color = d3.scaleOrdinal(d3.schemeCategory10);

const tooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
    .attr("class", "tooltip")
    .style("opacity", 0);

const svgContainer = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class", "graph")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const dataUrl =
    "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

async function main() {
    try {
        const res = await fetch(dataUrl);
        const data = await res.json();
        console.log(data);
        data.forEach(function (d) {
            const parsedTime = d.Time.split(":");
            d.Time = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
        });
        const minX = d3.min(data, (d) => d.Year - 1);
        const maxX = d3.max(data, (d) => d.Year + 1);
        const [minY, maxY] = d3.extent(data, (d) => d.Time);
        x.domain([minX, maxX]);
        y.domain([minY, maxY]);
        console.log(svgContainer);
        svgContainer
            .append("g")
            .attr("class", "axis")
            .attr("id", "axis")
            .attr("transform", `translate(0,${height})`)
            .call(xAxis)
            .append("text")
            .attr("class", "x-axis-label")
            .attr("x", width)
            .attr("y", -6)
            .style("text-anchor", "end")
            .text("Year");

        svgContainer
            .append("g")
            .attr("class", "y-axis")
            .attr("id", "y-axis")
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Best Time (minutes)");

        svgContainer
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -160)
            .attr("y", -44)
            .style("font-size", 18)
            .text("Time in Minutes");
    } catch (err) {
        console.log(err);
    }
}

main();
