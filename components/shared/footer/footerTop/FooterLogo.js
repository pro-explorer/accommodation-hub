/**
 * Title: Write a program using JavaScript on FooterLogo
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

import React from "react";
import Logo from "../../logo/Logo";
import FooterPayment from "./FooterPayment";

const FooterLogo = () => {
  return (
    <section>
      <article className="flex md:flex-col md:justify-normal md:items-start flex-row justify-between items-center gap-y-4">
        <Logo />
        <p className="text-xs md:block hidden">
          Your ultimate platform for finding verified off-campus accommodation.
          Catering to students' needs, it offers a wide range of listings,
          including apartments, shared housing, villas, and hostels, ensuring a
          secure and convenient booking experience.
        </p>
        <div className="lg:hidden block">
          <FooterPayment />
        </div>
      </article>
    </section>
  );
};

export default FooterLogo;
