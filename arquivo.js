const convertButton = document.querySelector(".button-convert")


function convertValues(){

    const inputMoedaValue = document.querySelector(".input-moeda").value
    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvert = document.querySelector(".currency-value")


    const dolarToday = 5.2
    const convertedValue = inputMoedaValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValue)
    currencyValueConvert.innerHTML = convertedValue

    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

    console.log(convertedValue)


}

convertButton.addEventListener("click", convertValues)


