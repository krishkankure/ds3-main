import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import CarouselCard from "./CarouselCard";

const companyLogos = [
  "amazon.svg",
  "amex.svg",
  "atnt.svg",
  "att-icon.svg",
  "aurora.svg",
  "aws-small.svg",
  "blackrock.svg",
  "cisco.svg",
  "citi.svg",
  "deloitte.svg",
  "facebook-small.svg",
  "fedex-freight.svg",
  "fico-logo.svg",
  "google-small.svg",
  "intel.svg",
  "amazonsmall.svg",
  "aws.svg",
];

export default function Carousel() {
  // Adjust the speed to your preference
  const [speed] = useState(2);

  // Set up Embla with autoScroll plugin:
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      AutoScroll({
        playOnInit: true,
        speed,
        stopOnInteraction: false,
        stopOnFocusIn: false
      })
    ]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla slides:", emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden w-full mt-5" ref={emblaRef}>
      <div className="embla__container flex">
        {companyLogos.map((logoSrc, index) => (
          <CarouselCard key={index} src={`./companies/${logoSrc}`} />
        ))}
      </div>
    </div>
  );
}
