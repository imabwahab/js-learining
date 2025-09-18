const input = document.getElementById('num-input');

const buttons = document.querySelectorAll('.c-button');

const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    input.value += button.innerText;
    console.log(input.value)
  });
});

equal.addEventListener('click', ()=>{
 let ans = eval(input.value);
  input.value = ans;
});

clear.addEventListener('click', ()=>{
  input.value = null;
})
