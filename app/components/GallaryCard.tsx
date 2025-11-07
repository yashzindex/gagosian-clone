import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import card1 from "@/public/image/card1.jpg";
import card2 from "@/public/image/card2.jpg";
import card3 from "@/public/image/card3.jpg";
import card4 from "@/public/image/card4.jpg";
import card5 from "@/public/image/card5.jpg";
import card6 from "@/public/image/card6.jpg";
import card7 from "@/public/image/card7.jpg";
import card8 from "@/public/image/card8.jpg";
import card9 from "@/public/image/card9.jpg";
import card10 from "@/public/image/card10.jpg";

// 🧩 Card data array
const galleryData: {
  id: number;
  image: StaticImageData;
  artist: string;
  title?: string;
  date: string;
  location: string;
  width: string;
  href: string;
}[] = [
  {
    id: 1,
    image: card1,
    artist: "Richard Prince",
    title: "Folk Songs",
    date: "November 6–December 20, 2025",
    location: "555 West 24th Street, New York",
    width: "67.42%",
    href: "/",
  },
  {
    id: 2,
    image: card2,
    artist: "Richard Serra",
    title: "Running Arcs (For John Cage), 1992",
    date: "September 12–December 20, 2025",
    location: "West 21st Street, New York",
    width: "94.65%",
    href: "/",
  },
  {
    id: 3,
    image: card3,
    artist: "Christopher Wool",
    title: "",
    date: "October 13–December 19, 2025",
    location: "Grosvenor Hill, London",
    width: "62.08%",
    href: "/",
  },

];

const GallaryCard = () => {
  return (
    <section className="relative pt-5 pb-20">
      <div className="px-4 max-w-[1224px] mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <Link href="/" className="text-foreground font-minionNormal text-[35px]">
            On View
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 md:gap-x-5 lg:gap-x-8 gap-y-10">
          {galleryData.map(({ id, image, artist, title, date, location, width, href }) => (
            <Link
              key={id}
              href={href}
              className="group flex flex-col justify-end"
            >
              {/* Image */}
              <div
                className="relative transition-opacity group-hover:opacity-35"
                style={{ width }}
              >
                <Image
                  src={image}
                  alt={`${artist} ${title}`}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Text content */}
              <div className="mt-5 space-y-5">
                <div className="text-foreground font-minionNormal text-2xl leading-none capitalize group-hover:text-muted transition-colors">
                  <h4>{artist}</h4>
                  {title && <h4>{title}</h4>}
                </div>

                <div className="text-foreground font-minionNormal text-lg leading-tight group-hover:text-muted transition-colors">
                  <p>{date}</p>
                  <p>{location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallaryCard;
