import SectionPhotos from "@/components/SectionPhotos";
import UpperMenu from "@/components/UpperMenu";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <UpperMenu />
      <section className="w-full h-[400px] flex items-center justify-center mb-[350px]">
        <video
          autoPlay
          muted
          controls={false}
          className="absolute top-0 w-full h-[700px] object-cover no"
        >
          <source
            src="https://utfs.io/f/cb0dd44d-35e2-46e9-81b0-d94be6ef556b-w5i2t3.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center text-center mt-60">
          <Image
            src="/tishak.JPG"
            alt="Tishkevich Danila"
            width={300}
            height={300}
            className="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="mt-4 p-4 bg-black bg-opacity-50 border border-white rounded-lg">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
              Tishkevich Danila
            </h1>
            <p className="text-white text-sm md:text-base lg:text-lg">
              Filmmaker & Photographer
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center my-10">
          Photos
        </h1>
        <SectionPhotos />
      </section>
      <Footer />
    </>
  );
}
