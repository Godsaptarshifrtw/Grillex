import React from "react";
import Link from "next/link";
import ListWithHeading from "../components/ListWithHeading";
import PageBanner from "../components/PageBanner";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import RightSideContent from "../components/RightSideContent";
import { Metadata } from "next";

const array1 = [
  {
    heading: "Material Mastery",
    description:
      "Crafted with high-quality, durable materials for longevity and aesthetic appeal.",
  },
  {
    heading: "Versatile Design",
    description:
      "Adaptable to various spaces, adding a touch of elegance to balconies, patios, and windows.",
  },
  {
    heading: "Weather Resistant",
    description:
      "Engineered to withstand diverse weather conditions, providing year-round protection and comfort.",
  },
  {
    heading: "Effortless Operation",
    description:
      "Easy-to-use mechanisms for seamless deployment, ensuring convenience at your fingertips.",
  },
  {
    heading: "Customization Options",
    description:
      "Tailor the size and style to match your unique preferences, creating a personalized outdoor sanctuary.",
  },
];

const array2 = [
  {
    heading: "Sun Protection",
    description:
      "Residential: Awnings can be installed over windows, patios, and decks to provide shade, reducing indoor temperatures and protecting outdoor spaces from excessive sun.\nCommercial: They are often used in storefronts to protect merchandise from sun damage and create comfortable outdoor seating areas.",
  },
  {
    heading: "Energy Efficiency",
    description:
      "Awnings reduce solar heat gain, leading to lower cooling costs in the summer. They can block up to 77% of solar radiation, significantly improving energy efficiency in buildings.",
  },
  {
    heading: "Weather Protection",
    description:
      "Awnings protect outdoor areas from rain and wind, making spaces more usable in various weather conditions. This is particularly beneficial for restaurants with outdoor seating.",
  },
  {
    heading: "Aesthetic Enhancement",
    description:
      "Available in various styles, colors, and materials, awnings can enhance the visual appeal of buildings, adding character and charm to both modern and traditional architecture.",
  },
  {
    heading: "Branding and Advertising",
    description:
      "Commercial establishments can use awnings for signage and branding, displaying their name, logo, and other information prominently.",
  },
];

const array3 = [
  {
    heading: "Insect Protection",
    description:
      "Screens are essential for keeping insects out while allowing fresh air to circulate. They are commonly used in windows, doors, and porches.",
  },
  {
    heading: "Privacy",
    description:
      "Screens provide privacy without blocking natural light. This is particularly useful for urban settings where buildings are close together.",
  },
  {
    heading: "Sun Control",
    description:
      "Solar screens can reduce glare and UV radiation, protecting indoor furnishings from fading and helping to maintain comfortable indoor temperatures.",
  },
  {
    heading: "Security",
    description:
      "Security screens made of strong materials like stainless steel provide an additional layer of protection against intruders while still allowing visibility and ventilation.",
  },
  {
    heading: "Aesthetic Integration",
    description:
      "Modern screens can be designed to blend seamlessly with the architecture of a building, offering a sleek and unobtrusive look.",
  },
];

const array4 = [
  {
    heading: "Material Selection",
    description:
      "Awnings can be made from materials like canvas, acrylic, polyester, and metal. Screens can be made from fiberglass, aluminum, stainless steel, or polyester mesh.\nChoosing the right material depends on factors like climate, desired durability, and maintenance requirements.",
  },
  {
    heading: "Installation and Maintenance",
    description:
      "Proper installation is crucial for the effectiveness and longevity of awnings and screens. Regular maintenance, such as cleaning and inspecting for damage, ensures they remain functional and visually appealing.",
  },
  {
    heading: "Automation and Adjustability",
    description:
      "Modern awnings can be motorized and equipped with sensors to automatically retract in high winds or extend in strong sunlight. Screens can also be motorized for ease of use.",
  },
  {
    heading: "Customization",
    description:
      "Both awnings and screens can be customized to fit specific dimensions and design preferences, ensuring a perfect match for any application.",
  },
];

export const metadata: Metadata = {
  title:
    "Awnings & Screens in Kolkata | Grillex",
  description:
    "Enhance your space with versatile awnings & screens in Kolkata. Explore a range of options tailored to elevate your outdoor experience.",
  alternates: {
    canonical: "/awnings-screens",
  },
};

const imagesList = [
  "/projects/awnings4.webp",
  "/projects/awnings2.webp",
  "/projects/awnings3.webp",
  "/projects/awnings1.webp",
  "/projects/awnings5.webp",
];

export default function page() {
  return (
    <>
      <PageBanner title={"AWNINGS AND SCREENS MANUFACTURER IN KOLKATA"} />
      <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
        <div
          className={`flex-grow basis-[60%] overflow-hidden space-y-6 pr-20 ts:basis-full ts:pr-0 border-r ts:border-r-0   md:basis-full md:pr-0 md:border-r-0`}
        >
          <ImageGallery projects_images={imagesList} />
          <h2 className="font-bold text-3xl tracking-wider">
            AWNINGS AND SCREENS
          </h2>
          <div className="text-gray-600">
            <p className="pb-4">
              Transform your outdoor space into a haven of style and comfort
              with our Awnings & screens. Elevate your experience with a perfect
              blend of durability and elegance. Embrace the outdoors
              confidently, knowing you have a versatile solution that combines
              functionality and aesthetic appeal seamlessly.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Specifications of our awnings & screens:
            </h2>
            <ListWithHeading list={array1} />
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              UTILIZATION OF AWNINGS & SCREENS
            </h2>
            <h2>Awnings</h2>
            <ListWithHeading list={array2} />
            <h2 className="mt-4">Screens</h2>
            <ListWithHeading list={array3} />
            <h2>Practical Considerations</h2>
            <ListWithHeading list={array4} />
            <div className="size-10"></div>
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
        <RightSideContent projectname={"awnings-screens"} />
      </section>
    </>
  );
}
