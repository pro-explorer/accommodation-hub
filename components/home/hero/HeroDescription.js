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
            Find Verified <HighlightText>Student Accommodation</HighlightText>
          </h1>
          <p className="text-base">
            Secure off-campus housing with ease. Browse verified listings, apply
            for rooms, and connect with landlords. <br /> Our platform ensures
            transparency, security, and convenience for Harare Institute of
            Technology (HIT) students. <br /> Say goodbye to scams and
            unreliable listings—find your ideal student accommodation today.
          </p>
        </div>
        <div>
          <Button
            className="px-[18px] py-[13px]"
            onClick={() => window.open("/accommodations", "_self")}
          >
            Browse Listings
          </Button>
        </div>
      </article>
    </section>
  );
};

export default HeroDescription;
