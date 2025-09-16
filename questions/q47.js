// write a function that accepts any number of arguments and returns their sum using rest parameters.

function sum (...value){
  let ans = 0;
  value.forEach(v=>{
    ans+=v;
  })

  return ans;
}

console.log(sum(1, 3, 5));