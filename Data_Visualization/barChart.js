var width = 800,
    height = 400,
    barWidth = width / 275;

var tooltip = d3
    .select(".visHolder")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0);

var overlay = d3
    .select(".visHolder")
    .append("div")
    .attr("class", "overlay")
    .style("opacity", 0);

var svgContainer = d3
    .select(".visHolder")
    .append("svg")
    .attr("width", width + 100)
    .attr("height", height + 60);

const dataUrl =
    "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";

async function main() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

main();
