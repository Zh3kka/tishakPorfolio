const Films = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8 uppercase">
        Films & Music clips
      </h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <div className="relative bg-gray-200 aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-full object-cover" loop controls>
            <source
              src="https://www.youtube.com/watch?v=rmwYMiQr3-0"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative bg-gray-200 aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-full object-cover" loop controls>
            <source
              src="https://www.youtube.com/watch?v=HfPmylvXd0U"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative bg-gray-200 aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-full object-cover" loop controls>
            <source
              src="https://youtu.be/PKxKOmsQGZ4?si=jPeSpiSKlVbtTHDQ"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative bg-gray-200 aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-full object-cover" loop controls>
            <source
              src="https://youtu.be/BWPs2A3b7EE?si=wZ3-ATGixW2RJCOL"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Films;
