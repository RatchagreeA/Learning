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
        const res = await fetch(dataUrl);
        const gdpData = await res.json();
        console.log(gdpData);

        svgContainer
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -200)
            .attr("y", 80)
            .text("Gross Domestic Product");

        var years = gdpData.data.map((item) => {
            var temp = item[0].substring(5, 7);

            if (temp === "01") {
                return item[0].substring(0, 4) + " Q1";
            }
            if (temp === "04") {
                return item[0].substring(0, 4) + " Q2";
            }
            if (temp === "07") {
                return item[0].substring(0, 4) + " Q3";
            }
            if (temp === "10") {
                return item[0].substring(0, 4) + " Q4";
            }
            return item[0].substring(0, 4);
        });
        console.log(years);
        var yearsDate = gdpData.data.map((item) => {
            return new Date(item[0]);
        });
        var xMax = new Date(d3.max(yearsDate));
        xMax.setMonth(xMax.getMonth() + 3);
        console.log(xMax);
        var xScale = d3
            .scaleTime()
            .domain([d3.min(yearsDate), xMax])
            .range([0, width]);

        var xAxis = d3.axisBottom().scale(xScale);
        console.log(xAxis);
        svgContainer
            .append("g")
            .call(xAxis)
            .attr("id", "x-axis")
            .attr("transform", "translate(60, 400)");
    } catch (err) {
        console.log(err);
    }
}

main();
