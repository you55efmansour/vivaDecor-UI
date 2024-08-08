// counter 
let four = document.getElementById("400");
let six = document.getElementById("600");
let one = document.getElementById("100");
let element = [one, four, six];

function counter(element) {
  element.forEach((e) => {
    let num = +e.id;
    let count = setInterval(() => {
      e.textContent++;
      if (e.textContent == num) {
        clearInterval(count);
        e.textContent = `${e.textContent}+`;
      }
    }, 2000 / num);
  });
}

counter(element);


// add btn 
section = document.querySelector("#services")
scrollBtn = document.querySelector(".scroll")
window.onscroll= ()=>{
  if (window.scrollY + window.innerHeight >= section.offsetTop) {
    scrollBtn.classList.remove("d-none")
  }else {
    scrollBtn.classList.add("d-none");
  }
}