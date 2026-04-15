function showTextWithDelay (text, delay) {
    setTimeout(() => {
        console.log(text)
    }, delay)

}

showTextWithDelay('hello', 2000);