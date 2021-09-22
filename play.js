// Snake Game Implementation over TCP and HTTP //

// descructured imports from client
const {connect} = require('./client');
//input controls
const setupInput = require('./input');
const stdin = setupInput();
const conn = connect();


// user input data handler
const handleUserInput = (key) => {
  // mvmnt command catcher
  if (key === 't') {
    // stdin.setRawMode = (false);
    let msg = 'bowbowbowwwww';
    conn.write(`Say: ${msg}`);
  }
  if (key === 'w') {
    conn.write("Move: up");
  }
  if (key === 'a') {
    conn.write("Move: left");
  }
  if (key === 'd') {
    conn.write("Move: right");
  }
  if (key === 's') {
    conn.write("Move: down");
  }
  if (key === 'i') {
    setTimeout(() => {
      conn.write("Move: up");
    }, 0);
    conn.write("Move: up");
  }
  if (key === 'j') {
    setTimeout(() => {
      conn.write("Move: left");
    }, 0);
    conn.write("Move: left");
  }
  if (key === 'l') {
    setTimeout(() => {
      conn.write("Move: right");
    }, 0);
    conn.write("Move: right");
  }
  if (key === 'k') {
    setTimeout(() => {
      conn.write("Move: down");
    }, 0);
    conn.write("Move: down");
  }

  console.log(connect);
};

stdin.on('data', handleUserInput);

// connect();