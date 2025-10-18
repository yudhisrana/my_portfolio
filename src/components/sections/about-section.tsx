import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { CardAbout } from "@/data";

const AboutSection = () => {
  return (
    <section id="Tentang-Saya" className="relative scroll-mt-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 lg:flex-row">
        {/* title */}
        <h2 className="text-secondary text-4xl font-bold lg:hidden">
          Tentang <span className="text-primary">Saya</span>
        </h2>

        {/* Terminal */}
        <Terminal className="w-full max-w-sm bg-transparent">
          <TypingAnimation>&gt; npx create-profile@latest dyr</TypingAnimation>
          <AnimatedSpan className="text-green-500">
            ✔ Preflight checks.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Verifying checks.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Validating checks.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Installing dependencies.
          </AnimatedSpan>
          <AnimatedSpan className="text-primary">
            ℹ Generating profile data...
          </AnimatedSpan>
          <AnimatedSpan className="text-white">
            👤 Name: Dipo Yudhis Rana
          </AnimatedSpan>
          <AnimatedSpan className="text-white">🎂 Age: 34 Tahun</AnimatedSpan>
          <AnimatedSpan className="text-white">
            💻 Role: Web Developer
          </AnimatedSpan>
          <AnimatedSpan className="text-white">
            ⚙️ Stack: ReactJs, Go, MySQL, TailwindCss
          </AnimatedSpan>
          <AnimatedSpan className="text-white">
            🌍 Location: Depok, Indonesia
          </AnimatedSpan>
          <AnimatedSpan className="text-white">
            🟢 Status: Available for Projects
          </AnimatedSpan>
          <AnimatedSpan className="text-white">
            🚀 Currently: Building something cool...
          </AnimatedSpan>
          <TypingAnimation className="text-green-400">
            Success! Profile initialized.
          </TypingAnimation>
        </Terminal>

        {/* Content */}
        <div className="relative flex-1 space-y-8 text-center lg:text-left">
          {/* Title */}
          <h2 className="text-secondary hidden text-4xl font-bold lg:block">
            Tentang <span className="text-primary">Saya</span>
          </h2>

          {/* Description */}
          <p className="text-secondary leading-relaxed">
            Saya adalah pribadi yang antusias, mudah beradaptasi dan mempunyai
            pengalaman dalam bidang pengembangan website. Memiliki ketertarikan
            yang kuat pada bidang teknologi dan senang mempelajari hal-hal baru,
            mendorong saya untuk terus belajar, beradaptasi, dan berkembang di
            dunia teknologi yang terus berubah secara dinamis.
          </p>

          {/* Cards */}
          <div className="mx-auto grid gap-4 sm:grid-cols-3 md:mx-0">
            {CardAbout.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-3 text-center transition-all hover:bg-neutral-800"
              >
                <item.icon className="text-primary mx-auto mb-1" size={22} />
                <h3 className="text-secondary text-base font-semibold">
                  {item.title}
                </h3>
                <p className="text-secondary mt-1 text-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
