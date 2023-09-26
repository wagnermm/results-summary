const button = document.getElementById('btn').addEventListener('click', function(event) {
  event.preventDefault();
  var reaction = Number(document.getElementById('reaction').value);
  var memory = Number(document.getElementById('memory').value);
  var verbal = Number(document.getElementById('verbal').value);
  var visual = Number(document.getElementById('visual').value);
  var calcResult = (reaction + memory + verbal + visual) / 4;
  if(calcResult >= 65) {
    document.getElementById('result').innerHTML = calcResult;
    document.getElementById('result-title').innerHTML = "Great";
    document.getElementById('result-description').innerHTML = "Your scored higher then 65% of the people who have taken these tests.";
  } else {
    document.getElementById('result').innerHTML = calcResult;
    document.getElementById('result-title').innerHTML = "";
    document.getElementById('result-description').innerHTML = "";
  }
});