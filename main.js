
const height = 125;
const scale = 100;
const x_limit = 200;
const y_limit = 200;
const diff_accuracy = 0.1;
const tangents_diff = 0.1;

function f(x) {
  return x*x
}

function df(x) {
  return 2 * x
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

for (let i = -width; i <= width; i += diff_accuracy) {
  function_points.push([i, f(i)]);
}

for (let i = -width; i <= width; i += tangents_diff) {
  console.log(get_tangent_points(i));
  var l = [get_tangent_points(i)];
  drawLines(l);
  tangent_line_pairs.push(get_tangent_points(i));
}

function_points = [function_points]
//drawLines(tangent_line_pairs);

//bt.scale(function_points, scale)

// draw it
drawLines(function_points);nes(function_points);
