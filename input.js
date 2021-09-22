const {connect} = require('./client');
const {stdin} = require('process');
// const stdin = setupInput();
let connection;

// user input data handler
const handleUserInput = (key) => {
  console.log(`Key pressed: ${key}`);
  // mvmnt command catcher
  if (key === 't') {
    // stdin.setRawMode = (false);
    let msg = 'bowbowbowwwww';
    connection.write(`Say: ${msg}`);
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 's') {
    connection.write("Move: down");
  }

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

module.exports = {
  setupInput,
};