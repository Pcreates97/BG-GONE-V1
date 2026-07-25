import { motion } from "motion/react";
import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "DROP IT",
    desc: "Choose your image or drag it straight into the tool.",
    icon: Upload,
    color: "bg-secondary",
  },
  {
    n: "02",
    title: "ZAP THE BACKGROUND",
    desc: "Let the background removal engine separate your subject.",
    icon: Wand2,
    color: "bg-primary text-primary-foreground",
  },
  {
    n: "03",
    title: "GRAB YOUR PNG",
    desc: "Download your transparent image and go make something cool.",
    icon: Download,
    color: "bg-accent",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
      >
        Seriously. It's{" "}
        <span className="underline decoration-primary decoration-[6px] underline-offset-4">
          this
        </span>{" "}
        easy.
      </motion.h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
              className="relative rounded-3xl border-2 border-foreground bg-background p-8 shadow-toy"
            >
              <div
                className={`absolute -top-6 -left-4 grid h-16 w-16 -rotate-6 place-items-center rounded-2xl border-2 border-foreground font-display text-2xl font-bold shadow-toy-sm ${s.color}`}
              >
                {s.n}
              </div>
              <div className="mt-6 grid h-14 w-14 place-items-center rounded-xl border-2 border-foreground bg-muted">
                <Icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
