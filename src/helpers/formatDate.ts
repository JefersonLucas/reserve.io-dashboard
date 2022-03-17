function formatDate(
  date: string,
  options?: Intl.DateTimeFormatOptions,
): string {
  let dateFormatted = new Date(date);

  return dateFormatted.toLocaleDateString("pt-br", options);
}

export default formatDate;
