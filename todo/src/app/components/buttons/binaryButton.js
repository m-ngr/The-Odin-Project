export function binaryButton(
  state = false,
  trueParameter = { title: "", faIconHTML: "" },
  falseParameter = { title: "", faIconHTML: "" },
  clickEvent
) {
  const element = document.createElement("button");
  element.state = state;
  element.addEventListener(
    "click",
    toggleState.bind(null, element, trueParameter, falseParameter)
  );

  if (clickEvent) {
    element.addEventListener("click", clickEvent.bind(element));
  }

  showState(element, trueParameter, falseParameter);

  return element;
}

function toggleState(element, trueParameter, falseParameter) {
  element.state = !element.state;
  showState(element, trueParameter, falseParameter);
}

function showState(element, trueParameter, falseParameter) {
  if (element.state === true) {
    element.title = trueParameter.title;
    element.innerHTML =
      trueParameter.faIconHTML || '<i class="fa-solid fa-square-check"></i>';
  } else {
    element.title = falseParameter.title;
    element.innerHTML =
      falseParameter.faIconHTML || '<i class="fa-regular fa-square"></i>';
  }
}
