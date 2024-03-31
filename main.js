const cardTitle = document.querySelector("#card-title")
const cardWrapper = document.querySelector(".card-wrapper")

cardTitle.addEventListener("mouseover", () => {
  cardWrapper.style.boxShadow = "14px 14px 0px var(--clr-black)"
})

cardTitle.addEventListener("mouseout", () => {
  cardWrapper.style.boxShadow = "8px 8px 0px var(--clr-black)"
})