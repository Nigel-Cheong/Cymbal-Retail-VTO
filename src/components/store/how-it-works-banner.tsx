import Image from 'next/image';

export default function HowItWorksBanner() {
  return (
    <div className="relative w-full mb-8 rounded-lg overflow-hidden bg-muted">
      <Image
        src="/images/how_its_done.png"
        alt="How it works infographic"
        width={1600}
        height={400}
        className="w-full h-auto object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Welcome to Cymbal Retail</h1>
        <p className="mt-2 text-lg text-white/90 max-w-3xl">
          We believe in a more sustainable future for fashion. Our virtual try-on technology helps reduce returns and waste, one outfit at a time.
        </p>
      </div>
    </div>
  );
}
