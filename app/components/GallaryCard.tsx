import Image from "next/image";
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

const GallaryCard = () => {
  return (
    <>
      <section className="relative pt-5 pb-20">
        <div className="px-4 max-w-[1224px] mx-auto">
          <div className="mb-10">
            <Link href="/" className="text-foreground font-minionNormal text-[35px]">
              On View
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 md:gap-x-5 lg:gap-x-8 gap-y-10">
            <Link href="/" className="group flex flex-col justify-end">
              <div
                className="relative transition-opacity group-hover:opacity-35"
                style={{ width: "67.42%" }}
              >
                <Image src={card1} alt="card1" />
              </div>

              <div className="mt-5 space-y-5">
                <div className="text-foreground font-minionNormal text-2xl leading-none capitalize group-hover:text-muted transition-colors">
                  <h4>Richard Prince</h4>
                  <h4>Folk Songs</h4>
                </div>

                <div className="text-foreground font-minionNormal text-lg leading-tight  group-hover:text-muted transition-colors">
                  <p>November 6–December 20, 2025</p>
                  <p>555 West 24th Street, New York</p>
                </div>
              </div>
            </Link>
            <Link href="/" className="group flex flex-col justify-end">
              <div
                className="relative transition-opacity group-hover:opacity-35"
                style={{ width: "94.65%" }}
              >
                <Image src={card2} alt="card2" />
              </div>

              <div className="mt-5 space-y-5">
                <div className="text-foreground font-minionNormal text-2xl leading-none capitalize group-hover:text-muted transition-colors">
                  <h4>Richard Serra</h4>
                  <h4>Running Arcs (For John Cage), 1992</h4>
                </div>

                <div className="text-foreground font-minionNormal text-lg leading-tight  group-hover:text-muted transition-colors">
                  <p>September 12–December 20, 2025</p>
                  <p>West 21st Street, New York</p>
                </div>
              </div>
            </Link>
            <Link href="/" className="group flex flex-col justify-end">
              <div
                className="relative transition-opacity group-hover:opacity-35"
                style={{ width: "62.08%" }}
              >
                <Image src={card3} alt="card3" />
              </div>

              <div className="mt-5 space-y-5">
                <div className="text-foreground font-minionNormal text-2xl leading-none capitalize group-hover:text-muted transition-colors">
                  <h4>Christopher Wool</h4>
                </div>

                <div className="text-foreground font-minionNormal text-lg leading-tight  group-hover:text-muted transition-colors">
                  <p>October 13–December 19, 2025</p>
                  <p>Grosvenor Hill, London</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GallaryCard;
