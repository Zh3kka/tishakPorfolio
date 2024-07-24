const VideoHeader = () => {
  return (
    <section className="w-full h-[50px] flex items-center justify-center mb-[300px]">
      <video
        autoPlay
        muted
        controls={false}
        className="absolute top-0 w-full h-[400px] object-cover no"
      >
        <source
          src="https://utfs.io/f/cb0dd44d-35e2-46e9-81b0-d94be6ef556b-w5i2t3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center text-center mt-60">
        <h1 className="text-white text-xl md:text-2xl lg:text-[120px] uppercase">
          Video production
        </h1>
      </div>
    </section>
  );
};

export default VideoHeader;
