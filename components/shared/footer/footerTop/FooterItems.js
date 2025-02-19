/**
 * Title: Write a program using JavaScript on FooterItems
 * Author: Kutenda Believe Samakande
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 15, August 2023
 */

import Link from "next/link";
import React from "react";

const FooterItems = () => {
  const items = [
    {
      id: 1,
      name: "Quick Links",
      href: [
        {
          id: 11,
          name: "How to Find Accommodation",
          href: "/how-to-find-accommodation",
        },
        {
          id: 12,
          name: "Site Map",
          href: "/site-map",
        },
        {
          id: 13,
          name: "Careers",
          href: "/careers",
        },
        {
          id: 14,
          name: "About Us",
          href: "/about-us",
        },
        {
          id: 15,
          name: "Blogs",
          href: "/blogs",
        },
      ],
    },
    {
      id: 2,
      name: "Services",
      href: [
        {
          id: 21,
          name: "Accommodation Listings",
          href: "/accommodation-listings",
        },
        {
          id: 22,
          name: "Student Resources",
          href: "/student-resources",
        },
        {
          id: 23,
          name: "Roommate Finder",
          href: "/roommate-finder",
        },
        {
          id: 24,
          name: "Safety Tips",
          href: "/safety-tips",
        },
      ],
    },
    {
      id: 3,
      name: "Support",
      href: [
        {
          id: 31,
          name: "Contact Us",
          href: "/contact-us",
        },
        {
          id: 32,
          name: "Legal Notice",
          href: "/legal-notice",
        },
        {
          id: 33,
          name: "FAQs",
          href: "/faqs",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {items.map(({ id, name, href }) => (
          <div key={id} className="flex flex-col gap-y-2">
            <h2 className="text-lg">{name}</h2>
            <ul className="text-sm flex flex-col gap-y-1">
              {href.map(({ id, name, href }) => (
                <li key={id} className="font-light">
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterItems;
