// THIS IS THE SERVER 

const express = require("express");
const app = express();


// run server on 3000 port
app.listen(3000, () => {
  console.log("server started");
});


// The server is waiting for someone to request / (the homepage).
// If a request comes (GET /), the server responds with "Hello, welcome to my API!".
app.get("/", (req, res) => {
  res.send("Hello, welcome to my API!");
});
// A request is when the client asks the server for something (GET, POST, etc.).
// A response is what the server sends back.


app.use(express.json()); // Middleware to parse JSON


// A client (Postman) sends a POST request to /api/nba with JSON data.
// The server reads the request and extracts the data.
// The server responds with "Data received successfully!".
app.post("/api/nba", (req, res) => {
  const { team, player } = req.body; // Extract data from request body
  console.log("Team:", team);
  console.log("Player:", player);
  res.send("Data received successfully!");
});

// difference in get and post is, in both we are sending a response but in post we are also getting the data 


// another example 

// app.get("/menu", (req, res) => {
//     res.send("Pizza, Pasta, Salad");
//   });

//  Client asks: "What’s on the menu?"
//  Server responds: "Pizza, Pasta, Salad"
  
  

// POST Request (Ordering a Pizza)
 
//   app.use(express.json());
  
//   app.post("/order", (req, res) => {
//     const { item } = req.body;
//     res.send(`Your ${item} is being prepared!`);
//   });