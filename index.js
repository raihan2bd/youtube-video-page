const cat = document.getElementById("cat")

cat.addEventListener("click", toggleMe)

let x = false;

function toggleMe() {
  cat.classList.toggle("red")
  if(!x) {
    cat.innerHTML = "X"
    x = !x

  } else {
    cat.innerHTML= `<div></div>
    <div></div>
    <div></div>`
    x = !x
  }
  document.getElementById("m_nav").classList.toggle("db")
}