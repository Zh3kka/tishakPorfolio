import Image from "next/image";
import HeaderPhoto from "./HeaderPhoto";

const images = [
  "/photo/3.jpg",
  "/photo/7.jpg",
  "/photo/8.jpg",
  "/photo/10.jpeg",
  "/photo/11.jpg",
  "/photo/12.jpg",
  "/photo/13.jpeg",
  "/photo/14.jpeg",
  "/photo/15.jpeg",
  "/photo/16.jpeg",
  "/photo/17.jpeg",
  "/photo/18.jpeg",
  "/photo/19.jpeg",
  "/photo/20.jpeg",
  "/photo/21.jpeg",
  "/photo/22.jpeg",
  "/photo/23.jpeg",
  "/photo/24.jpg",
  "/photo/25.JPG",
  "/photo/26.JPG",
  "/photo/2.jpg",
];

const SectionPhotos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-[500px]">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionPhotos;
