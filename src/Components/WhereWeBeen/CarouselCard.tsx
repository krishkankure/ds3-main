interface CarouselCardProps {
  src: string;
}

export default function CarouselCard({ src }: CarouselCardProps) {
  return (
    <div className="embla__slide max-w-[clamp(200px,20vw,500px)] h-[clamp(50px,7vw,200px)] flex-shrink-0 mx-[1.3vw]  rounded-lg  flex justify-center items-center">
      <img src={src} alt="logo" className="object-contain w-full h-full" />
    </div>
  );
}
