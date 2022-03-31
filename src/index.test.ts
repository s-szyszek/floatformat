import { floatformat } from "./index";

it("positive digit", () => {
  expect(floatformat(5.556, 2)).toBe("5,57");
  expect(floatformat("5.0", 2)).toBe("5,00");
});

it("negative digit", () => {
  expect(floatformat(5.556, -2)).toBe("5,57");
  expect(floatformat("5.0", -2)).toBe("5");
});
