let countDown = new Date('Dec 31, 2023 23:59:59').getTime()

const sec = 1000
const min = sec * 60
const hour = min * 60
const day = hour * 24

let counter = setInterval(() => {
    let DataNow = new Date().getTime()
    let dataDiff = countDown - DataNow;
    let days = Math.floor(dataDiff / day)
    let hours = Math.floor((dataDiff % day) / hour)
    let minutes = Math.floor((dataDiff % hour) / min)
    let seconds = Math.floor((dataDiff % min) / sec)
    // console.log(days, hours, minutes,seconds)
    document.querySelector(".days").innerHTML = days < 10 ? "0" + days : days
    document.querySelector(".hours").innerHTML = hours < 10 ? "0" + hours : hours
    document.querySelector(".minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes
    document.querySelector(".seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds

    if (dataDiff <= 0) {
        clearInterval(counter);
        document.querySelector(".days").innerHTML = "00"
        document.querySelector(".hours").innerHTML = "00"
        document.querySelector(".minutes").innerHTML = "00"
        document.querySelector(".seconds").innerHTML = "00"
    }

}, 1000)

    // document.querySelector(".days").innerHTML = "00"
    // document.querySelector(".hours").innerHTML = "00"
    // document.querySelector(".minutes").innerHTML = "00"
    // document.querySelector(".seconds").innerHTML = "00"

