const convertButton = document.querySelector(".button-convert")


function convertValues(){

    const inputMoedaValue = document.querySelector(".input-moeda").value
    const dolarToday = 5.2
    const convertedValue = inputMoedaValue / dolarToday

    console.log(convertedValue)


}

convertButton.addEventListener("click", convertValues)


