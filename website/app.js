//Use base URL and Key to queryAPI database based on Web API documntation
//https://openweathermap.org/current
let baseURL = 'http:/api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = 'a424bc3e1a842426a9b039b57e52dd99';
const userzip = document.getElementById("zip").value;
//allow local host to access api
const proxy = "http://cors-anywhere.herokuapp.com/"
const api = `${proxy}${baseURL}${userzip}&appid=${apiKey}`;

/* Global Variables */




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


//chain the events
document.getElementById('generate').addEventListener('click', performAction);


// function performAction(e) {
//     getWeatherData(baseURL, userzip, apiKey)
// }


// Chain events

function performAction(e) {
    const userfeelings = document.getElementById("feelings").value;
    const userzip = document.getElementById("zip").value;
    //make get request
    getWeatherData()
        // New Syntax!
        .then(projectData => {
            // Add data
            console.log(projectData);
            const { temp } = projectData.main;
            //Add data to POST request
            //passing in the URL of the POST route, and an object containing the data to be posted.
            postData('/add', { temp, newDate, userfeelings });
        })
        .then(
            updateUI()
        )
}


// Get Route II
// Make a GET request to get weatherData
const getWeatherData = async() => {
    //Call the API 
    //The API Key variable is passed as a parameter to 
    const res = await fetch(api)
        // if everything goes well and we get our data back, it will conduct try 
    try {
        // Get new data that is in JSON format using .json method
        const weatherData = await res.json();
        // console the data 
        // 1. we can do something with our returned data here, such as that we could chain events so that we can do something else with that data
        // 2
        // postData()
        console.log(weatherData);

        return weatherData;

    } catch (error) {
        // appropriately handle the error
        console.log("error", error);

    }
}






// // Async POST 
//Post Route: take two arguments, the URL to make a POST to, and an object holding the data to POST.
// const postData = async('/add', data = {}) => {

//     const response = await fetch('/add', {
//         method: 'POST',
//         credentials: 'same-origin',
//         // set the application to run json file
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         //use JSON.stringify to turn data into json format
//         body: JSON.stringify(data), // body data type must match "Content-Type" header        
//     });

//     try {
//         const newData = await response.json();
//         return newData
//     } catch (error) {
//         console.log("error", error);
//     }
// }

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
    const request = await fetch(api);
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temp;
        document.getElementById('content').innerHTML = allData[0].content;

    } catch (error) {
        console.log("error", error);
    }
}