const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")
const currencySelectOne = document.querySelector(".currency-select-one")


function convertValues() {

    const inputMoedaValue = document.querySelector(".input-moeda").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 4.98
    const euroToday = 5.45
    const libraToday = 6.4
    const bitcoinToday = 331


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValue / dolarToday)

    }


    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputMoedaValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValue) 
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImag = document.querySelector (".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano" 
        currencyImag.src = "./assets/dolar2.png"
     }

        if (currencySelect.value == "euro")  {
            currencyName.innerHTML = "Euro"
            currencyImag.src = "./assets/euro2.png"
         }

         if (currencySelect.value == "libra")  {
            currencyName.innerHTML = "Libra"
            currencyImag.src = "./assets/libra2.png"
         }


         if (currencySelect.value == "bitcoin")  {
            currencyName.innerHTML = "Bitcoin"
            currencyImag.src = "./assets/bitcoin2.png"
         }


         convertValues()

}














currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


