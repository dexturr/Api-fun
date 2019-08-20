import React from 'react';
import rd3 from 'react-d3-library';
import d3 from 'd3'

// import node from 'd3file';
const RD3Component = rd3.Component;

const node = document.createElement('div');
    // append the svg object to the body of the page
var height = 460
var width = 460
var svg = d3.select(node)
  .append("svg")
    .attr("width", width)
    .attr("height", height)

// The scale you use for bubble size
var size = d3.scale.sqrt()
  .domain([1, 100])  // What's in the data, let's say it is percentage
  .range([1, 100])  // Size in pixel

// Add legend: circles
var valuesToShow = [100, 50, 10]
var xCircle = 230
var xLabel = 380
var yCircle = 330
var colors = ['blue', 'red', 'green']

function myColor(d) {
 var index = valuesToShow.findIndex((v) => d === v);
return colors[index]

}

svg
  .selectAll("legend")
  .data(valuesToShow)
  .enter()
  .append("circle")
    .attr("cx", xCircle)
    .attr("cy", function(d){ return yCircle - size(d) } )
    .attr("r", function(d){ return size(d) })
    .style("fill", function(d){return myColor(d) })
    .attr("stroke", "black")

// Add legend: segments
svg
  .selectAll("legend")
  .data(valuesToShow)
  .enter()
  .append("line")
    .attr('x1', function(d){ return xCircle + size(d) } )
    .attr('x2', xLabel)
    .attr('y1', function(d){ return yCircle - size(d) } )
    .attr('y2', function(d){ return yCircle - size(d) } )
    .attr('stroke', 'black')
    .style('stroke-dasharray', ('2,2'))

// Add legend: labels
svg
  .selectAll("legend")
  .data(valuesToShow)
  .enter()
  .append("text")
    .attr('x', xLabel)
    .attr('y', function(d){ return yCircle - size(d) } )
    .text( function(d){ return d } )
    .style("font-size", 10)
    .attr('alignment-baseline', 'middle')

export default class my_First_React_D3_Library_Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    this.setState({d3: node});
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
};