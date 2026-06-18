export default function GallerySection() {

  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Our Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {images.map((img) => (
            <img
              key={img}
              src={img}
              alt=""
              className="rounded-xl h-64 w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
