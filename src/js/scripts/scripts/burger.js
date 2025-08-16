import { Burger } from "../../modules/burger.js";

const burger = new Burger({
  breakpoint: 1024,
  a11y: {
    moveMenu: true,
    inertElementsSelectors: "[data-wrapper] > *:not([data-burger=\"menu\"])",
  },
});
