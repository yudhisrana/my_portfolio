import { TechStack } from "@/data";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const SliderSection = () => {
  return (
    <section className="relative bg-[#1f1f1f] py-6">
      <div className="mx-auto max-w-6xl px-4">
        <InfiniteSlider gap={32} speed={50}>
          {TechStack.map((item, index) => (
            <span key={index} className="text-2xl font-bold text-neutral-600">
              {item.name}
            </span>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default SliderSection;
