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
    case "btns-dot":
    case "btns-0":
    case "btns-divide":
    case "btns-multiply":
    case "btns-reset":
    case "btns-equal":
    case "btns-del":
      let element = document.querySelector(`#${e.target.id}`);
      console.log(`Calculator Btns Clicked ${element.textContent}`);

    default:
      break;
  }
});
