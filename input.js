let connection;

const handleUserInput = (key) => {
  // exit code
  console.log(key);
  if (key === '\u0003') {
    console.log('Ended Connection');
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = setupInput;