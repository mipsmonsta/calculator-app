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


