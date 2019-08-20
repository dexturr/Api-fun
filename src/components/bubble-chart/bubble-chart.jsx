import React from 'react';
import rd3 from 'react-d3-library';
import d3 from 'd3'
const RD3Component = rd3.Component;

// I am unhappy with how coupled this function is to the data. I would prefer to have a data strcutre of the form:
/*
 * [
     {
        label: 'Label',
        value: 'Value
     }
   ] 
 * And map the API response data to the new form of data
 */
const getNode = (data) => {
    const node = document.createElement('div');
        // append the svg object to the body of the page
    const height = 460
    const width = 460
    const svg = d3.select(node)
    .append("svg")
        .attr("width", width)
        .attr("height", height)

    // The scale you use for bubble size
    const size = d3.scale.sqrt()
    .domain([1, 100])  // What's in the data, let's say it is percentage
    .range([1, 100])  // Size in pixel

    const xCircle = 230
    const xLabel = 380
    const yCircle = 330
    const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'grey', 'black', 'white', 'orange']

    function myColor(d) {
        const index = data.findIndex((v) => d === v);
        return colors[index]
    }

    svg
    .selectAll("legend")
    .data(data)
    .enter()
    .append("circle")
        .attr("cx", xCircle)
        .attr("cy", function({ perc }){ return yCircle - size(perc) } )
        .attr("r", function({ perc }){ return size(perc) })
        .style("fill", function(d){return myColor(d) })
        .attr("stroke", "black")

        
    // Add legend: segments
    svg
    .selectAll("legend")
    .data(data)
    .enter()
    .append("line")
        .attr('x1', function({ perc }){ return xCircle + size(perc) } )
        .attr('x2', xLabel)
        .attr('y1', function({ perc }){ return yCircle - size(perc) } )
        .attr('y2', function({ perc }){ return yCircle - size(perc) } )
        .attr('stroke', 'black')
        .style('stroke-dasharray', ('2,2'))

    // Add legend: labels
    svg
    .selectAll("legend")
    .data(data)
    .enter()
    .append("text")
        .attr('x', xLabel)
        .attr('y', function({ perc }){ return yCircle - size(perc) } )
        .text(({ fuel, perc}) => `${fuel}: ${perc}`)
        .style("font-size", 10)
        .attr('alignment-baseline', 'middle')

    return node;
}

// TODO move to using hooks for this
export default class BubbleChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    const { data } = this.props;
    const node = getNode(data);
    this.setState({d3: node});
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
};