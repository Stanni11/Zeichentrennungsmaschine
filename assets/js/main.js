
let outputVorne = document.getElementById("outputVorne")
let outputHinten = document.getElementById("outputHinten")


const trenneAlles = (event) => {
    event.preventDefault()
    let txtInput = document.forms[0].txtInput.value
    let signInput = document.forms[0].signInput.value
    let index = txtInput.search(signInput);
    let trennen = document.forms[0].trennen.value


    const vorTrennen = () => {
        let textdavor1 = txtInput.slice(0, index)
        outputVorne.innerHTML = textdavor1
        let textdanach1 = txtInput.slice(index)
        outputHinten.innerHTML = textdanach1


    }
    const danachTrennen = () => {
        let textdavor2 = txtInput.slice(0, index + signInput.length)
        outputVorne.innerHTML = textdavor2
        let textdanach2 = txtInput.slice(index + signInput.length)
        outputHinten.innerHTML = textdanach2


    }
    if (index === -1) {
        outputVorne.innerHTML = "Dieses Wort ist nicht auffindbar Babe"

    } else if (trennen === "davor") {
        vorTrennen()

    }
    else {
        danachTrennen()
    }
}


