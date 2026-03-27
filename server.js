/**
 * @file Minimal HTTP server implementation using Node.js built-in http module.
 *
 * This module creates a simple HTTP server that listens on a configurable
 * hostname and port, responding to all incoming requests with a plain-text
 * "Hello, World!" message and an HTTP 200 status code.
 *
 * @module server
 * @author hxu
 * @version 1.0.0
 * @license MIT
 * @see {@link https://nodejs.org/api/http.html} Node.js HTTP Module Documentation
 */

// Import the built-in Node.js HTTP module for creating an HTTP server.
// This is a core module — no npm installation is required.
const http = require('http');

/**
 * The hostname (IP address) on which the server will listen.
 * Set to '127.0.0.1' (IPv4 loopback), restricting access to localhost only.
 * To allow external network access, change this to '0.0.0.0'.
 * @const {string}
 * @default '127.0.0.1'
 */
const hostname = '127.0.0.1';

/**
 * The TCP port number on which the server will listen for incoming connections.
 * Port 3000 is a common default for Node.js development servers.
 * @const {number}
 * @default 3000
 */
const port = 3000;

/**
 * Creates an HTTP server with a request handler that responds to all incoming
 * requests with a plain-text "Hello, World!" message.
 *
 * The handler ignores the request method, URL path, headers, and body,
 * always returning an identical response regardless of the request content.
 *
 * @param {http.IncomingMessage} req - The incoming HTTP request object containing
 *   request method, URL, headers, and body stream.
 * @param {http.ServerResponse} res - The HTTP response object used to send
 *   status code, headers, and body back to the client.
 */
const server = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK), indicating a successful request
  res.statusCode = 200;
  // Set the Content-Type header to 'text/plain' so the client interprets the body as plain text
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body 'Hello, World!\n' and signal that the response is complete
  res.end('Hello, World!\n');
});

/**
 * Starts the HTTP server, binding it to the specified hostname and port.
 * Once the server is successfully bound and listening for connections,
 * the callback function logs the server URL to the console.
 *
 * @description Binds the server to hostname:port and logs a startup confirmation
 *   message to stdout. The server will continue running until the process is
 *   terminated (e.g., via Ctrl+C or a signal).
 */
server.listen(port, hostname, () => {
  // Log the server URL to the console to confirm successful startup
  console.log(`Server running at http://${hostname}:${port}/`);
});
