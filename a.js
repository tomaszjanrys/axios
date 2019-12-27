const axios = require('axios')
axios.get('http://google.pl')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(response) {
        console.log(error);
    })