function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            return response.json();
        });
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            return response.json();
        });
}

const allPromise = Promise.all([getTodo(), getUser()]);

allPromise
    .then(([todo, user]) => {
        console.log('Promise.all result:');
        console.log(todo);
        console.log(user);
    })
    .catch(error => {
        console.error('Promise.all error:', error);
    });

    const racePromise = Promise.race([getTodo(), getUser()]);

racePromise
    .then(result => {
        console.log('Promise.race result:');
        console.log(result);
    })
    .catch(error => {
        console.error('Promise.race error:', error);
    });