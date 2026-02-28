import React from "react";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ListWithHeading from "../components/ListWithHeading";
import PageBanner from "../components/PageBanner";
import Link from "next/link";
import RightSideContent from "../components/RightSideContent";
import { Metadata } from "next";

const arrya1 = [
  {
    heading: "Wired Material",
    description:
      "Utilizing high-grade stainless steel (316 Grade) for unmatched durability.",
  },
  {
    heading: "Channel Material",
    description:
      "Aluminium Powder Coated, ensuring longevity and a sleek aesthetic.",
  },
  {
    heading: "Wire Thickness",
    description:
      "Ranging from 2 to 3 mm, enhancing the overall strength and resilience.",
  },
  {
    heading: "Corrosion Resistance",
    description:
      "Weatherproof and rust-resistant, guaranteeing long-lasting performance.",
  },
  {
    heading: "Custom Sizing",
    description:
      "Tailored solutions are available for all window types, ensuring a perfect fit.",
  },
  {
    heading: "Maintenance",
    description:
      "Effortlessly clean and maintain your pergola, preserving its pristine appearance.",
  },
];

const arrya2 = [
  {
    heading: "Residential Use",
    description:
      "1. Outdoor Living Spaces: Motorized pergolas can create a flexible outdoor living space that can be adjusted according to weather conditions. They provide shade on sunny days and can be opened up to let in light when desired.\n2. Patios and Decks: Adding a motorized pergola to a patio or deck can enhance the usability of the space, allowing homeowners to enjoy their outdoor areas regardless of the weather.\n3. Gardens: They can be used to create stylish garden areas, offering protection to plants that need partial shade and creating comfortable garden seating areas.\n4. Poolside Covers: Installing a motorized pergola by the pool can provide a perfect retreat from the sun, making the poolside area more comfortable and usable throughout the day.",
  },
  {
    heading: "Commercial Use",
    description:
      "1. Restaurants and Cafés: Many dining establishments use motorized pergolas to extend their seating areas outdoors. These structures can attract customers who prefer dining outside while still providing protection from the elements.\n2. Hotels and Resorts: Luxury hotels and resorts often use motorized pergolas to enhance outdoor lounges, pool areas, and terraces, offering guests a premium experience with the ability to control shade and sunlight.\n3. Event Venues: Motorized pergolas can be a valuable addition to event spaces, providing adaptable cover for outdoor events like weddings, parties, and corporate functions.",
  },
  {
    heading: "Functional Benefits",
    description:
      "1. Weather Adaptability: The ability to adjust the louvered roof means that these pergolas can protect against rain, wind, and excessive sun, making outdoor spaces usable in a variety of weather conditions.\n2. Energy Efficiency: By controlling the amount of sunlight that enters an area, motorized pergolas can help reduce cooling costs in adjacent indoor spaces.\n3. Smart Home Integration: Many motorized pergolas can be integrated with smart home systems, allowing users to control them via apps, voice commands, or automated schedules.",
  },
  {
    heading: "Aesthetic and Design",
    description:
      "1. Modern Appeal: Motorized pergolas offer a sleek, contemporary look that can enhance the aesthetic appeal of any outdoor space.\n2. Customization: They are available in various materials, colors, and designs, allowing homeowners and businesses to match the pergola with their existing décor and architecture.\n3. Lighting and Accessories: Motorized pergolas can be equipped with built-in lighting, fans, and heating elements, further enhancing their functionality and aesthetic appeal.",
  },
  {
    heading: "Practical Considerations",
    description:
      "1. Installation and Maintenance: Professional installation ensures that the pergola is safe and operates smoothly. Regular maintenance is required to keep the mechanical components in good working order.\n2. Cost: While motorized pergolas can be more expensive than traditional ones, the added convenience and versatility often justify the investment.",
  },
];

const imagesList = [
  "/projects/Pergola1.webp",
  "/projects/Pergola2.webp",
  "/projects/Pergola3.webp",
  "/projects/Pergola4.webp",
  "/projects/Pergola5.webp",
];

export const metadata: Metadata = {
  title: "Motorized pergola manufacturer in Kolkata | Grillex",
  description: "Grillex is a leading motorized pergola manufacturer in Kolkata. Elevate your outdoor space with our premium pergolas. Contact us now for a free quote!",
  alternates : {
    canonical : "/european-motorised-pergola"
  },
  authors : [{name : "admin"}]
};

export default function page() {
  return (
    <>
      <PageBanner title={"MOTORISED PERGOLA   MANUFACTURER IN KOLKATA"} />
      <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
        <div
          className={`flex-grow basis-[60%] overflow-hidden space-y-6 pr-20 ts:basis-full ts:pr-0 border-r ts:border-r-0   md:basis-full md:pr-0 md:border-r-0`}
        >
          <ImageGallery projects_images={imagesList} />
          <h2 className="font-bold text-3xl tracking-wider">
            MOTORISED PERGOLA
          </h2>
          <div className="text-gray-600">
            <p className="pb-4">
              Transform your outdoor living experience with our latest
              innovation – the European Motorised Pergola. Elevate your
              lifestyle by seamlessly blending modern design with cutting-edge
              technology, offering a unique style, comfort, and functionality
              combination.
            </p>
            <ListWithHeading list={arrya1} />
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              UTILIZATION OF MOTORISED PERGOLA
            </h2>
            <p className="pb-4">
              Motorized pergolas have become increasingly popular due to their
              versatility, convenience, and modern appeal. Here are some ways
              they can be utilized:
            </p>
            <ListWithHeading list={arrya2} />
            <div className="pt-10"></div>
            <Link
              className="text-blue-700"
              href={"https://ashianainteriors.com/"}
            >
              1. Ashiana Interiors
            </Link>{" "}
            (Interior Designing Company in Kolkata) <br />{" "}
            <Link
              className="text-blue-700"
              href={"https://www.promiplastwindows.com/"}
            >
              2. Promiplast
            </Link>{" "}
            (UPVC Windoors & Doors in Kolkata) <br />{" "}
            <Link
              className="text-blue-700"
              href={"https://www.premiumbathware.com/"}
            >
              3. Premium Bathware{" "}
            </Link>{" "}
            (Modern Bathroom Accessories)
          </div>
        </div>
        <RightSideContent projectname={"european-motorised-pergola"} />
      </section>
    </>
  );
}
