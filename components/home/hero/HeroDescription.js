/**
 * Title: Write a program using JavaScript on BannerDescription
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/in/devhasibulislam
 * Facebook: https://facebook.com/in/devhasibulislam
 * Instagram: https://instagram.com/in/devhasibulislam
 * Twitter: https://twitter.com/in/devhasibulislam
 * Pinterest: https://pinterest.com/in/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 16, August 2023
 */

import Button from "@/components/shared/button/Button";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import React from "react";

const HeroDescription = () => {
  return (
    <section className="lg:col-span-8 md:col-span-6">
      <article className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-8">
          <h1 className="lg:text-7xl md:text-5xl text-3xl whitespace-normal">
            Find Your Perfect <HighlightText>Accommodation</HighlightText>{" "}
            Experience
          </h1>
          <p className="text-base">
            Browse our curated collection of hotels, resorts, villas, and more.{" "}
            <br /> Whether you&apos;re looking for a romantic getaway, a family
            vacation, or a business trip, we have the perfect place for you.{" "}
            <br /> Let us help you book the ideal accommodation for a memorable
            stay.
          </p>
        </div>
        <div>
          <Button
            className="px-[18px] py-[13px]"
            onClick={() => window.open("/tours", "_self")}
          >
            Discover Accommodations
          </Button>
        </div>
      </article>
    </section>
  );
};

export default HeroDescription;
