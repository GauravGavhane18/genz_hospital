
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function CitationGraph({ data }) {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!data || !data.nodes || data.nodes.length === 0) return;

        const width = 600;
        const height = 400;

        // Clear previous
        d3.select(svgRef.current).selectAll("*").remove();

        const svg = d3.select(svgRef.current)
            .attr("width", "100%")
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .style("max-width", "100%")
            .style("height", "auto");

        // Simulation
        const simulation = d3.forceSimulation(data.nodes)
            .force("link", d3.forceLink(data.links).id(d => d.id))
            .force("charge", d3.forceManyBody().strength(-200)) // Repel
            .force("center", d3.forceCenter(width / 2, height / 2));

        // Draw Lines
        const link = svg.append("g")
            .attr("stroke", "#94a3b8")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(data.links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value || 1));

        // Draw Nodes
        const node = svg.append("g")
            .selectAll("g")
            .data(data.nodes)
            .join("g")
            .call(drag(simulation));

        node.append("circle")
            .attr("r", d => d.val ? d.val / 1.5 : 10)
            .attr("fill", d => {
                if (d.group === 1) return "#38bdf8";
                if (d.group === 2) return "#34d399";
                if (d.group === 3) return "#818cf8";
                return "#94a3b8";
            })
            .attr("filter", "drop-shadow(0 0 5px rgba(56, 189, 248, 0.5))")
            .attr("stroke", "rgba(255,255,255,0.2)")
            .attr("stroke-width", 2);

        node.append("text")
            .text(d => d.id)
            .attr("x", 12)
            .attr("y", 4)
            .style("fill", "#94a3b8")
            .style("font-size", "10px")
            .style("pointer-events", "none");

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("transform", d => `translate(${d.x},${d.y})`);
        });


        function drag(simulation) {
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }

    }, [data]);

    return (
        <div className="glass-panel" style={{ padding: '1rem', marginTop: '1rem', overflow: 'hidden' }}>
            <h4 style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Citation Network</h4>
            <svg ref={svgRef}></svg>
        </div>
    );
}
