const width = 125;
const height = 125;
const scale = 100;
const x_limit = 1000;
const y_limit = 1000;
const diff_accuracy = 0.1;
const tangents_diff = 1;

function f(x) {
  return x * x * x;
}

function df(x) {
  return 3 * x * x;
}

function get_tangent_points(a) {
  
}

function get_y_from_x_tangent(x, a) {
  return df(a)*(x-a) + f(a)
}

function get_x_from_y_tangent(y, a) {
  return (y+a*df(a)-f(a))/(df(a));
}

setDocDimensions(width, height);

var function_points = []
var tangents_x = []

for (let i = -width; i <= width; i += diff_accuracy) {
  function_points.push([i, f(i)]);
}

for (let i = -width; i <= width; i += tangents_diff) {
  tangents_x.push(i);
}

const inverse = false;

//define your own function and also provide its derivative


const finalLines = [];

function_points = [function_points]

bt.scale(function_points, scale)

// draw it
drawLines(function_points);
