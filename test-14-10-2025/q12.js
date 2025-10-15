// Q12. Write a debounce() function that debounces a console log of "User is typing..." every 300ms.
// (You only need to show function definition and example usage.)


function debounce() {
  console.log('5s debounce');
}

const button = document.getElementById('btn');

button.addEventListener('click', () => {
  setTimeout(() => {
    debounce();
  }, 5000)
})