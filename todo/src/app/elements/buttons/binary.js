import { iconButton } from "./icon";

/**
 * @param {(state:Boolean) => any} stateChangeEvent
 */

export function binaryButton(
  stateChangeEvent,
  state = false,
  trueState = { title: "", faIconHTML: "", className: "" },
  falseState = { title: "", faIconHTML: "" }
) {
  const button = iconButton("", "");

  Object.assign(
    button,
    biState(
      state,
      showState.bind(button, trueState, falseState),
      stateChangeEvent ? stateChangeEvent.bind(button) : null
    )
  );

  button.className = "common-btn binary-btn";
  button.addEventListener("click", button.toggleState);

  return button;
}

function biState(state = false, showState, stateChangeEvent) {
  if (showState) showState(state);

  function _setState(value) {
    state = Boolean(value);
    if (showState) showState(state);
    if (stateChangeEvent) stateChangeEvent(state);
  }

  return {
    getState() {
      return state;
    },
    setState(value) {
      _setState(value);
    },
    toggleState() {
      _setState(!state);
    },
  };
}

function showState(trueState, falseState, state) {
  if (state) {
    this.title = trueState.title || "click to uncheck";
    this.innerHTML =
      trueState.faIconHTML || '<i class="fa-solid fa-square-check"></i>';
    if (trueState.className) {
      this.classList.add(trueState.className);
    } else {
      this.classList.add("binary-checked");
    }
  } else {
    this.title = falseState.title || "click to check";
    this.innerHTML =
      falseState.faIconHTML || '<i class="fa-regular fa-square"></i>';
    if (trueState.className) {
      this.classList.remove(trueState.className);
    } else {
      this.classList.remove("binary-checked");
    }
  }
}
