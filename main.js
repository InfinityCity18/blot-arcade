
const width = 125;
const height = 125;
const scale = 100;

setDocDimensions(width, height);

const diff_accuracy = 0.002;

var function_points = []

for (let i = -width; i <= width; i += diff_accuracy) {
  function_points.push([i, f(i)]);
}

const inverse = false;

//define your own function and also provide its derivative
function f(x) {
  return x * x * x
}

function df(x) {
  return 3 * x * x;
}

const finalLines = [];

function_points = [function_points]

bt.scale(function_points, scale)

// draw it
drawLines(function_points);
