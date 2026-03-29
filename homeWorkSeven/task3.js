
function divide (numerator, denominator) {
    
    if(typeof numerator !== 'number' || typeof denominator !== 'number') {
        console.log('Обидва аргументи повинні бути числами');
    }

    if (denominator === 0) {
        console.log('Ділення на нуль неможливе');
    }

    return numerator / denominator;
} 


try {
    console.log(divide(6,2));
} catch(error) {

    console.log(error.message);

} finally {
    console.log('Робота завершена');

}

try {
    console.log(divide(6,0));
} catch(error) {

    console.log(error.message);

} finally {
    console.log('Робота завершена');

}

try {
    console.log(divide(6,'r'));
} catch(error) {
    console.log(error.message);

} finally {
    console.log('Робота завершена');
}