// utils/stringUtils.ts
export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
}
