// descructured imports from client
const {connect} = require('./client');
//input controls
const {setupInput} = require('./input');


console.log("Connecting ...");
// connect();

setupInput(connect());