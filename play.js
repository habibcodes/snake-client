// Snake Game Implementation over TCP and HTTP //
// Connecting to the Server //

const { on } = require("events");
const net = require("net");
// descructured imports from client
const {connect} = require('./client');

connect();