export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US");
}

export function routify(str: string) {
  return str.replaceAll(" ", "-").toLowerCase();
}
