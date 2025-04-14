import { useContext, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import CarouselCard from "./CarouselCard";

// 1) Manually import each SVG:
import amazon from "../../Assets/Images/homepage/company logos/pngs/amazon.png";
import amazon_dark from "../../Assets/Images/homepage/company logos/pngs/amazon_darkmode.png";
import amex from "../../Assets/Images/homepage/company logos/pngs/amex.png";
import atnt from "../../Assets/Images/homepage/company logos/pngs/atnt.png";
import atnt_dark from "../../Assets/Images/homepage/company logos/pngs/atnt_darkmode.png";
import aurora from "../../Assets/Images/homepage/company logos/pngs/aurora.png";
import aurora_dark from "../../Assets/Images/homepage/company logos/pngs/aurora_darkmode.png";
import aws from "../../Assets/Images/homepage/company logos/pngs/aws.png";
import aws_dark from "../../Assets/Images/homepage/company logos/pngs/aws_darkmode.png";
import blackrock from "../../Assets/Images/homepage/company logos/pngs/blackrock.png";
import blackrock_dark from "../../Assets/Images/homepage/company logos/pngs/blackrock_darkmode.png";
import cisco from "../../Assets/Images/homepage/company logos/pngs/cisco.png";
import citi from "../../Assets/Images/homepage/company logos/pngs/citi.png";
import deloitte from "../../Assets/Images/homepage/company logos/pngs/deloitte.png";
import deloitte_dark from "../../Assets/Images/homepage/company logos/pngs/deloitte_darkmode.png";
import facebook from "../../Assets/Images/homepage/company logos/pngs/facebook.png";
import fedexFreight from "../../Assets/Images/homepage/company logos/pngs/fedex-freight.png";
import ficoLogo from "../../Assets/Images/homepage/company logos/pngs/FICO_logo.png";
import goldmanSachs from "../../Assets/Images/homepage/company logos/pngs/goldman-sachs.png";
import google from "../../Assets/Images/homepage/company logos/pngs/google.png";
import intel from "../../Assets/Images/homepage/company logos/pngs/intel.png";
import { ThemeContext } from "../../Pages/Home/ThemeContext";

export default function Carousel() {
  // Adjust the speed to your preference
  const [speed] = useState(2);
  const { isDark } = useContext(ThemeContext);
  // logos in one array with dark mode :
  const companyLogos = isDark
    ? [
        amazon_dark,
        amex,
        atnt_dark,
        aurora_dark,
        aws_dark,
        blackrock_dark,
        cisco,
        citi,
        deloitte_dark,
        facebook,
        fedexFreight,
        ficoLogo,
        goldmanSachs,
        google,
        intel
      ]
    : [
        amazon,
        amex,
        atnt,
        aurora,
        aws,
        blackrock,
        cisco,
        citi,
        deloitte,
        // facebookSmall,
        facebook,
        fedexFreight,
        ficoLogo,
        goldmanSachs,
        google,
        intel
      ];

  // Set up Embla with autoScroll plugin:
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed,
      stopOnInteraction: false,
      stopOnFocusIn: false
    })
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla slides:", emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden w-full mt-5" ref={emblaRef}>
      <div className="embla__container flex">
        {companyLogos.map((logoSrc, index) => (
          <CarouselCard key={index} src={logoSrc} />
        ))}
      </div>
    </div>
  );
}
