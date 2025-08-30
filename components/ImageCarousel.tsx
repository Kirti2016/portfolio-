// Example usage inside your ProjectPage.tsx (or wherever you render the project)
import ImageCarousel from "@/components/ImageCarousel";

export default function ProjectPage() {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
      <ImageCarousel
        images={[
          { src: "/projects/drone-prototype.jpg", alt: "Swarm drone prototype" },
          { src: "/projects/drone-frame.jpg", alt: "3D printed drone frame" },
          { src: "/projects/drone-esp32.jpg", alt: "ESP32 wiring and components" },
          { src: "/projects/drone-app.jpg", alt: "Android app controlling drones" },
          { src: "/projects/drone-cad.jpg", alt: "CAD design of drone frame" },
        ]}
      />
    </div>
  );
}
