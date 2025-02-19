/**
 * Title: Write a program using JavaScript on AdvantageArticle
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 30, August 2023
 */

import LoadImage from "@/components/shared/image/LoadImage";
import React from "react";

const AdvantageArticle = () => {
  const items = [
    {
      _id: 1,
      icon: (
        <LoadImage
          src={"/assets/home-page/advantage/earth.svg"}
          alt={"Verified accommodation"}
          height={60}
          width={60}
          className="border border-primary shadow-lg rounded-full"
        />
      ),
      title: "Safe & Verified Listings",
      description:
        "All accommodations listed on our platform are verified to ensure your safety and comfort, giving you peace of mind during your stay.",
    },
    {
      _id: 2,
      icon: (
        <LoadImage
          src={"/assets/home-page/advantage/smile.svg"}
          alt={"Happy students"}
          height={60}
          width={60}
          className="border border-primary shadow-lg rounded-full"
        />
      ),
      title: "Community of Happy Students",
      description:
        "Join a thriving community of students who have found their perfect off-campus housing. Read reviews and connect with fellow tenants.",
    },
    {
      _id: 3,
      icon: (
        <LoadImage
          src={"/assets/home-page/advantage/star.svg"}
          alt={"All-inclusive services"}
          height={60}
          width={60}
          className="border border-primary shadow-lg rounded-full"
        />
      ),
      title: "All-Inclusive Experience",
      description:
        "Our platform offers a seamless booking process with no hidden fees. Enjoy a stress-free experience as you find your ideal accommodation.",
    },
  ];

  return (
    <article className="flex flex-col gap-y-8">
      <h2 className="lg:text-4xl md:text-3xl text-2xl">
        Explore Your Perfect Home Away From Home
        <LoadImage
          src={"/assets/home-page/advantage/line.svg"}
          alt={"line"}
          height={10}
          width={150}
          className="mt-1.5"
        />
      </h2>
      <div className="flex flex-col gap-y-4">
        {items.map(({ _id, icon, title, description }) => (
          <div
            key={_id}
            className="flex gap-x-2 items-start bg-white/70 shadow p-primary rounded-primary"
          >
            {icon}
            <div className="w-full flex flex-col gap-y-1">
              <h2 className="text-lg">{title}</h2>
              <p className="text-sm lg:line-clamp-none md:line-clamp-2 line-clamp-none">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default AdvantageArticle;
