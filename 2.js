function ff() {
    var akcja = document.getElementById('rys');


    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
            document.getElementById('rys').innerHTML = response.data.map(function(response) {
                return (
                    '<b>' + response.id + '</b>'
                )
            });

        })

    .catch(function(error) {
        document.getElementById('rys').innerHTML = error.message;
    })

}

function tomek() {
    var akcja = document.getElementById('rys');


    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
            document.getElementById('rys').innerHTML = response.data.map(function(response) {
                return (
                    '<b>' + response.title + '</b>'
                )
            });

        })

    .catch(function(error) {
        document.getElementById('rys2').innerHTML = error.message;
    })

}

function www() {
    var akcja = document.getElementById('rys');


    axios.get('http://google.pl')
        .then(function(response) {
            document.getElementById('rys3').innerHTML = response.data.map(function(response) {
                return (
                    '<b>' + response.title + '</b>'
                )
            });

        })

    .catch(function(error) {
        document.getElementById('rys3').innerHTML = error.message;
    })

}