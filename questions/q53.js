// Use setInterval to display the current time every at one-second intervals.

setInterval(() =>{
  let now = new Date();
  let time = now.toLocaleTimeString();
  console.log(time);
}, 1000)