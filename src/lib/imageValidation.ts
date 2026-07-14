export const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/webp"] as const;
export const ACCEPTED_EXT = "PNG • JPG • JPEG • WEBP";
export const MAX_SIZE_BYTES = 20 * 1024 * 1024; // 20 MB

export type ValidationError =
  | { kind: "type"; message: string }
  | { kind: "size"; message: string }
  | { kind: "load"; message: string };

export function validateFile(file: File): ValidationError | null {
  if (!ACCEPTED_TYPES.includes(file.type as (typeof ACCEPTED_TYPES)[number])) {
    return {
      kind: "type",
      message: "Oops. That's not an image we can work with. Try PNG, JPG or WebP.",
    };
  }
  if (file.size > MAX_SIZE_BYTES) {
    return {
      kind: "size",
      message: "Whoa, that's a big one. Try something under 20 MB.",
    };
  }
  return null;
}

export function loadImageDimensions(url: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => reject(new Error("Could not read that image."));
    img.src = url;
  });
}
