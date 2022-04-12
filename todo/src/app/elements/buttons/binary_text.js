import { partial } from "../../utils";
import { binaryButton } from "./binary";

/**
 * @param {(state:Boolean) => any} stateChangeEvent
 */
export function binaryTextButton(
  stateChangeEvent,
  state = false,
  trueState = { title: "", faIconHTML: "", className: "" },
  falseState = { title: "", faIconHTML: "" }
) {
  if (!trueState.className) trueState.className = "binary-text-checked";

  const button = binaryButton(
    partial(showState, stateChangeEvent),
    state,
    trueState,
    falseState
  );
  button.className = "common-btn binary-text-btn";

  showState.call(button, null, state);
  return button;
}

function showState(stateChangeEvent, state) {
  const titleElement = document.createElement("span");
  titleElement.innerText = this.title;
  this.append(titleElement);

  if (stateChangeEvent) stateChangeEvent.call(this, state);
}
