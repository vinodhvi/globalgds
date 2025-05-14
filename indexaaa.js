const http = require('http');
const express = require('express');
const axios = require('axios');
const cors = require("cors")
const app = express();
app.use(express.json());
const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
const hostname = '127.0.0.1';
const port = 3008;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World'); 
// });
const server = http.createServer(app);

app.get('/',(req, res) => {
  res.json('Hell node express js');
});


app.get('/airline_name', (req, res) => {
  // let json = req.query;
  // console.log("jses",json)
  // Make a POST API call using axios
  console.log("requst data",req.query)
  axios.get('https://groupy.live/tripbooking.com/transfers_web/airline_name?term='+req.query.term)
    .then(response => {
      // Handle the API response data
      console.log(response)
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

app.post('/hotel_search', (req, res) => {
  let data = req.body;
  let credentials = {
    "user_id": "TrawexAPI2023",
    "user_password": "TrawexAPI2023PWD",
    "access": "Test",
    "ip_address": "49.36.177.39",
  };
  let json = Object.assign(credentials, data);
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/hotel_trawexv6/hotel_search', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});


app.post('/filterResults', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/hotel_trawexv6/filterResults', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

app.get('/hotelDetails', (req, res) => {
  // let json = req.query;
  // console.log("jses",json)
  // Make a POST API call using axios
  axios.get('https://travelnext.works/api/hotel_trawexv6/hotelDetails?sessionId='+req.query.sessionId+'&hotelId='+req.query.hotelId +'&productId='+ req.query.productId + '&tokenId=' +req.query.tokenId)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});



// "https://travelnext.works/api/hotel_trawexv6/getNearByPlaces?latitude="+ latitude +'&longitude='+longitude+'&radius='+radius;

app.get('/getNearByPlaces', (req, res) => {
  // let json = req.query;
  // console.log("jses",json)
  // Make a POST API call using axios
  axios.get('https://travelnext.works/api/hotel_trawexv6/getNearByPlaces?latitude='+req.query.latitude+'&longitude='+req.query.longitude +'&radius='+ req.query.radius)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

// https://travelnext.works/api/hotel_trawexv6/get_room_rates

app.post('/get_room_rates', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/hotel_trawexv6/get_room_rates', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

// https://travelnext.works/api/hotel_trawexv6/get_rate_rules
app.post('/get_rate_rules', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/hotel_trawexv6/get_rate_rules', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});
// https://travelnext.works/api/hotel_trawexv6/hotel_book
app.post('/hotel_book', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/hotel_trawexv6/hotel_book', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});


app.post('/airport_suggestion', (req, res) => {
  let data = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/flights/airport_suggestion', data)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});


app.post('/availability', (req, res) => {
  let data = req.body;
  let credentials = {
    "user_id": "TrawexAPI2023",
    "user_password": "TrawexAPI2023PWD",
    "access": "Test",
    "ip_address": "49.36.177.39",
  };
  let json = Object.assign(credentials, data);
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/aeroVE5/availability', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

app.post('/revalidate', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/aeroVE5/revalidate', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

app.post('/fare_rules', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/aeroVE5/fare_rules', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

app.post('/booking', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/aeroVE5/booking', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

app.post('/destinations', (req, res) => {
  let data = req.body;
  let credentials = {
    "user_id": "TrawexAPI2023",
    "user_password": "TrawexAPI2023PWD",
    "access": "Test",
    "ip_address": "49.37.72.187",
  };
  let json = Object.assign(credentials, data);
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/carsv3-test/destinations', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});


app.post('/car-search-api', (req, res) => {
  let data = req.body;
  let credentials = {
    "user_id": "TrawexAPI2023",
    "user_password": "TrawexAPI2023PWD",
    "ip_address": "103.53.112.179",
    "access": "Test"
  };
  let json = Object.assign(credentials, data);
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/carsv3-test/search', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});


app.post('/car-rental-details-api', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://travelnext.works/api/carsv3-test/rental_condition_details', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});

app.post('/car-confirm-booking-api', (req, res) => {
  let json = req.body;
  // Make a POST API call using axios
  axios.post('https://groupy.live/reactApp/cars/car_booking', json)
    .then(response => {
      // Handle the API response data
      res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle API errors
      res.status(500).json({ message: 'API call failed', error: error.message });
    });
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
  