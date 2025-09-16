// Show the differnce between let, const and var with examples.

{
  let x = 2;

  function printLet() {
    console.log('let can be declard empty.')
    console.log(`value of let var is ${x}`);
  }
  printLet()
  const y = 24;
  function printConst() {
    console.log('const cannot be declared empty.');
    console.log(` value of const var is ${y}`);
    var z = 13;
  }
  printConst()

  console.log(`var is function scoped and is older version of declaring varialbe.`)

}

