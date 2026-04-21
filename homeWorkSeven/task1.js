function handleNum (num, evenCallback, oddCallback) {
    return num % 2 === 0 ? evenCallback() : oddCallback();
}

function handleEven () {
    console.log('number is even');

}

function handleOdd () {
    console.log('number is odd');

}

handleNum(4, handleEven, handleOdd);