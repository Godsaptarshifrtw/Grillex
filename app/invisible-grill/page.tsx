import Link from "next/link";
import React from "react";
import CollapseMenu from "../components/CollapseMenu";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import PageBanner from "../components/PageBanner";
import RightSideContent from "../components/RightSideContent";
import { Metadata } from "next";

const imagesList = [
  "/projects/inv-g1.webp",
  "/projects/inv-g2.webp",
  "/projects/inv-g3.webp",
  "/projects/inv-g4.webp",
  "/projects/inv-g5.webp",
];

export const metadata: Metadata = {
  title:
    "Invisible Grill Manufacturer in Kolkata | Grillex",
  description:
    "Grillex is a leading manufacturer of invisible grill in Kolkata. Transform your space with our innovative solutions. Contact us today!",
  alternates: {
    canonical: "/invisible-grill",
  },
};

const faqs = [
  {
    question: "What are invisible grills, and how do they work?",
    answer:
      "Invisible grills are safety features made from high-tensile stainless steel cables that are thin and almost invisible from a distance. They are designed to provide security without obstructing the view. These grills are installed vertically or horizontally across windows, balconies, or open spaces and are secured at the ends with durable frames or fastenings. The cables are tensioned to provide strength, ensuring safety while maintaining a sleek, unobtrusive look.",
  },
  {
    question: "How strong and safe are invisible grills?",
    answer:
      "Invisible grills are highly durable and designed to withstand significant force. The stainless steel cables used typically have tensile strengths ranging from 200 to 300 kilograms per cable, making them robust enough to prevent accidents or intrusions. Despite their thin appearance, they provide reliable safety for children and pets, ensuring that areas like balconies and windows are secure. Regular maintenance and inspections help ensure they remain in top condition.",
  },
  {
    question: "Do invisible grills require maintenance?",
    answer:
      "Yes, invisible grills require minimal but regular maintenance to ensure longevity and functionality. Maintenance typically involves:\n- Cleaning the cables with a damp cloth to remove dust and debris.\n- Inspecting the tension and condition of the cables periodically.\n- Checking the fastening points for any signs of wear or corrosion.\n- Ensuring that the grills are not damaged by external factors like extreme weather.\nProper care can help maintain their appearance and safety features for many years.",
  },
  {
    question: "Are invisible grills customizable?",
    answer:
      "Yes, invisible grills can be customized to fit various spaces and design preferences. They can be tailored to match the dimensions of windows, balconies, and other open areas. The spacing between the cables can also be adjusted according to safety requirements, typically ranging from 2 to 4 inches. Additionally, the frame and cable color can be chosen to blend seamlessly with the building's aesthetics, ensuring they enhance rather than detract from the overall design.",
  },
  {
    question:
      "How do invisible grills compare to traditional grills in terms of cost and installation?",
    answer:
      "Invisible grills are generally more expensive than traditional metal grills due to the materials used and the installation process. However, the benefits of improved aesthetics, unobstructed views, and enhanced safety can justify the higher cost for many homeowners. Installation of invisible grills is typically more specialized, requiring professional installers to ensure correct tensioning and secure attachment. The initial investment in invisible grills can be higher, but they offer long-term value in terms of safety, appearance, and maintenance.",
  },
];

export default function page() {
  return (
    <>
      <PageBanner title={"INVISIBLE GRILL MANUFACTURER IN KOLKATA"} />
      <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
        <div
          className={`flex-grow basis-[60%] overflow-hidden space-y-6 pr-20 ts:basis-full ts:pr-0 border-r ts:border-r-0   md:basis-full md:pr-0 md:border-r-0`}
        >
          <ImageGallery projects_images={imagesList} />
          <h2 className="font-bold text-3xl tracking-wider">INVISIBLE GRILL</h2>
          <div className="text-gray-600">
            Grillex specializes in high-quality invisible grilles, enhancing
            urban living in Kolkata with safety and style. Our invisible balcony
            grilles are popular for giving small urban spaces a spacious look.
            Made from high-tension steel, our grilles ensure convenience and
            security. <br />
            <br /> We offer grilles for balconies, windows, etc all known for
            their modern, aesthetic appeal. Our customizable products meet the
            growing demand for invisible window grilles, making Grillex a
            trusted name in urban communities.
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Specifications of Our Invisible Grill
            </h2>
            1. Material: -Wired Material: High-grade stainless steel (316 Grade)
            -Channel Material: Aluminium Powder Coated <br /> 2. Wire Thickness:
            2 to 3 mm for enhanced durability <br />
            3. Corrosion Resistance: Weatherproof and rust-resistant <br />
            4. Custom Sizing: Available for all window types 5. Maintenance:
            Easy to clean and maintain <br />
            6. Uses: Balcony, Windows, Staircase and Railing
            <h2 className="uppercase mt-10 font-semibold text-xl">
              Utility of Invisible grill in urban setups
            </h2>
            <p className="pt-2">
              High-quality invisible grilles provide better safety as these
              materials can easily hold up to heavy weights due to their build
              quality. Manufacturing high-tension cables for particularly
              measured areas requires expertise in the aspects of production
              management that we maintain. For extensive quality for the
              invisible grill in Kolkata, we choose reliable quality production
              methods that our expert manufacturers guide. Through high-quality
              cable extensions, invisible grill windows along with balconies and
              railings have been developed here, as it helps you to have,
              -Spacious and more open areas in small or medium flats. -Extensive
              safety features with higher aesthetic value. -Less maintenance
              costs due to metal binding and PVC coating. -No issues of rust or
              decadence, and no impact of weather changes. -Long-lasting
              services with high-quality security for open spaces in urban
              setups.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Invisible grilles offer several benefits:
            </h2>
            1. Safety: Provides a secure barrier without compromising the view,
            making them ideal for homes with children and pets. <br /> 2.
            Aesthetics: Enhances the look of the property by offering a sleek,
            modern, and unobtrusive appearance. <br /> 3. Unobstructed Views:
            Maintains clear views of the surroundings, allowing more natural
            light and a sense of openness. <br /> 4. Ventilation: This allows
            for better airflow compared to traditional grilles, promoting a more
            comfortable indoor environment. <br /> 5. Durability: Made from
            high-tension materials like steel, invisible grilles are strong and
            long-lasting. <br /> 6. Low Maintenance: Requires minimal upkeep, as
            they are resistant to rust and corrosion. <br /> 7. Versatility:
            Suitable for various applications, including balconies, windows, and
            partitions, making them adaptable to different architectural styles.{" "}
            <br /> 8. Child-Friendly: Provides a safe environment without the
            risk of children climbing on them.
            <h3 className="uppercase mt-10 font-semibold text-xl mb-1">
              Check Out Other Websites
            </h3>
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
            <div className="w-full mt-10">
              <CollapseMenu
                elementheadingcolor="text-[#2C343B]"
                elementbg="bg-[#F5F5F5]"
                spacebetween="space-y-3"
                collapsemenudata={faqs}
              />
            </div>
          </div>
        </div>
        <RightSideContent projectname={"invisible-grill"} />
      </section>
    </>
  );
}
