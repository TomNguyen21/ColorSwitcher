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

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn2 = document.getElementById("btn2");

const getRandomNum2 = () => {
  return Math.floor(Math.random() * hex.length);
}

btn2.addEventListener('click', () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let random = getRandomNum2();
    hexColor += hex[random];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})