const mobileRate = document.getElementById("mobile-rate") 
const desktopRate = document.getElementById("desktop-rate") 
const deskPriceRate = document.querySelector(".desk-price")
const mobPriceRate = document.querySelector(".mob-price")

const discount = document.querySelector(".discount")

// Media query changes

const mediaQueries = window.matchMedia("(min-width:548px)")

function myFunction(mediaQueries) {
    if (mediaQueries.matches) { 
        mobileRate.classList.add("hide")
        desktopRate.classList.remove("hide")
        mobPriceRate.classList.remove("price")
        deskPriceRate.classList.add("price")

        discount.textContent = "25% discount"
    } else {
        mobileRate.classList.remove("hide")
        desktopRate.classList.add("hide")
        mobPriceRate.classList.add("price")
        deskPriceRate.classList.remove("price")

        discount.textContent = "-25%"
    }
}
  
myFunction(mediaQueries) 
mediaQueries.addListener(myFunction)