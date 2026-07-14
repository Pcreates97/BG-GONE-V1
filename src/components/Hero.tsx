import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { HeroDecorations } from "./HeroDecorations";
import { BackgroundRemover } from "./BackgroundRemover";

export function Hero() {
  return (
    <section id="top" className="relative pt-10 pb-24">
      <HeroDecorations />

      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-toy-sm"
        >
          <motion.span
            animate={{ rotate: [0, 20, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
          </motion.span>
          100% Free · Open Source · No sign-up
        </motion.div>

        <h1 className="font-display text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="block"
          >
            BYE BYE,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-2 inline-block"
          >
            <span className="relative inline-block -rotate-2 rounded-2xl border-2 border-foreground bg-primary px-5 py-1 text-primary-foreground shadow-toy">
              BACKGROUND
              <svg
                aria-hidden
                className="absolute -bottom-3 left-4 right-4 h-3 w-[calc(100%-2rem)]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 Q 20 1 40 5 T 80 4 T 98 6"
                  stroke="#C6F24E"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground"
        >
          Drop in an image. We'll handle the awkward background situation.
          <br />
          <span className="text-foreground font-semibold">
            No account. No nonsense. Just a clean transparent PNG.
          </span>
        </motion.p>

        <div className="mt-12">
          <BackgroundRemover />
        </div>
      </div>
    </section>
  );
}
