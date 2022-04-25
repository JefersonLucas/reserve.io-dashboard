export function minDate(dayMin: number = 1) {
  return `${new Date().getFullYear()}-${String(
    new Date().getMonth() + 1,
  ).padStart(2, "0")}-${String(new Date().getDate() - dayMin).padStart(
    2,
    "0",
  )}`;
}