//Use base URL and Key to queryAPI database based on Web API documntation
//https://openweathermap.org/current
let baseURL = 'http:/api.openweathermap.org/data/2.5/weather?zip';
let apiKey = 'a424bc3e1a842426a9b039b57e52dd99';
/* Global Variables */




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


//chain the events
document.getElementById('generate').addEventListener('click', performAction);
const userzip = document.getElementById("zip").value;

function performAcruib(e) {
    getWeatherData(baseURL, userzip, apiKey)
}

// Get Route II
// Make a GET request
const getWeatherData = async(baseURL, zip, Key) => {
    //build URL endpoint into a fetch call
    //Call the API 
    //The API Key variable is passed as a parameter to 

    const res = await fetch(baseURL + zip + '&appid=' + apiKey)
        // if everything goes well and we get our data back, it will conduct try 
    try {
        // Get new data that is in JSON format using .json method
        const weatherData = await res.json();
        // console the data 
        // 1. we can do something with our returned data here, such as that we could chain events so that we can do something else with that data
        // 2
        // postData()
        console.log(weatherData)

        return weatherData;
    } catch (error) {
        // appropriately handle the error
        console.log("error", error);

    }
}



function performAction(e) {
    const userfeelings = document.getElementById("feelings").value;


    getWeatherData('/all')
        // New Syntax!
        .then(function(getWeatherData) {
            // Add data
            console.log(weatherData);
            //Add data to POST request
            //passing in the URL of the POST route, and an object containing the data to be posted.
            postData('/add', { temp: projectData.weatherData, date: projectData.newDate, content: userfeelings });
        })
        .then(
            updateUI()
        )
}








// // Async POST 
//Post Route: take two arguments, the URL to make a POST to, and an object holding the data to POST.
const postData = async('/add', data = {}) => {

    const response = await fetch('/add', {
        method: 'POST',
        credentials: 'same-origin',
        // set the application to run json file
        headers: {
            'Content-Type': 'application/json',
        },
        //use JSON.stringify to turn data into json format
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

// const retrieveData = async(url = '') => {
//     const request = await fetch(url);
//     try {
//         // Transform into JSON
//         const allData = await request.json()
//     } catch (error) {
//         console.log("error", error);
//         // appropriately handle the error
//     }
// }








//update UI
const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData[0].temp;
        document.getElementById('temp').innerHTML = allData[0].date;
        document.getElementById('content').innerHTML = allData[0].content;

    } catch (error) {
        console.log("error", error);
    }
}