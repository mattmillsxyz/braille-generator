declare module "braille" {
  export function toBraille(text: string): string;
  export function toText(braille: string): string;
}
