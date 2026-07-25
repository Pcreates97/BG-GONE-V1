import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Star, c as Scissors, d as ImagePlus, f as Github, g as Bug, h as CodeXml, i as TriangleAlert, l as RotateCcw, m as Download, n as UserX, o as Sparkles, p as GitCompare, r as Upload, s as ShieldCheck, t as WandSparkles, u as Image$1 } from "../_libs/lucide-react.mjs";
import { t as removeBackground } from "../_libs/imgly__background-removal.mjs";
import { t as confetti_module_default } from "../_libs/canvas-confetti.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-boL8wNkk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var site = {
	name: "Poof",
	tagline: "Drop it. Remove it. Done.",
	description: "Drop an image, remove the background, and download a transparent PNG. Free, open source, no sign-up.",
	github: {
		repo: "https://github.com/Pcreates97/BG-GONE-V1",
		issues: "https://github.com/Pcreates97/BG-GONE-V1/issues"
	},
	license: "MIT"
};
var _jsxFileName$15 = "/app/applet/src/components/Header.tsx";
function Header() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-3 z-40 mx-3 sm:mx-auto flex max-w-6xl items-center justify-between rounded-2xl border-2 border-foreground bg-background/90 px-3 py-2.5 sm:px-4 sm:py-3 shadow-toy-sm backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: "#top",
				className: "flex items-center gap-2 group",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.span, {
						whileHover: {
							rotate: -12,
							scale: 1.05
						},
						className: "grid h-9 w-9 place-items-center rounded-xl border-2 border-foreground bg-primary text-primary-foreground shadow-toy-sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scissors, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						}, void 0, false, {
							fileName: _jsxFileName$15,
							lineNumber: 13,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$15,
						lineNumber: 9,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-xl font-bold",
						children: site.name
					}, void 0, false, {
						fileName: _jsxFileName$15,
						lineNumber: 15,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "ml-1 hidden rounded-full border border-foreground bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground sm:inline",
						children: "open src"
					}, void 0, false, {
						fileName: _jsxFileName$15,
						lineNumber: 16,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$15,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "hidden items-center gap-6 text-sm font-semibold md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: "#how",
					className: "hover:text-primary transition-colors",
					children: "How it works"
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 22,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: "#open",
					className: "hover:text-primary transition-colors",
					children: "Open Source"
				}, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 25,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$15,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.a, {
				whileHover: {
					y: -2,
					rotate: -1
				},
				whileTap: { y: 0 },
				href: site.github.repo,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex items-center gap-2 rounded-xl border-2 border-foreground bg-foreground px-4 py-2 text-sm font-bold text-background shadow-toy-sm transition-shadow hover:shadow-toy",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Github, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName$15,
					lineNumber: 38,
					columnNumber: 9
				}, this), "GitHub"]
			}, void 0, true, {
				fileName: _jsxFileName$15,
				lineNumber: 30,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$15,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var _jsxFileName$14 = "/app/applet/src/components/HeroDecorations.tsx";
function HeroDecorations() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 -z-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				className: "absolute left-[2%] top-[10%] hidden sm:block sm:left-[6%] sm:top-[18%] rounded-2xl border-2 border-foreground bg-secondary p-3 shadow-toy-sm",
				style: { "--r": "-8deg" },
				animate: {
					y: [
						0,
						-12,
						0
					],
					rotate: [
						-8,
						-4,
						-8
					]
				},
				transition: {
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-5 w-5" }, void 0, false, {
					fileName: _jsxFileName$14,
					lineNumber: 15,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 9,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				className: "absolute right-[2%] top-[12%] hidden sm:block sm:right-[8%] sm:top-[22%] rounded-full border-2 border-foreground bg-accent p-3 shadow-toy-sm",
				animate: {
					y: [
						0,
						10,
						0
					],
					rotate: [
						10,
						4,
						10
					]
				},
				transition: {
					duration: 7,
					repeat: Infinity,
					ease: "easeInOut"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scissors, { className: "h-5 w-5" }, void 0, false, {
					fileName: _jsxFileName$14,
					lineNumber: 23,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				className: "absolute left-[12%] bottom-[24%] hidden rounded-xl border-2 border-foreground bg-background p-2 shadow-toy-sm md:block",
				animate: {
					y: [
						0,
						-8,
						0
					],
					rotate: [
						-4,
						2,
						-4
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image$1, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName$14,
					lineNumber: 31,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				className: "absolute right-[14%] bottom-[28%] hidden text-primary md:block",
				animate: { rotate: [0, 360] },
				transition: {
					duration: 24,
					repeat: Infinity,
					ease: "linear"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-6 w-6 fill-current" }, void 0, false, {
					fileName: _jsxFileName$14,
					lineNumber: 39,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				className: "absolute -left-24 top-40 h-72 w-72 opacity-40",
				viewBox: "0 0 200 200",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#C6F24E",
					d: "M46.5,-59.3C58.9,-49.7,66.6,-33.4,68.8,-17.1C71,-0.8,67.7,15.5,59.6,29.2C51.5,42.9,38.6,54,23.6,60.6C8.7,67.2,-8.3,69.3,-23.9,64.4C-39.4,59.5,-53.6,47.5,-62.1,32.2C-70.6,16.9,-73.6,-1.7,-68.4,-17.4C-63.2,-33.1,-49.9,-45.9,-35.2,-55C-20.5,-64.1,-4.4,-69.4,10.6,-67.2C25.6,-65,34.1,-68.9,46.5,-59.3Z",
					transform: "translate(100 100)"
				}, void 0, false, {
					fileName: _jsxFileName$14,
					lineNumber: 44,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				className: "absolute -right-20 bottom-10 h-64 w-64 opacity-30",
				viewBox: "0 0 200 200",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#7C3AED",
					d: "M38.6,-52.8C51.4,-43.9,64.3,-34.6,68.1,-22.1C71.9,-9.5,66.6,6.4,58.2,19.6C49.8,32.8,38.3,43.3,25.1,50.9C11.9,58.5,-3,63.3,-17.4,60.7C-31.8,58.1,-45.6,48.1,-54.4,35C-63.2,21.9,-66.9,5.7,-63.7,-8.6C-60.4,-22.9,-50.1,-35.4,-38,-45.1C-25.9,-54.8,-12.9,-61.8,-0.4,-61.3C12.2,-60.8,25.8,-61.7,38.6,-52.8Z",
					transform: "translate(100 100)"
				}, void 0, false, {
					fileName: _jsxFileName$14,
					lineNumber: 51,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$14,
				lineNumber: 50,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$14,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var ACCEPTED_TYPES = [
	"image/png",
	"image/jpeg",
	"image/webp"
];
var ACCEPTED_EXT = "PNG • JPG • JPEG • WEBP";
function validateFile(file) {
	if (!ACCEPTED_TYPES.includes(file.type)) return {
		kind: "type",
		message: "Oops. That's not an image we can work with. Try PNG, JPG or WebP."
	};
	if (file.size > 20971520) return {
		kind: "size",
		message: "Whoa, that's a big one. Try something under 20 MB."
	};
	return null;
}
function loadImageDimensions(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve({
			width: img.naturalWidth,
			height: img.naturalHeight
		});
		img.onerror = () => reject(/* @__PURE__ */ new Error("Could not read that image."));
		img.src = url;
	});
}
async function removeBackground$1(file, opts = {}) {
	return await removeBackground(file, { progress: (status, current, total) => {
		let message = "Processing...";
		let fraction = 0;
		if (total && total > 0) fraction = current / total;
		else fraction = 0;
		if (status.startsWith("fetch")) message = `Downloading AI model${total ? ` (${Math.round(fraction * 100)}%)` : ""}...`;
		else if (status.startsWith("onnx") || status.includes("init")) message = "Initializing AI engine...";
		else if (status.startsWith("processing") || status.includes("compute")) message = "Analyzing and removing background...";
		else message = status.charAt(0).toUpperCase() + status.slice(1).replace(/[:_]/g, " ");
		if (opts.onProgress) opts.onProgress(fraction, message);
	} });
}
function useBackgroundRemoval() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [image, setImage] = (0, import_react.useState)(null);
	const [result, setResult] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [progressMessage, setProgressMessage] = (0, import_react.useState)("Preparing image...");
	const imageRef = (0, import_react.useRef)(null);
	const resultRef = (0, import_react.useRef)(null);
	imageRef.current = image;
	resultRef.current = result;
	(0, import_react.useEffect)(() => {
		return () => {
			if (imageRef.current) URL.revokeObjectURL(imageRef.current.url);
			if (resultRef.current) URL.revokeObjectURL(resultRef.current.url);
		};
	}, []);
	const reset = (0, import_react.useCallback)(() => {
		if (image) URL.revokeObjectURL(image.url);
		if (result) URL.revokeObjectURL(result.url);
		setImage(null);
		setResult(null);
		setError(null);
		setProgress(0);
		setProgressMessage("Preparing image...");
		setStatus("idle");
	}, [image, result]);
	return {
		status,
		image,
		result,
		error,
		progress,
		progressMessage,
		selectFile: (0, import_react.useCallback)(async (file) => {
			const err = validateFile(file);
			if (err) {
				setError(err.message);
				setStatus("error");
				return;
			}
			if (image) URL.revokeObjectURL(image.url);
			if (result) URL.revokeObjectURL(result.url);
			setResult(null);
			setError(null);
			setProgress(0);
			setProgressMessage("Preparing image...");
			const url = URL.createObjectURL(file);
			try {
				const dims = await loadImageDimensions(url);
				setImage({
					file,
					url,
					meta: {
						name: file.name,
						size: file.size,
						width: dims.width,
						height: dims.height,
						type: file.type
					}
				});
				setStatus("selected");
			} catch {
				URL.revokeObjectURL(url);
				setError("We couldn't read that image. Try another file.");
				setStatus("error");
			}
		}, [image, result]),
		process: (0, import_react.useCallback)(async () => {
			if (!image) return;
			setStatus("processing");
			setError(null);
			setProgress(0);
			setProgressMessage("Starting background removal...");
			try {
				const blob = await removeBackground$1(image.file, { onProgress: (fraction, msg) => {
					setProgress(fraction);
					setProgressMessage(msg);
				} });
				setResult({
					blob,
					url: URL.createObjectURL(blob)
				});
				setStatus("success");
			} catch (e) {
				setError(e instanceof Error ? e.message : "Something went sideways. Give it another go.");
				setStatus("error");
			}
		}, [image]),
		reset
	};
}
var _jsxFileName$13 = "/app/applet/src/components/ImageUploader.tsx";
function ImageUploader({ onFile }) {
	const inputRef = (0, import_react.useRef)(null);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const handleDrop = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		setDragOver(false);
		const file = e.dataTransfer.files?.[0];
		if (file) onFile(file);
	}, [onFile]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		onClick: () => inputRef.current?.click(),
		onDragOver: (e) => {
			e.preventDefault();
			setDragOver(true);
		},
		onDragLeave: () => setDragOver(false),
		onDrop: handleDrop,
		role: "button",
		tabIndex: 0,
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				inputRef.current?.click();
			}
		},
		animate: {
			scale: dragOver ? 1.02 : 1,
			backgroundColor: dragOver ? "#F0E9FF" : "rgba(240, 233, 255, 0)"
		},
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20
		},
		className: `group relative flex min-h-[320px] sm:min-h-[420px] cursor-pointer flex-col items-center justify-center rounded-2xl border-4 border-dashed p-6 sm:p-10 outline-none transition-colors ${dragOver ? "border-primary" : "border-foreground/30 hover:border-primary"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				ref: inputRef,
				type: "file",
				accept: ACCEPTED_TYPES.join(","),
				className: "hidden",
				onChange: (e) => {
					const f = e.target.files?.[0];
					if (f) onFile(f);
					e.target.value = "";
				}
			}, void 0, false, {
				fileName: _jsxFileName$13,
				lineNumber: 50,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				animate: dragOver ? {
					y: -6,
					rotate: -6
				} : { y: [
					0,
					-6,
					0
				] },
				transition: dragOver ? {
					type: "spring",
					stiffness: 300
				} : {
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "relative mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -left-4 top-2 h-24 w-24 rotate-[-10deg] rounded-xl border-2 border-foreground bg-secondary shadow-toy-sm" }, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 72,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -right-4 top-2 h-24 w-24 rotate-[10deg] rounded-xl border-2 border-foreground bg-accent shadow-toy-sm" }, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 73,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative grid h-28 w-28 place-items-center rounded-xl border-2 border-foreground bg-background shadow-toy",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImagePlus, {
							className: "h-10 w-10 text-primary",
							strokeWidth: 2.5
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 75,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 74,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$13,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-display text-3xl font-bold uppercase tracking-tight",
				children: dragOver ? "YES! DROP IT HERE!" : "Drop your image here"
			}, void 0, false, {
				fileName: _jsxFileName$13,
				lineNumber: 79,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "or give this button a little click"
			}, void 0, false, {
				fileName: _jsxFileName$13,
				lineNumber: 82,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.button, {
				type: "button",
				whileHover: { y: -2 },
				whileTap: { y: 0 },
				onClick: (e) => {
					e.stopPropagation();
					inputRef.current?.click();
				},
				className: "mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-foreground bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-toy-sm transition-shadow hover:shadow-toy",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 94,
					columnNumber: 9
				}, this), "Choose an image"]
			}, void 0, true, {
				fileName: _jsxFileName$13,
				lineNumber: 84,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-3 w-3" }, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 99,
					columnNumber: 9
				}, this), ACCEPTED_EXT]
			}, void 0, true, {
				fileName: _jsxFileName$13,
				lineNumber: 98,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$13,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
function sanitizeFilename(name) {
	return name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/-+/g, "-") || "image";
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
var _jsxFileName$12 = "/app/applet/src/components/ImagePreview.tsx";
function ImagePreview({ image, onProcess, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "flex flex-col items-center gap-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative w-full max-w-xl overflow-hidden rounded-2xl border-2 border-foreground bg-checker shadow-toy",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: image.url,
					alt: image.meta.name,
					className: "mx-auto block max-h-[380px] w-full object-contain"
				}, void 0, false, {
					fileName: _jsxFileName$12,
					lineNumber: 20,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full border border-foreground/20 bg-background px-3 py-1",
						children: image.meta.name
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 28,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full border border-foreground/20 bg-background px-3 py-1",
						children: [
							image.meta.width,
							" × ",
							image.meta.height
						]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 31,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full border border-foreground/20 bg-background px-3 py-1",
						children: formatBytes(image.meta.size)
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 34,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$12,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.button, {
					whileHover: { y: -3 },
					whileTap: { y: 0 },
					onClick: onProcess,
					className: "group inline-flex items-center gap-2 rounded-2xl border-2 border-foreground bg-primary px-7 py-4 font-display text-lg font-bold uppercase tracking-tight text-primary-foreground shadow-toy transition-shadow hover:shadow-toy-lg",
					children: ["Remove that background", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.span, {
						animate: { rotate: [
							0,
							20,
							-10,
							0
						] },
						transition: {
							duration: 2.5,
							repeat: Infinity
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 51,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 47,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 40,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: onReset,
					className: "inline-flex items-center gap-2 rounded-xl border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold shadow-toy-sm hover:bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 59,
						columnNumber: 11
					}, this), "Choose another"]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 55,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$12,
				lineNumber: 39,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$12,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
var _jsxFileName$11 = "/app/applet/src/components/ProcessingAnimation.tsx";
var messages = [
	"Finding the subject...",
	"Convincing the background to leave...",
	"Cleaning up the edges...",
	"Almost there..."
];
function ProcessingAnimation({ image, progress, progressMessage }) {
	const [idx, setIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (progressMessage) return;
		const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 1400);
		return () => clearInterval(t);
	}, [progressMessage]);
	const activeMessage = progressMessage || messages[idx];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center gap-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative w-full max-w-xl overflow-hidden rounded-2xl border-2 border-foreground bg-checker shadow-toy",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: image.url,
						alt: "",
						className: "mx-auto block max-h-[380px] w-full object-contain opacity-90"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 31,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pointer-events-none absolute inset-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-scan absolute left-0 right-0 h-1 bg-primary shadow-[0_0_20px_6px_rgba(124,58,237,0.6)]" }, void 0, false, {
							fileName: _jsxFileName$11,
							lineNumber: 38,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 37,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pointer-events-none absolute inset-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
								className: "absolute left-3 top-3 h-2 w-2 rounded-full bg-secondary",
								animate: { opacity: [
									.3,
									1,
									.3
								] },
								transition: {
									duration: 1.4,
									repeat: Infinity
								}
							}, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 42,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
								className: "absolute right-4 top-6 h-1.5 w-1.5 rounded-full bg-accent",
								animate: { opacity: [
									1,
									.3,
									1
								] },
								transition: {
									duration: 1.7,
									repeat: Infinity
								}
							}, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 47,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
								className: "absolute bottom-4 left-8 h-2 w-2 rounded-full bg-primary",
								animate: { opacity: [
									.3,
									1,
									.3
								] },
								transition: {
									duration: 2,
									repeat: Infinity
								}
							}, void 0, false, {
								fileName: _jsxFileName$11,
								lineNumber: 52,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$11,
						lineNumber: 41,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-h-[24px] font-display text-lg font-semibold text-center",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.span, {
						initial: {
							opacity: 0,
							y: 6
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -6
						},
						transition: { duration: .25 },
						children: activeMessage
					}, activeMessage, false, {
						fileName: _jsxFileName$11,
						lineNumber: 62,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 61,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative h-3 w-64 overflow-hidden rounded-full border-2 border-foreground bg-background",
				children: progress && progress > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					className: "absolute inset-y-0 left-0 bg-primary",
					style: { width: `${progress * 100}%` },
					transition: {
						type: "spring",
						stiffness: 80,
						damping: 15
					}
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 77,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					className: "absolute inset-y-0 w-1/3 rounded-full bg-primary",
					animate: { x: ["-100%", "300%"] },
					transition: {
						duration: 1.4,
						repeat: Infinity,
						ease: "easeInOut"
					}
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 83,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 75,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var _jsxFileName$10 = "/app/applet/src/components/BeforeAfterComparison.tsx";
function BeforeAfterComparison({ beforeUrl, afterUrl }) {
	const [pos, setPos] = (0, import_react.useState)(50);
	const ref = (0, import_react.useRef)(null);
	const [containerWidth, setContainerWidth] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		setContainerWidth(ref.current.clientWidth);
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) setContainerWidth(entry.contentRect.width);
		});
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);
	const move = (0, import_react.useCallback)((clientX) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		const p = (clientX - rect.left) / rect.width * 100;
		setPos(Math.max(0, Math.min(100, p)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref,
		className: "relative w-full max-w-xl select-none overflow-hidden rounded-2xl border-2 border-foreground shadow-toy",
		onMouseMove: (e) => e.buttons === 1 && move(e.clientX),
		onTouchStart: (e) => move(e.touches[0].clientX),
		onTouchMove: (e) => move(e.touches[0].clientX),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative w-full bg-checker",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: afterUrl,
					alt: "after",
					className: "block max-h-[380px] w-full object-contain"
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 42,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "absolute right-3 top-3 rounded-full border border-foreground bg-secondary px-3 py-1 text-xs font-bold uppercase",
					children: "After ✨"
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 43,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-0 overflow-hidden",
				style: { width: `${pos}%` },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: beforeUrl,
					alt: "before",
					className: "block h-full w-auto max-w-none object-contain",
					style: { width: containerWidth ? `${containerWidth}px` : "100%" }
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 49,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "absolute left-3 top-3 rounded-full border border-foreground bg-background px-3 py-1 text-xs font-bold uppercase",
					children: "Before"
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 55,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				role: "slider",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": Math.round(pos),
				tabIndex: 0,
				onKeyDown: (e) => {
					if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
					if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
				},
				onMouseDown: (e) => move(e.clientX),
				className: "absolute inset-y-0 z-10 -translate-x-1/2 cursor-ew-resize",
				style: { left: `${pos}%` },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-foreground" }, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 74,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-foreground bg-primary text-primary-foreground shadow-toy-sm",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-bold",
						children: "↔"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 76,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 75,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 60,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 33,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/ResultPreview.tsx";
function ResultPreview({ image, result, onReset }) {
	const [compare, setCompare] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		confetti_module_default({
			particleCount: 60,
			spread: 70,
			origin: { y: .6 },
			colors: [
				"#7C3AED",
				"#C6F24E",
				"#FF7A59",
				"#151515"
			]
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		initial: {
			opacity: 0,
			scale: .96
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20
		},
		className: "flex flex-col items-center gap-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-toy-sm",
				children: "Background = Gone ✨"
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 35,
				columnNumber: 7
			}, this),
			compare ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BeforeAfterComparison, {
				beforeUrl: image.url,
				afterUrl: result.url
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 40,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative w-full max-w-xl overflow-hidden rounded-2xl border-2 border-foreground bg-checker shadow-toy",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: result.url,
					alt: "Background removed",
					className: "mx-auto block max-h-[380px] w-full object-contain"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 43,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 42,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.button, {
						whileHover: { y: -3 },
						whileTap: { y: 0 },
						onClick: () => downloadBlob(result.blob, `${sanitizeFilename(image.meta.name)}-background-removed.png`),
						className: "inline-flex items-center gap-2 rounded-2xl border-2 border-foreground bg-primary px-7 py-4 font-display text-lg font-bold uppercase tracking-tight text-primary-foreground shadow-toy transition-shadow hover:shadow-toy-lg",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 60,
							columnNumber: 11
						}, this), "Download PNG"]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 52,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setCompare((c) => !c),
						className: "inline-flex items-center gap-2 rounded-xl border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold shadow-toy-sm hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GitCompare, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 68,
							columnNumber: 11
						}, this), compare ? "Hide compare" : "Compare"]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 64,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: onReset,
						className: "inline-flex items-center gap-2 rounded-xl border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold shadow-toy-sm hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 75,
							columnNumber: 11
						}, this), "Do another one"]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 71,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 51,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/ErrorState.tsx";
function ErrorState({ message, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "flex flex-col items-center gap-4 p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid h-16 w-16 place-items-center rounded-2xl border-2 border-foreground bg-accent shadow-toy-sm",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "h-7 w-7" }, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 17,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "font-display text-2xl font-bold",
				children: "Well, that didn't work."
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "max-w-md text-sm text-muted-foreground",
				children: message
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: onReset,
				className: "inline-flex items-center gap-2 rounded-xl border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold shadow-toy-sm hover:bg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 25,
					columnNumber: 9
				}, this), "Start over"]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 21,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/components/BackgroundRemover.tsx";
function BackgroundRemover() {
	const { status, image, result, error, progress, progressMessage, selectFile, process, reset } = useBackgroundRemoval();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative mx-auto w-full max-w-3xl rounded-3xl border-2 border-foreground bg-background p-2 shadow-toy-lg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "rounded-2xl bg-background",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: { duration: .2 },
					children: [
						status === "idle" && /* @__PURE__ */ (void 0)(ImageUploader, { onFile: selectFile }, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 24,
							columnNumber: 35
						}, this),
						status === "selected" && image && /* @__PURE__ */ (void 0)(ImagePreview, {
							image,
							onProcess: process,
							onReset: reset
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 26,
							columnNumber: 15
						}, this),
						status === "processing" && image && /* @__PURE__ */ (void 0)(ProcessingAnimation, {
							image,
							progress,
							progressMessage
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 29,
							columnNumber: 15
						}, this),
						status === "success" && image && result && /* @__PURE__ */ (void 0)(ResultPreview, {
							image,
							result,
							onReset: reset
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 36,
							columnNumber: 15
						}, this),
						status === "error" && /* @__PURE__ */ (void 0)(ErrorState, {
							message: error ?? "Something went wrong.",
							onReset: reset
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 39,
							columnNumber: 15
						}, this)
					]
				}, status, true, {
					fileName: _jsxFileName$7,
					lineNumber: 17,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 16,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/DotField.tsx";
function DotField({ dotRadius = 1.5, dotSpacing = 14, cursorRadius = 500, cursorForce = .1, bulgeOnly = true, bulgeStrength = 67, glowRadius = 160, sparkle = false, waveAmplitude = 0, className = "", dotColor = "#000000" }) {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationFrameId;
		let mouseX = -9999;
		let mouseY = -9999;
		const handleMouseMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			mouseX = e.clientX - rect.left;
			mouseY = e.clientY - rect.top;
		};
		const handleMouseLeave = () => {
			mouseX = -9999;
			mouseY = -9999;
		};
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleMouseLeave);
		let width = 0;
		let height = 0;
		const resize = () => {
			const rect = (canvas.parentElement || canvas).getBoundingClientRect();
			const dpr = window.devicePixelRatio || 1;
			width = rect.width;
			height = rect.height;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.scale(dpr, dpr);
		};
		const resizeObserver = new ResizeObserver(resize);
		if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
		resize();
		let time = 0;
		const render = () => {
			time += .016;
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = dotColor;
			const cols = Math.floor(width / dotSpacing) + 2;
			const rows = Math.floor(height / dotSpacing) + 2;
			const startX = (width - (cols - 1) * dotSpacing) / 2;
			const startY = (height - (rows - 1) * dotSpacing) / 2;
			for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
				const originX = startX + i * dotSpacing;
				const originY = startY + j * dotSpacing;
				let renderX = originX;
				let renderY = originY;
				let currentRadius = dotRadius;
				let alpha = .25;
				if (waveAmplitude > 0) renderY += Math.sin(time * 2 + originX * .05 + originY * .05) * waveAmplitude;
				const dx = mouseX - originX;
				const dy = mouseY - originY;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < cursorRadius) {
					const factor = 1 - dist / cursorRadius;
					const easeFactor = Math.pow(factor, 2);
					if (bulgeOnly) {
						const angle = Math.atan2(dy, dx);
						const push = easeFactor * bulgeStrength * cursorForce * 3;
						renderX -= Math.cos(angle) * push;
						renderY -= Math.sin(angle) * push;
					}
					if (glowRadius > 0 && dist < glowRadius) {
						const glowFactor = 1 - dist / glowRadius;
						currentRadius = dotRadius + glowFactor * 1.5;
						alpha = .25 + glowFactor * .55;
					}
				}
				ctx.globalAlpha = alpha;
				ctx.beginPath();
				ctx.arc(renderX, renderY, currentRadius, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			animationFrameId = requestAnimationFrame(render);
		};
		render();
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
			cancelAnimationFrame(animationFrameId);
			resizeObserver.disconnect();
		};
	}, [
		dotRadius,
		dotSpacing,
		cursorRadius,
		cursorForce,
		bulgeOnly,
		bulgeStrength,
		glowRadius,
		sparkle,
		waveAmplitude,
		dotColor
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", {
		ref: canvasRef,
		className: `pointer-events-none absolute inset-0 z-0 h-full w-full ${className}`,
		"aria-hidden": "true"
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 162,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/Hero.tsx";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "top",
		className: "relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroDecorations, {}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 10,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative mx-auto max-w-5xl px-3 sm:px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotField, {
					dotRadius: 1.5,
					dotSpacing: 14,
					cursorRadius: 500,
					cursorForce: .1,
					bulgeOnly: true,
					bulgeStrength: 67,
					glowRadius: 160,
					sparkle: false,
					waveAmplitude: 0
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "mx-auto mb-5 inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-background px-3 py-1 text-[11px] sm:px-4 sm:py-1.5 sm:text-xs font-bold uppercase tracking-widest shadow-toy-sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.span, {
						animate: { rotate: [
							0,
							20,
							-10,
							0
						] },
						transition: {
							duration: 3,
							repeat: Infinity,
							ease: "easeInOut"
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 33,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 29,
						columnNumber: 11
					}, this), "100% Free · Open Source · No sign-up"]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-4xl sm:text-7xl md:text-8xl font-bold leading-[0.95] sm:leading-[0.9] tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.span, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .05 },
						className: "block",
						children: "BYE BYE,"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 39,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.span, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .15 },
						className: "mt-2 inline-block max-w-full",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "relative inline-block -rotate-2 rounded-2xl border-2 border-foreground bg-primary px-3 py-1 text-primary-foreground shadow-toy sm:px-5",
							children: ["BACKGROUND", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
								"aria-hidden": true,
								className: "absolute -bottom-2.5 left-2 right-2 h-2.5 w-[calc(100%-1rem)] sm:-bottom-3 sm:left-4 sm:right-4 sm:h-3 sm:w-[calc(100%-2rem)]",
								viewBox: "0 0 100 10",
								preserveAspectRatio: "none",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
									d: "M2 6 Q 20 1 40 5 T 80 4 T 98 6",
									stroke: "#C6F24E",
									strokeWidth: "3",
									fill: "none",
									strokeLinecap: "round"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 61,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 55,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 53,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "." }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 70,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 47,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .3 },
					className: "mx-auto mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-muted-foreground",
					children: [
						"Drop in an image. We'll handle the awkward background situation.",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 81,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-foreground font-semibold",
							children: "No account. No nonsense. Just a clean transparent PNG."
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 82,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 74,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BackgroundRemover, {}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 88,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 87,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 12,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/HowItWorks.tsx";
var steps = [
	{
		n: "01",
		title: "DROP IT",
		desc: "Choose your image or drag it straight into the tool.",
		icon: Upload,
		color: "bg-secondary"
	},
	{
		n: "02",
		title: "ZAP THE BACKGROUND",
		desc: "Let the background removal engine separate your subject.",
		icon: WandSparkles,
		color: "bg-primary text-primary-foreground"
	},
	{
		n: "03",
		title: "GRAB YOUR PNG",
		desc: "Download your transparent image and go make something cool.",
		icon: Download,
		color: "bg-accent"
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "how",
		className: "mx-auto max-w-6xl px-4 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h2, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "text-center font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight",
			children: [
				"Seriously. It's",
				" ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "underline decoration-primary decoration-[6px] underline-offset-4",
					children: "this"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				" ",
				"easy."
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 31,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-16 grid gap-8 md:grid-cols-3",
			children: steps.map((s, i) => {
				const Icon = s.icon;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						delay: i * .12,
						type: "spring",
						stiffness: 120
					},
					className: "relative rounded-3xl border-2 border-foreground bg-background p-8 shadow-toy",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: `absolute -top-6 -left-4 grid h-16 w-16 -rotate-6 place-items-center rounded-2xl border-2 border-foreground font-display text-2xl font-bold shadow-toy-sm ${s.color}`,
							children: s.n
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 56,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 grid h-14 w-14 place-items-center rounded-xl border-2 border-foreground bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
								className: "h-6 w-6",
								strokeWidth: 2.5
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 62,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 61,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-6 font-display text-2xl font-bold",
							children: s.title
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 64,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-muted-foreground",
							children: s.desc
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 65,
							columnNumber: 15
						}, this)
					]
				}, s.n, true, {
					fileName: _jsxFileName$4,
					lineNumber: 48,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 44,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/OpenSourceSection.tsx";
var blocks = [
	{
		icon: CodeXml,
		title: "OPEN SOURCE",
		desc: "Inspect the code, improve it, break it, fix it, and make it better.",
		color: "bg-secondary"
	},
	{
		icon: ShieldCheck,
		title: "PRIVACY FOCUSED",
		desc: "Designed without unnecessary image storage or tracking.",
		color: "bg-primary text-primary-foreground"
	},
	{
		icon: UserX,
		title: "NO ACCOUNT",
		desc: "No email. No password. No 'verify your inbox.' Just use the tool.",
		color: "bg-accent"
	}
];
function OpenSourceSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "open",
		className: "mx-auto max-w-6xl px-4 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-8 md:grid-cols-2 md:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h2, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight",
				children: [
					"YOUR IMAGE.",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 36,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "inline-block -rotate-1 rounded-xl border-2 border-foreground bg-primary px-3 text-primary-foreground shadow-toy",
						children: "YOUR BUSINESS."
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 37,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 29,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-lg text-muted-foreground",
				children: "No account walls. No unnecessary hoops. Just a simple open-source tool built to do one job well."
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 41,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 28,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-14 grid gap-6 md:grid-cols-3",
			children: blocks.map((b, i) => {
				const Icon = b.icon;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					className: "rounded-3xl border-2 border-foreground bg-background p-6 shadow-toy",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: `grid h-14 w-14 place-items-center rounded-2xl border-2 border-foreground shadow-toy-sm ${b.color}`,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
								className: "h-6 w-6",
								strokeWidth: 2.5
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 62,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 59,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-5 font-display text-xl font-bold",
							children: b.title
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 64,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: b.desc
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 65,
							columnNumber: 15
						}, this)
					]
				}, b.title, true, {
					fileName: _jsxFileName$3,
					lineNumber: 51,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 47,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/GitHubCTA.tsx";
function GitHubCTA() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative mx-3 my-12 overflow-hidden rounded-3xl border-2 border-foreground bg-foreground py-12 px-4 sm:py-20 text-background shadow-toy-lg md:mx-auto md:max-w-6xl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 select-none opacity-[0.06]",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "animate-marquee font-mono text-xs leading-relaxed",
				children: Array.from({ length: 2 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: Array.from({ length: 40 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "whitespace-nowrap",
					children: [
						"{ } ".repeat(30),
						"remove(bg) → transparent.png  ",
						"</> ".repeat(20)
					]
				}, i, true, {
					fileName: _jsxFileName$2,
					lineNumber: 14,
					columnNumber: 17
				}, this)) }, k, false, {
					fileName: _jsxFileName$2,
					lineNumber: 12,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 10,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 9,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative mx-auto max-w-3xl px-3 sm:px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h2, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight",
					children: [
						"LIKE THE TOOL?",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 33,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-block -rotate-2 rounded-xl border-2 border-background bg-secondary px-3 text-secondary-foreground",
							children: "STEAL THE CODE."
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 34,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mx-auto mt-6 max-w-xl text-background/70",
					children: "Legally, of course. It's open source. Explore the source, report bugs, suggest ridiculous features, or contribute something brilliant."
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-10 flex flex-wrap items-center justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.a, {
						whileHover: {
							y: -3,
							rotate: -1
						},
						whileTap: { y: 0 },
						href: site.github.repo,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-2xl border-2 border-background bg-background px-6 py-4 font-display text-lg font-bold uppercase tracking-tight text-foreground shadow-[6px_6px_0_0_#C6F24E] transition-shadow hover:shadow-[10px_10px_0_0_#C6F24E]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Github, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 52,
							columnNumber: 13
						}, this), "View on GitHub"]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 44,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.a, {
						whileHover: {
							y: -3,
							rotate: 1
						},
						whileTap: { y: 0 },
						href: site.github.issues,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-2xl border-2 border-background bg-transparent px-6 py-4 font-display text-lg font-bold uppercase tracking-tight text-background transition-colors hover:bg-background/10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bug, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 63,
							columnNumber: 13
						}, this), "Report an issue"]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 55,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 43,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 25,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/Footer.tsx";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "mx-auto max-w-6xl px-4 pb-10 pt-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border-2 border-foreground bg-background px-4 py-4 sm:px-6 sm:py-5 shadow-toy-sm text-center sm:text-left",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-center sm:justify-start gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg border-2 border-foreground bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scissors, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 10,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 9,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-lg font-bold",
						children: site.name
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 12,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "ml-2 text-xs text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" · ",
							site.license,
							" License · The brilliant mind behind this is Piyush the Ai Developer!"
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 13,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 8,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: site.github.repo,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex items-center gap-2 text-sm font-semibold hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Github, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 24,
					columnNumber: 11
				}, this), "GitHub"]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 18,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 7,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-4 text-center text-sm text-muted-foreground",
			children: "Made for people who just wanted the background gone."
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 28,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "px-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HowItWorks, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OpenSourceSection, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GitHubCTA, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
