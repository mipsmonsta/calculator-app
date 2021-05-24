let buffer = ["0"];

document.body.addEventListener("change", function (e) {
  let target = e.target;

  switch (target.id) {
    case "first_toggle":
      console.log("first");
      break;
    case "second_toggle":
      console.log("second");
      break;
    case "third_toggle":
      console.log("third");
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
      }
      buffer.push(key);
      break;
    case "btns-dot":
      if (
        last === "." ||
        last === "*" ||
        last === "/" ||
        last === "+" ||
        last === "-"
      ) {
        buffer.pop();
      }

      // if (!buffer.some((element) => element === ".")) {
      //   buffer.push(".");
      // }
      buffer.push(".");

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
      } catch (err) {
        buffer = ["0"];
      } finally {
      }
      break;
    default:
      break;
  }

  replaceMultiplyString = buffer.join("").replace(/\*/g, "x");
  displayElement.textContent = replaceMultiplyString;
});
