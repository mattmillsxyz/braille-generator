export const sanitizeFileName = (text: string): string => {
  return text
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};
