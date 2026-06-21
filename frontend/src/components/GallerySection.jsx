export default function GallerySection() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Gallery
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Healthcare awareness programs, yoga sessions,
            health checkup camps, educational guidance and
            community support initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-2xl
                shadow-md
                bg-white
              "
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="
                  w-full
                  h-72
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-110
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
