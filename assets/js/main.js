
let outputVorne = document.getElementById("outputVorne")
let outputHinten = document.getElementById("outputHinten")


const trenneAlles = (event) => {
    event.preventDefault()
    let txtInput = document.forms[0].txtInput.value
    let signInput = document.forms[0].signInput.value
    let index = txtInput.search(signInput);
    let trennen = document.forms[0].trennen.value


    //if (pTag) { resultBox.removeChild(pTag) }


    /*    if (index !== -1) {
           outputVorne.innerHTML = "Dieses Wort ist nicht auffindbar Babe"
       } else; */

    const vorTrennen = () => {
        let textdavor1 = txtInput.slice(0, index)
        outputVorne.innerHTML = textdavor1
        let textdanach1 = txtInput.slice(index + signInput.length)
        outputHinten.innerHTML = textdanach1


    }
    const danachTrennen = () => {
        let textdanach2 = txtInput.slice(index + signInput.length)
        outputHinten.innerHTML = textdanach2
        let textdavor2 = txtInput.slice(0, index)
        outputVorne.innerHTML = textdavor2


    }
    if (trennen === "davor") {
        vorTrennen()

    }
    else {
        danachTrennen()
    }
}


//ich raff das nicht : ---->

/* senBefore = sentence.slice(0, searchResult + seperator.length)
document.getElementById('textBefore').innerHTML = senBefore */