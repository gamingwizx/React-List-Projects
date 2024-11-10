function test(fn, time) {
    let timeout = null
    return function() {
        if (timeout) return
        const later = () => {
            fn()
            timeout = null
        }
        timeout = setTimeout(later, time)
    }
}
while (true) {
    let a = test(testCall, 3000)
    
    setTimeout(() => {
        console.log("Hello11")
    }, 1000)
    a()
}
function testCall() {
    console.log("Hello")
}
