import uniqid from "uniqid";

export function card(name, image) {
  return { name, image, id: uniqid() };
}
