/**
 * Title: Write a program using JavaScript on FAQ
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
 * Date: 21, October 2023
 */

import React, { useState } from "react";
import Container from "../shared/container/Container";
import HighlightText from "../shared/highlightText/HighlightText";
import LoadImage from "../shared/image/LoadImage";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqs = [
    {
      question: "What types of student accommodation are available?",
      answer:
        "AccommodationHub offers a range of student-friendly options, including private rooms, shared apartments, and university dormitories. We focus on providing safe, affordable, and convenient living spaces for students near their campuses.",
    },
    {
      question: "How can I find accommodation near my school?",
      answer:
        "You can easily search for accommodation based on your school's location. Our platform allows you to filter options by proximity to your campus, budget, and other essential features like Wi-Fi, security, and study spaces.",
    },
    {
      question: "What is the booking process like?",
      answer:
        "Booking accommodation through AccommodationHub is simple. You can browse listings, contact property owners or managers directly, and secure your space with a few clicks. We also provide guidance throughout the booking process to ensure a smooth experience.",
    },
    {
      question: "Is the accommodation furnished?",
      answer:
        "Most accommodations listed on our platform are fully furnished, including essential items like beds, desks, chairs, and storage. We provide details for each listing to help you understand exactly what is provided.",
    },
    {
      question: "Can I find accommodation for short-term stays?",
      answer:
        "Yes, we offer flexible accommodation options for short-term stays, including accommodations for semester-based or summer school periods. You can filter by duration to find the perfect place for your needs.",
    },
    {
      question: "How do I know the accommodation is safe?",
      answer:
        "We prioritize student safety by listing only verified accommodations with positive reviews from previous tenants. You can also view detailed information about the property's security features, including surveillance, on-site staff, and access control.",
    },
    {
      question: "Are utilities like electricity and water included?",
      answer:
        "Many listings on AccommodationHub include utilities such as electricity, water, and internet. We provide clear information about what's included in the rent for each listing, so you know what to expect.",
    },
    {
      question: "How do I pay for the accommodation?",
      answer:
        "Payment options vary by listing. Most accommodations accept bank transfers, credit card payments, or online payment systems. We ensure that all transactions are secure and transparent for your peace of mind.",
    },
    {
      question: "What if I need help with my accommodation?",
      answer:
        "If you encounter any issues with your accommodation or booking process, our support team is available to assist you. You can reach us through our website, and we’ll help resolve any concerns promptly.",
    },
  ];

  const handleToggleCollapse = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="h-full py-12">
      <Container>
        <div className="w-full h-full flex flex-col gap-y-12">
          <article className="flex flex-col gap-y-4">
            <h1 className="lg:text-5xl md:text-4xl text-3xl whitespace-normal">
              <HighlightText>F.A.Q.</HighlightText> for Students Looking for
              Accommodation
              <LoadImage
                src="/assets/home-page/destination/underline.svg"
                alt="arrow"
                height={7}
                width={275}
                className="mt-1.5"
              />
            </h1>
            <p className="text-base">
              Frequently Asked Questions from students about accommodation
              options during their school stay.
            </p>
          </article>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <Card
                faq={faq}
                key={index}
                index={index}
                isExpanded={expandedIndex === index}
                onToggleCollapse={() => handleToggleCollapse(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

function Card({ index, faq, isExpanded, onToggleCollapse }) {
  return (
    <article
      className="group flex flex-col gap-y-1.5 relative border border-secondary rounded p-4 hover:border-primary transition-colors"
      onClick={onToggleCollapse}
    >
      <h1 className="text-5xl text-secondary/80 font-bold">{index + 1}</h1>
      <h2
        className={
          "text-lg flex flex-row justify-between items-start cursor-pointer relative w-full" +
          " " +
          (isExpanded
            ? "rounded-r rounded-t !line-clamp-1"
            : "rounded !line-clamp-1")
        }
      >
        {faq.question}
      </h2>
      <span className="p-0.5 border rounded-primary absolute top-1.5 right-1.5 bg-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        {isExpanded ? (
          <BiChevronUp className="h-5 w-5" />
        ) : (
          <BiChevronDown className="h-5 w-5" />
        )}
      </span>
      {isExpanded && (
        <div className="absolute top-8 left-0 w-full z-50 border p-4 rounded bg-white mt-2">
          <h2 className="mb-2 text-base">{faq.question}</h2>
          <p className="text-sm">{faq.answer}</p>
          <span className="triangle absolute -top-3 right-2" />

          <style js>
            {`
              .triangle {
                  width: 0px;
                  height: 0px;
                  border-style: solid;
                  border-width: 0 10px 10px 10px;
                  border-color: transparent transparent #000 transparent;
                  transform: rotate(0deg);
              }
            `}
          </style>
        </div>
      )}
    </article>
  );
}

export default FAQ;
