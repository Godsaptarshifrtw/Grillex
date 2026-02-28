import Link from "next/link";
import React from "react";
import ListWithHeading from "../components/ListWithHeading";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import PageBanner from "../components/PageBanner";
import RightSideContent from "../components/RightSideContent";
import { Metadata } from "next";

const array1 = [
  {
    heading: "Material",
    description: "Premium-grade PVD-coated stainless steel",
  },
  {
    heading: "Design Options",
    description: "Choose from a variety of classic patterns",
  },
  {
    heading: "Height",
    description: "Standard 6 feet, custom heights available",
  },
  {
    heading: "Finishes",
    description: "Brushed, Gold, Rose Gold, and Chrome color options",
  },
  {
    heading: "Installation",
    description: "Easy to mount with minimal hardware",
  },
  {
    heading: "Versatility",
    description: "Suitable for home, office, or commercial spaces",
  },
  {
    heading: "Maintenance",
    description: "Low-maintenance, long-lasting finish",
  },
];

const imagesList = [
  "/projects/pvd1.webp",
  "/projects/pvd2.webp",
  "/projects/pvd3.webp",
  "/projects/pvd4.webp",
  "/projects/pvd5.webp",
];

export const metadata: Metadata = {
  title: "PVD Coated Grill Manufacturer in Kolkata | Grillex",
  description:
    "Grillex is the top invisible grill manufacturer in Kolkata specializing in PVD-coated designs. Transform your space today. Contact us now!!",
  alternates: {
    canonical: "/pvd-coated-grill",
  },
};
export default function page() {
  return (
    <>
      <PageBanner title={"PVD COATED GRILL MANUFACTURER IN KOLKATA"} />
      <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
        <div
          className={`flex-grow basis-[60%] overflow-hidden space-y-6 pr-20 ts:basis-full ts:pr-0 border-r ts:border-r-0   md:basis-full md:pr-0 md:border-r-0`}
        >
          <ImageGallery projects_images={imagesList} />
          <h2 className="font-bold text-3xl tracking-wider">
            PVD COATED GRILL
          </h2>
          <div className="text-gray-600">
            <p className="pb-4">
              Step into a realm where stainless steel becomes an ethereal
              masterpiece and metal grills transform into works of art. Grillex
              proudly unveils its latest innovation – the captivating PVD Coated
              Grills, where elegance meets resilience. Join us on a journey of
              unparalleled style and craftsmanship as we explore the shimmering
              brilliance of PVD Coated Grills.
            </p>
            <ListWithHeading list={array1} />
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Unveiling the Beauty: SS PVD Coated Grill
            </h2>
            <p>
              Prepare to be mesmerized by the spellbinding SS PVD Coated Grill.
              Behold as stainless steel transcends its ordinary form and evolves
              into an extraordinary spectacle. Through the magic of PVD
              (Physical Vapor Deposition) technology, our grills acquire an
              enchanting luster that resists the ravages of time. A fusion of
              beauty and strength, our PVD-coated grills grace your spaces with
              an aura of luxury.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Affordable Luxury: PVD Coated Grill Price
            </h2>
            <p>
              At Grillex, elegance should be within everyone’s reach. Our PVD
              Coated Grill Price is a testament to our commitment to providing
              unmatched value without compromise. Experience the allure of PVD
              coating without breaking the bank, as we offer you the perfect
              blend of luxury and affordability.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Crafted with Expertise: PVD Grill Fabricator & Dealers in India
            </h2>
            <p>
              In the heart of India, our artisans and engineers come together to
              prepare wonders. As the country’s leading PVD Grill Fabricator &
              Dealers, we take immense pride in our craftsmanship. Each
              PVD-coated grill is born from a meticulous process, blending
              expertise and innovation to create pieces that stand apart.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Design Dreams: PVD Coating Grill Design
            </h2>
            <p>
              Dare to dream, and we shall deliver. Our PVD Coating Grill Design
              collection is a gallery of possibilities. Explore a universe of
              creativity, from intricate patterns that weave tales of splendor
              to minimalist designs that exude serenity. Immerse yourself in a
              world of limitless imagination as your vision takes form with our
              PVD-coated grill designs.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Unyielding Durability: Innovative Excellence
            </h2>
            <p>
              With Grillex PVD Coated Grills, durability becomes an unyielding
              companion. PVD coating enhances the inherent strength of stainless
              steel, granting it the fortitude to withstand the test of time.
              Embrace the future confidently as your grills defy the elements,
              staying resplendent through rain or shine.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Embrace Distinction: Grillex PVD Coated Grills
            </h2>
            <p>
              Glide into a world where distinction meets sophistication. Grillex
              PVD Coated Grills redefine metal products, turning them into
              expressions of art and elegance. Elevate your spaces to ethereal
              heights as our grills weave stories of grandeur and allure.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Revel in Radiance: Elevate with Grillex
            </h2>
            <p>
              Allow the radiance of stainless steel to illuminate your life.
              Revel in the beauty of PVD Coated Grills as they grace your spaces
              with splendid charm. Choose Grillex for a journey that celebrates
              brilliance and innovation.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Conclusion
            </h2>
            <p>
              Step into the enigmatic world of PVD Coated Grills by Grillex,
              where stainless steel metamorphoses into an exquisite masterpiece.
              Embrace the allure of shimmering brilliance that redefines
              aesthetics and durability in one elegant sweep. Witness the
              convergence of creativity and strength as our PVD Coated Grills
              bring a touch of magic to your spaces.
            </p>
            <p className="py-2">
              Contact us today to embrace the distinction and elegance Grillex
              PVD Coated Grills offer. Let the beauty of stainless steel
              redefine your spaces, making every moment a celebration of
              perfection and innovation.
            </p>
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
        <RightSideContent projectname={"pvd-coated-grill"} />
      </section>
    </>
  );
}
