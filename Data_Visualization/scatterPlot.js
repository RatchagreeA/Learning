const margin = {
    top: 100,
    right: 60,
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
    .select(".main")
    .append("div")
    .attr("id", "tooltip")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("opacity", 0);

const svgContainer = d3
    .select(".main")
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

        svgContainer
            .append("g")
            .attr("class", "axis")
            .attr("id", "x-axis")
            .attr("transform", `translate(0,${height})`)
            .call(xAxis);

        svgContainer
            .append("text")
            .style("font-size", 18)
            .attr("transform", `translate(${width + 20},${height})`)
            .text("Year");

        svgContainer
            .append("g")
            .attr("class", "axis")
            .attr("id", "y-axis")
            .call(yAxis);

        svgContainer
            .append("text")
            .attr("transform", `translate(${-60},${-20})`)
            .style("font-size", 18)
            .text("Best Time (MM:SS)");

        const color = d3.scaleOrdinal(d3.schemeCategory10);
        const timeFormat = d3.timeFormat("%M:%S");
        svgContainer
            .selectAll(".dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "dot")
            .attr("r", 6)
            .attr("cx", (d) => x(d.Year))
            .attr("cy", (d) => y(d.Time))
            .attr("data-xvalue", (d) => d.Year)
            .attr("data-yvalue", (d) => d.Time.toISOString())
            .style("fill", (d) => color(d.Doping !== ""))
            .on("mouseover", (d, i) => {
                tooltip.style("opacity", 0.9);
                tooltip.attr("data-year", d.Year);
                tooltip
                    .html(
                        `${d.Name}: ${d.Nationality}
                    <br/>
                    Year: ${d.Year}, Time: ${timeFormat(d.Time)}
                    ${d.Doping ? `<br/><br/>${d.Doping}` : ""}`
                    )
                    .style("left", d3.event.pageX + "px")
                    .style("top", d3.event.pageY - 28 + "px");
            })
            .on("mouseout", () => {
                tooltip.style("opacity", 0);
            });

        // title
        svgContainer
            .append("text")
            .attr("id", "title")
            .attr("x", width / 2)
            .attr("y", 0 - margin.top / 2)
            .attr("text-anchor", "middle")
            .style("font-size", "30px")
            .text("Doping in Professional Bicycle Racing");

        // subtitle
        svgContainer
            .append("text")
            .attr("x", width / 2)
            .attr("y", 0 - margin.top / 2 + 25)
            .attr("text-anchor", "middle")
            .style("font-size", "20px")
            .text("35 Fastest times up Alpe d'Huez");

        // legend
        const legendContainer = svgContainer.append("g").attr("id", "legend");
        const legend = legendContainer
            .selectAll("#legend")
            .data(color.domain())
            .enter()
            .append("g")
            .attr("class", "legend-label")
            .attr(
                "transform",
                (d, i) => `translate(0, ${height / 2 - i * 20})`
            );
        legend
            .append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);
        legend
            .append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("font-size", 15)
            .style("text-anchor", "end")
            .text((d) =>
                d ? "Riders with doping allegations" : "No doping allegations"
            );
    } catch (err) {
        console.log(err);
    }
}

main();
