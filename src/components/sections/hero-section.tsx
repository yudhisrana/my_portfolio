import { CornerRightDown, Download } from "lucide-react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { HeroImage } from "@/assets";

const HeroSection = () => {
  return (
    <section id="Beranda" className="relative pt-[125px]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-12 px-4 lg:flex-row lg:gap-0">
        {/* left content */}
        <div className="relative space-y-10">
          {/* top content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-secondary text-4xl font-bold">
              Halo<span className="text-primary">.</span>
            </h1>
            <div className="flex flex-col items-center gap-2 lg:flex-row">
              <div className="bg-primary order-2 h-0.5 w-full rounded-full lg:order-1 lg:w-24" />
              <TextEffect
                per="word"
                as="h3"
                preset="blur"
                speedReveal={0.5}
                speedSegment={0.5}
                className="text-secondary order-1 text-2xl lg:order-2"
              >
                Saya Dipo Yudhis Rana
              </TextEffect>
            </div>
            <h1 className="text-secondary text-4xl font-bold">Web Developer</h1>
          </div>
          {/* cta button */}
          <div className="flex items-center gap-4">
            <button className="bg-primary text-secondary hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-lg px-4 py-2 md:text-lg">
              <CornerRightDown size={"1rem"} />
              Proyek Saya
            </button>
            <button className="text-secondary border-primary hover:bg-primary flex items-center gap-2 rounded-lg border px-4 py-2 md:text-lg">
              <Download size={"1rem"} />
              Download CV
            </button>
          </div>
        </div>

        {/* right content */}
        <div className="relative flex max-w-xs justify-center md:max-w-lg lg:max-w-md">
          <div className="bg-primary/30 absolute bottom-0 -left-5 h-100 w-100 rounded-full blur-3xl lg:h-130 lg:w-130"></div>
          <img
            src={HeroImage}
            alt="hero image"
            className="relative z-10"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
