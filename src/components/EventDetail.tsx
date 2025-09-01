import { useParams } from "react-router-dom";

const eventImages: Record<string, string[]> = {
  "Draw with Comali": [
    "/images/draw1.jpg",
    "/images/draw2.jpg",
    "/images/draw3.jpg",
  ],
  "ARTSY’24": [
    "/images/artsy1.jpg",
    "/images/artsy2.jpg",
  ],
  "INVESTITURE CEREMONY": [
    "/images/invest1.jpg",
    "/images/invest2.jpg",
  ],
  // 🔥 add images for other events
};

const EventDetail = () => {
  const { title } = useParams<{ title: string }>();
  const decodedTitle = decodeURIComponent(title || "");
  const images = eventImages[decodedTitle] || [];

  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">{decodedTitle}</h1>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${decodedTitle} ${i + 1}`}
              className="rounded-xl shadow-lg object-cover"
            />
          ))}
        </div>
      ) : (
        <p className="text-lg text-muted-foreground">
          No images available for this event.
        </p>
      )}
    </section>
  );
};

export default EventDetail;
