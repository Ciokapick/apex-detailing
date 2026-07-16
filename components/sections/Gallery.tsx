import Image from "next/image";

import { Section } from "@/components/Section";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=82",
    alt: "White performance coupe displayed in a dark automotive studio",
  },
  {
    src: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=82",
    alt: "Orange luxury coupe parked beneath modern architecture at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=82",
    alt: "White supercar parked beside a mountain lodge",
  },
  {
    src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=82",
    alt: "Orange sports car driving along a tree-lined road",
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=82",
    alt: "Yellow supercar parked on a leafy residential street",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=82",
    alt: "Blue muscle car photographed on a desert road at sunset",
  },
] as const;

export function Gallery() {
  return (
    <Section
      eyebrow="Selected work"
      id="work"
      intro="From daily drivers to weekend icons, every vehicle leaves with a finish built to be noticed."
      title="Results, not filters."
      tone="raised"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <figure
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-800"
            key={image.src}
          >
            <Image
              alt={image.alt}
              className="object-cover transition duration-700 ease-premium group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={image.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />
            <figcaption className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
              Studio finish / 0{index + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
