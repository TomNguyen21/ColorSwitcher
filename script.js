const colors = ["green", "blue", "red", "yellow", "orange", "purple", "indigo", "brown", "grey", "white", "black"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
  let randomNum = getRandomNum()

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
})

const getRandomNum = () => {
  return Math.floor(Math.random() * colors.length);
}