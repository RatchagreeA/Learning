const width = 800;
const height = 400;
const barWidth = width / 275;

let tooltip = d3
    .select(".visHolder")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0);

let overlay = d3
    .select(".visHolder")
    .append("div")
    .attr("class", "overlay")
    .style("opacity", 0);

let svgContainer = d3
    .select(".visHolder")
    .append("svg")
    .attr("width", width + 100)
    .attr("height", height + 60);

const dataUrl =
    "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";

async function main() {
    try {
        const res = await fetch(dataUrl);
        const data = await res.json();
        console.log(data);

        svgContainer
            .append("text")
            .attr("id", "y-label")
            .attr("x", 0)
            .attr("y", 15)
            .text("Gross Domestic Product");

        const yearsDate = data.data.map((item) => {
            return new Date(item[0]);
        });
        const xMax = new Date(d3.max(yearsDate));
        xMax.setMonth(xMax.getMonth() + 3);
        console.log(xMax);
        const xScale = d3
            .scaleTime()
            .domain([d3.min(yearsDate), xMax])
            .range([0, width]);

        const xAxis = d3.axisBottom().scale(xScale);
        console.log(xAxis);
        svgContainer
            .append("g")
            .call(xAxis)
            .attr("id", "x-axis")
            .attr("transform", "translate(60, 430)");

        const GDP = data.data.map((item) => item[1]);
        const gdpMax = d3.max(GDP);

        const yAxisScale = d3
            .scaleLinear()
            .domain([0, gdpMax])
            .range([height, 0]);
        const yAxis = d3.axisLeft(yAxisScale);
        svgContainer
            .append("g")
            .call(yAxis)
            .attr("id", "y-axis")
            .attr("transform", "translate(60, 30)");
        const linearScale = d3
            .scaleLinear()
            .domain([0, gdpMax])
            .range([0, height]);
        const scaledGDP = GDP.map((item) => linearScale(item));
        const years = data.data.map((item) => {
            const tmp = item[0].substring(5, 7);

            if (tmp === "01") {
                return item[0].substring(0, 4) + " Q1";
            }
            if (tmp === "04") {
                return item[0].substring(0, 4) + " Q2";
            }
            if (tmp === "07") {
                return item[0].substring(0, 4) + " Q3";
            }
            if (tmp === "10") {
                return item[0].substring(0, 4) + " Q4";
            }
            return item[0].substring(0, 4);
        });
        console.log(years);
        d3.select("svg")
            .selectAll("rect")
            .data(scaledGDP)
            .enter()
            .append("rect")
            .attr("data-date", (d, i) => data.data[i][0])
            .attr("data-gdp", (d, i) => data.data[i][1])
            .attr("class", "bar")
            .attr("x", (d, i) => xScale(yearsDate[i]))
            .attr("y", (d) => height - d)
            .attr("width", barWidth)
            .attr("height", (d) => d)
            .attr("transform", "translate(60, 30)")
            .attr("index", (d, i) => i)
            .on("mouseover", (d, i) => {
                console.log("idx " + i);
                console.log("data " + d);
                overlay
                    .transition()
                    .duration(0)
                    .style("height", d)
                    .style("width", barWidth)
                    .style("opacity", 0.9)
                    .style("left", i * barWidth + 0)
                    .style("top", height - d)
                    .style("transform", "translateX(60px)");
            });

        console.log(GDP);
        console.log(yearsDate[5]);
        console.log(xScale(yearsDate[5]));
    } catch (err) {
        console.log(err);
    }
}

main();
