import { removeBackground as imglyRemoveBackground, Config } from "@imgly/background-removal";

export interface RemoveBackgroundOptions {
  onProgress?: (fraction: number, message: string) => void;
  signal?: AbortSignal;
}

export async function removeBackground(
  file: File,
  opts: RemoveBackgroundOptions = {},
): Promise<Blob> {
  const config: Config = {
    progress: (status: string, current: number, total: number) => {
      let message = "Processing...";
      let fraction = 0;
      if (total && total > 0) {
        fraction = current / total;
      } else {
        fraction = 0;
      }

      if (status.startsWith("fetch")) {
        const pct = total ? ` (${Math.round(fraction * 100)}%)` : "";
        message = `Downloading AI model${pct}...`;
      } else if (status.startsWith("onnx") || status.includes("init")) {
        message = "Initializing AI engine...";
      } else if (status.startsWith("processing") || status.includes("compute")) {
        message = "Analyzing and removing background...";
      } else {
        // Fallback or generic status mapping
        message = status.charAt(0).toUpperCase() + status.slice(1).replace(/[:_]/g, " ");
      }

      if (opts.onProgress) {
        opts.onProgress(fraction, message);
      }
    },
  };

  return await imglyRemoveBackground(file, config);
}
