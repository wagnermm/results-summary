let reaction = document.querySelector('#reaction');
let classReaction = document.getElementsByClassName('inputReactionValue');
let memory = document.querySelector('#memory');
let classMemory = document.getElementsByClassName('inputMemoryValue');
let verbal = document.querySelector('#verbal');
let classVerbal = document.getElementsByClassName('inputVerbalValue');
let visual = document.querySelector('#visual');
let classVisual = document.getElementsByClassName('inputVisualValue');
let valueResult = document.querySelector('#result');
let button = document.getElementById('btn');
let inputValor = /^(?:100|[1-9]?[0-9])$/;


const inputTransferReaction =()=> {
  valueResult.value = Number(reaction.value) + Number(memory.value) + Number(verbal.value) + Number(visual.value);
};

const inputValid = (element)=> {
  element.addEventListener('focusout', function() {
    if(this.value.match(inputValor)) {
      document.getElementById('container').style.border= "1px solid #ddd";
      document.querySelector('.erro-info').innerHTML = "";
    } else {
      document.getElementById('container').style.border= "1px solid #f00";
      document.querySelector('.erro-info').innerHTML = "Invalid number format"
    };
  })
};
for( let emFoco of classReaction ) {
  inputValid(emFoco);
};
for( let emFoco of classMemory ) {
  inputValid(emFoco);
};
for( let emFoco of classVerbal ) {
  inputValid(emFoco);
};
for( let emFoco of classVisual ) {
  inputValid(emFoco);
};

const btnAble = ()=> {
  if(classReaction.match(inputValor) && classMemory.match(inputValor) && classVerbal.match(inputValor) &&
  classVisual.match(inputValor)) {
    button.disabled = false;
    return
  } else {
    button.disabled = true;
  };
}

button.addEventListener('click', function(event) {
  event.preventDefault();
  valueResult.style.display="none";
  var reaction = Number(document.getElementById('reaction').value);
  var memory = Number(document.getElementById('memory').value);
  var verbal = Number(document.getElementById('verbal').value);
  var visual = Number(document.getElementById('visual').value);
  var calcResult = (reaction + memory + verbal + visual) / 4;
  if(calcResult >= 65) {
    document.getElementById('resultText').innerHTML = calcResult;
    document.getElementById('result-title').innerHTML = "Great";
    document.getElementById('result-description').innerHTML = "Your scored higher then 65% of the people who have taken these tests.";
  } else {
    document.getElementById('resultText').innerHTML = calcResult;
    document.getElementById('result-title').innerHTML = "";
    document.getElementById('result-description').innerHTML = "";
  }
});