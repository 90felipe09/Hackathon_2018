
//Example Dataset
let graphData = {
  xLabel: 'Time',
  yLabel: 'Hamster Count',
  series: [432, 262, null, 10, 234, 252, 123, 200, 30, 102]
};
//Generic
const getSelector = selector => document.querySelector(selector);
//Data Processing
const getMaxValueInData = data => data.reduce((prev, curr) => prev > curr ? prev : curr);
const normalizeData = data => maxValueInData => data.map(value => value / maxValueInData * 100);
//Bar Creation
const createBar = style => {
  let element = document.createElement('div');
  element.classList.add('graph-bar');
  element.setAttribute('Style', style);
  return element;
};
//Bar Rendering
const renderGraph = selector => data => data.map(height => appendBar(selector)(height));
const appendBar = selector => height => getSelector(selector).appendChild(renderBar(height));
const renderBar = height => createBar("height: " + height + "%;");
//Chart Rendering
const renderDataToChart = (id, data) => {
  renderGraph(id + ' [data-graph]')(normalizeData(data.series)(getMaxValueInData(data.series)));
  getSelector(id + ' [data-label~="x"]').textContent = data.xLabel;
  getSelector(id + ' [data-label~="y"]').textContent = data.yLabel;
};
//Fire the ion beam!
renderDataToChart('#hamsters', graphData);
