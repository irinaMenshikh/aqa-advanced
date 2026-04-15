async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
}

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json(); 
}

async function runAll() {
    try{
        const [todo, user] = await Promise.all([getTodo(), getUser()]);
        console.log('Promise.all result:');
        console.log(todo);
        console.log(user);
    } catch (error) {
        console.error('Promise.all error:', error);
    }
}

runAll();

async function runRace(){
    try {
        const result = await Promise.race([getTodo(), getUser()]);
        console.log('Promise.race result:');
        console.log(result);
    } catch (error) {
        console.error('Promise.race error:', error);

    }
    
}

runRace();  