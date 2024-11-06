export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function routify(str: string) {
  return str.replaceAll(" ", "-").toLowerCase();
}

export function toCelsius(f: number) {
  return Math.floor((f - 32) / 1.8);
}
