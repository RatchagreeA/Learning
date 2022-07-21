const titleDiv = document.createElement("div");
titleDiv.setAttribute("id", "title");
titleDiv.innerHTML = "United States GDP";

const visHolderDiv = document.createElement("div");
visHolderDiv.setAttribute("class", "visHolder");

const containerDiv = document.createElement("div");
containerDiv.setAttribute("class", "container");
containerDiv.appendChild(titleDiv);
containerDiv.appendChild(visHolderDiv);

const mainDiv = document.querySelector(".main");
mainDiv.appendChild(containerDiv);

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

        const xScale = d3
            .scaleTime()
            .domain([d3.min(yearsDate), xMax])
            .range([0, width]);

        const xAxis = d3.axisBottom().scale(xScale);

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

        d3.select("svg")
            .selectAll("rect")
            .data(scaledGDP)
            .enter()
            .append("rect")
            .attr("data-date", (d, i) => data.data[i][0])
            .attr("data-gdp", (d, i) => data.data[i][1])
            .attr("class", "bar")
            .attr("width", barWidth)
            .attr("height", (d) => d)
            .attr("x", (d, i) => xScale(yearsDate[i]))
            .attr("y", (d) => height - d)
            .attr("transform", "translate(60, 30)")
            .attr("index", (d, i) => i)
            .on("mouseover", (d, i) => {
                overlay
                    .transition()
                    .duration("0")
                    .style("height", d + "px")
                    .style("width", barWidth + "px")
                    .style("opacity", 0.9)
                    .style("left", i * barWidth + 0 + "px")
                    .style("top", height - d + "px")
                    .style("transform", "translate(60px,30px)");
                tooltip
                    .attr("data-date", data.data[i][0])
                    .html(
                        `${years[i]}
                        <br>$
                        ${GDP[i]
                            .toFixed(1)
                            .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
                             Billion`
                    )
                    .style("height", "50px")
                    .style("width", "150px")
                    .style("padding", "2px")
                    .style("left", i * barWidth + 30 + "px")
                    .style("top", height - 150 + "px")
                    .style("transform", "translateX(60px)")
                    .transition()
                    .duration(200)
                    .style("opacity", 0.9);
            })
            .on("mouseout", () => {
                tooltip.transition().duration(200).style("opacity", 0);
                overlay.transition().duration(200).style("opacity", 0);
            });
    } catch (err) {
        console.log(err);
    }
}

main();
