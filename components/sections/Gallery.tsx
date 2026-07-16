import Image from "next/image";

import { Section } from "@/components/Section";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?auto=format&fit=crop&w=1800&q=84", alt: "Silver performance car illuminated at night", label: "Correction / Silver" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=84", alt: "White performance coupe in a dark automotive studio", label: "Ceramic / White" },
  { src: "https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?auto=format&fit=crop&w=1400&q=84", alt: "Black luxury SUV photographed in shadow", label: "Detail / Obsidian" },
  { src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=84", alt: "Orange sports car on a tree-lined road", label: "Protection / Rosso" },
  { src: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=84", alt: "White supercar beside a mountain lodge", label: "Correction / Alpine" },
  { src: "https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?auto=format&fit=crop&w=1400&q=84", alt: "Black vehicle interior with detailed leather surfaces", label: "Interior / Graphite" },
] as const;

function GalleryFigure({ image, className }: { image: (typeof galleryImages)[number]; className: string }) {
  return (
    <figure className={`group image-noise relative overflow-hidden bg-paper/5 ${className}`}>
      <Image alt={image.alt} className="object-cover saturate-[.82] transition duration-700 ease-premium group-hover:scale-[1.035] group-hover:saturate-100" fill sizes="(min-width: 1024px) 58vw, 100vw" src={image.src} />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-50" />
      <figcaption className="absolute bottom-4 left-4 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-paper sm:bottom-5 sm:left-5">{image.label}</figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <Section
      eyebrow="[03] / Selected work"
      id="work"
      intro="Six finishes. Six different paint systems. The same obsession with edges, reflections and restraint."
      title="Surfaces worth looking at twice."
      tone="carbon"
    >
      <div className="grid gap-2 lg:grid-cols-12">
        <div className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
          <GalleryFigure className="aspect-[4/3] sm:col-span-2" image={galleryImages[0]} />
          <GalleryFigure className="aspect-square" image={galleryImages[1]} />
          <GalleryFigure className="aspect-square" image={galleryImages[2]} />
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:col-span-5 lg:pt-24">
          <GalleryFigure className="aspect-[4/5] sm:col-span-2" image={galleryImages[3]} />
          <GalleryFigure className="aspect-[4/3]" image={galleryImages[4]} />
          <GalleryFigure className="aspect-[4/3]" image={galleryImages[5]} />
        </div>
      </div>
    </Section>
  );
}
