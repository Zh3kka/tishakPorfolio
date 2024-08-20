const VideoHeader = () => {
  return (
    <section className="w-full h-[50px] flex items-center justify-center mb-[300px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute top-0 w-full h-[400px] object-cover"
      >
        <source
          src="https://www.youtube.com/watch?v=HfPmylvXd0U"
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
