function formatDate(date: string): string {
  const dateFormatted = new Date(date);

  let day = String(dateFormatted.getDate() + 1);
  let month = String(dateFormatted.getMonth() + 1);
  let year = String(dateFormatted.getFullYear());

  day = day.padStart(2, "0");
  month = month.padStart(2, "0");

  return `${day}/${month}/${year}`;
}

export default formatDate;
