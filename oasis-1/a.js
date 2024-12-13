const test = () => {
    return new Promise((resolve, reject) => {
        const a = 2
        if (a == 1) {
            reject("A is 1")
        }
        resolve("A is not 1")
    })
}

const callAwaitFunction = async() => {
    await test().then((data) => {
        console.log(data)
    }).catch((error) => {
        console.error(error)
    })

}

callAwaitFunction()
