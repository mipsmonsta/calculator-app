let buffer = ["0"];

document.body.addEventListener("change", function (e) {
  let target = e.target;
  wrapperElement = document.body.querySelector(".container");

  switch (target.id) {
    case "first_toggle":
      console.log("first");
      wrapperElement.setAttribute("data-theme", "one");

      break;
    case "second_toggle":
      console.log("second");
      wrapperElement.setAttribute("data-theme", "two");
      break;
    case "third_toggle":
      console.log("third");
      wrapperElement.setAttribute("data-theme", "three");
      break;
  }
});

document.body.addEventListener("click", (e) => {
  let target = e.target;
  if (e.target.id) {
    key = document.querySelector(`#${e.target.id}`).textContent;
  }
  let last = buffer[buffer.length - 1];
  let displayElement = document.querySelector(".display");

  switch (target.id) {
    case "btns-9":
    case "btns-8":
    case "btns-7":
    case "btns-6":
    case "btns-5":
    case "btns-4":
    case "btns-3":
    case "btns-2":
    case "btns-1":
    case "btns-0":
      if (buffer[0] == "0" && buffer.length == 1) {
        buffer.pop();
        buffer.push(key);
      } else if (isNaN(last) == false) {
        /*last is a num, so merge with new num*/
        num = buffer.pop();
        if (num === "0") {
          buffer.push(key); //prevent the case of ... 04
        } else {
          buffer.push(num + key);
        }
      } else {
        /*here, last are operators*/
        buffer.push(key);
      }
      break;
    case "btns-dot":
      if (last === "*" || last === "/" || last === "+" || last === "-") {
        buffer.pop();
      }

      //handling if last is number and already with period
      //re-establish last so that we prevent case of add . if preceding is "2.1+"
      last = buffer[buffer.length - 1]
      if (last && last.indexOf(".") !== -1) {
        //console.log("Already dot");
        break;
      }

      // if (!buffer.some((element) => element === ".")) {
      //   buffer.push(".");
      // }
      num = buffer.pop();
      buffer.push(num + "."); /*merge num and dot*/

      break;

    case "btns-divide":
      if (last === "*" || last === "/" || last === "+" || last === "-") {
        buffer.pop();
      }

      buffer.push("/");

      break;

    case "btns-plus":
      if (last === "*" || last === "/" || last === "+" || last === "-") {
        buffer.pop();
      }

      buffer.push("+");
      break;

    case "btns-minus":
      if (last === "*" || last === "/" || last === "+" || last === "-") {
        buffer.pop();
      }

      buffer.push("-");

      break;
    case "btns-multiply":
      if (last === "*" || last === "/" || last === "+" || last === "-") {
        buffer.pop();
      }

      buffer.push("*");

      break;

    case "btns-del":
      if (buffer.length > 1) {
        buffer.pop();
      } else {
        buffer = ["0"];
      }
      break;
    case "btns-reset":
      buffer = ["0"];
      break;

    case "btns-equal":
      let combine = buffer.join("");

      try {
        result = eval(combine).toString();
        buffer = [result];
        displayResult = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        displayElement.textContent = displayResult;
        return; /*special handling to display commas for computed number result*/
      } catch (err) {
        buffer = ["0"];
      } finally {
      }
      break;
    default:
      break;
  }

  replaceMultiplyString = buffer.join("").replace(/\*/g, "x");
  console.log(buffer);
  displayElement.textContent = replaceMultiplyString;
});
