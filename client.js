const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  // connect to server for Snake
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Events listener section
  // when connected to server, do following
  conn.on('connect', ()  => {
    //code that does something when the connection is first established
    console.log('Successfully connected to game server.');

    //send name initials
    conn.write('Name: AoE');

    //data to server
        
    // catches incoming data from server
    conn.on('data', (data) => {
      //
      console.log(`Recieved data from server: ${data}`);
    });

    
    // end event handler
    conn.on('end', () => {
      console.log('Game over!');
    });
    
    // close connection to server
    conn.on('close', () => {
      //
      console.log('Server closed connection');
      process.exit();
    });

  });
  return conn;
};

// console.log("Connecting ...");


module.exports = {
  connect,
};