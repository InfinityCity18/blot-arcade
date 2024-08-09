
const width = 125;
const height = 125;
const scale = 100;
const x_limit = 200;
const y_limit = 200;
const f_left = -125;
const f_right = 125;
const diff_accuracy = 0.02;
const tangents_diff = 0.24;
const left_tangent = -5;
const right_tangent = 5;

function f(x) {
  return x**3;
  //return (1 / 10) * x * (x - 2) * (x - 5) + 3
}

function df(x) {
  return 3 * x * x;
}

function get_tangent_points(a) {
  //right end
  var right;
  console.log("a: ", a);
  if (get_y_from_x_tangent(x_limit, a) < y_limit) {
    console.log("x better on right")
    //x_limit is "better"
    right = [x_limit, get_y_from_x_tangent(x_limit, a)]
  } else {
    //y_limit is "better"
    console.log("y better on right")
    right = [get_x_from_y_tangent(y_limit, a), y_limit]
  }

  //left end
  var left;
  if (get_y_from_x_tangent(-x_limit, a) > -y_limit) {
    //x_limit is "better"
    console.log("x better on left")
    left = [-x_limit, get_y_from_x_tangent(-x_limit, a)]
  } else {
    //y_limit is "better"
    console.log("y better on left")
    left = [get_x_from_y_tangent(-y_limit, a), -y_limit]
  }
  if (df(a) > 0) {
    return [left, right];
  } else {
    return [right, left];
  }
}

function get_y_from_x_tangent(x, a) {
  return df(a) * (x - a) + f(a)
}

function get_x_from_y_tangent(y, a) {
  return (y + a * df(a) - f(a)) / (df(a));
}

setDocDimensions(width, height);

var function_points = []
var tangent_line_pairs = []

for (let i = f_left; i <= f_right; i += diff_accuracy) {
  function_points.push([i, f(i)]);
}

for (let i = left_tangent; i <= right_tangent; i += tangents_diff) {
  console.log(get_tangent_points(i));
  var l = get_tangent_points(i);
  //bt.scale(l, scale);
  //drawLines(l);
  tangent_line_pairs.push(l);
}

function_points = [function_points]


bt.scale(function_points, scale);
console.log(tangent_line_pairs);
bt.scale(tangent_line_pairs, scale);

drawLines(tangent_line_pairs);
drawLines(function_points);
