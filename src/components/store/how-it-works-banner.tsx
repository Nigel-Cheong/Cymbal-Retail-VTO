import Image from 'next/image';

export default function HowItWorksBanner() {
  return (
    <div className="w-full mb-8">
      <Image
        src="/images/how_its_done.png"
        alt="How it works infographic"
        width={1600}
        height={400}
        className="w-full h-auto rounded-lg object-cover"
        priority
      />
    </div>
  );
}
