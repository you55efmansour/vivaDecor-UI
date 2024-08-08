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
