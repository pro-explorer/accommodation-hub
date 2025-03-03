/**
 * Title: Write a program using JavaScript on BreakdownArticle
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
 * Date: 28, September 2023
 */

import React from "react";
import { BiHome } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { IoIosContact } from "react-icons/io"; // Make sure to import IoIosContact

const BreakdownArticle = () => {
  const items = [
    {
      title: "Select Your Accommodation",
      icon: <BiHome className="w-8 h-8 text-primary" />,
      description: "Choose from verified listings near HIT for your stay.",
    },
    {
      title: "Secure Payment Process",
      icon: <MdPayment className="w-8 h-8 text-primary" />,
      description: "Enjoy a hassle-free payment experience for bookings.",
    },
    {
      title: "Connect with Property Managers",
      icon: <IoIosContact className="w-8 h-8 text-primary" />,
      description:
        "Reach out to landlords to finalize your accommodation details.",
    },
  ];

  return (
    <section className="flex lg:flex-wrap lg:flex-row flex-col gap-4">
      {items.map(({ title, icon, description }, index) => (
        <article
          key={index}
          className="group border border-secondary hover:border-primary transition-colors delay-100 ease-linear p-4 rounded flex flex-col gap-y-2.5 relative overflow-hidden lg:flex-1 lg:basis-60"
        >
          <span className="border w-fit p-2 rounded-primary border-secondary group-hover:border-primary transition-colors delay-100 ease-linear">
            {icon}
          </span>
          <div className="flex flex-col gap-y-0.5 z-10">
            <h2 className="text-lg">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
          <span className="absolute -bottom-10 right-4 text-secondary/50 text-9xl font-sans group-hover:-bottom-0 transition-all delay-100 ease-linear">
            0{index + 1}
          </span>
        </article>
      ))}
    </section>
  );
};

export default BreakdownArticle;
