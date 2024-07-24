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
              src="https://utfs.io/f/d6969bbc-c3cf-449f-bb0a-c6480667f658-hagnzu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative bg-gray-200 aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-full object-cover" loop controls>
            <source
              src="https://utfs.io/f/66b07b48-91de-415f-b772-de3216c32f09-lq78dl.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Films;
