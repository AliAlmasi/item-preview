console.log("It's Working. . .");

function visitPage() {
  if (confirm("Are you sure to redirect to Jonas Schmedtmann's Pen?")) {
  window.location = "https://codepen.io/jonasschmedtmann/pen/48f20ea036df9afc09978b07eca226b8";
} else {
  return null;
}
}