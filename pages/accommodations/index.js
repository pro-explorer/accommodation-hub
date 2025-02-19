/**
 * Title: Write a program using JavaScript on Index
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
 * Date: 01, November 2023
 */

import Banner from "@/components/accommodations/Banner";
import Accommodations from "@/components/accommodations/Accommodations";
import Main from "@/layouts/Main";
import Head from "next/head";
import React from "react";

const AccommodationsPage = () => {
  return (
    <main>
      <Head>
        <title>
          Accommodation Hub System - Find Safe and Affordable Housing
        </title>
      </Head>
      <Main>
        <Banner />
        <AccommodationsPage />
      </Main>
    </main>
  );
};

export default Accommodations;
