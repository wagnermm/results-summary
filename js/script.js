const button = document.getElementById('btn').addEventListener('click', function(event) {
  event.preventDefault();
  var reaction = Number(document.getElementById('reaction').value);
  var memory = Number(document.getElementById('memory').value);
  var verbal = Number(document.getElementById('verbal').value);
  var visual = Number(document.getElementById('visual').value);
  var calcResult = (reaction + memory + verbal + visual) / 4;
  document.getElementById('result').innerHTML = calcResult;
})