// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//assign port number as 3080
const port = 3080;
// const server = app.listen(port, listening);

// function listening() {
//     console.log(`running on localhost: ${port}`);
// };
// The same code using the arrow function
const server = app.listen(port, () => { console.log(`running on localhost:${port}`) })


//GET Route I:
//Getrequest, first argument is a string that represents the URL path
// Route named 'all' so that the route 'localhost:8000/all' will noew trigger the GET request, which will return the  JavaScript object as laid out in the server code above.
app.get('/all', function(req, res) {
    res.send(projectData);
});

//Post Route
//collect and store user data so that the app can access it later is through making an HTTP POST request
//POST data to the app end point projectData{}
//crate an API named add
app.post('/add', function(req, res) {

    // let newEntry = {
    //     temp: req.body.temp,
    //     date: req.body.date,
    //     content: req.body.content
    // };
    // projectData.push(newEntry);
    // res.send(projectData);
    // console.log(projectData);

    // projectData.temp = req.body.temp;
    // projectData.date = req.body.date;
    // projectData.content = req.body.content;

    // projectData.push(req.body);
    // console.log(projectData);


    let dataObject = {}
    dataObject.date = req.body.date;
    dataObject.temp = req.body.temp;
    dataObject.content = req.body.content;

    console.log(dataObject, typeof dataObject, 'dsjflajfldasjsfkl')

    projectData.push(dataObject);

    res.send(true);


});