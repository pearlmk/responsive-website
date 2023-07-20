const menuBtn = document.getElementById("menuber-btn")
const  headerItem = document.querySelector(".header--item")

menuBtn.addEventListener("click", () => {
  headerItem.classList.toggle('menuBtnShow')
})
