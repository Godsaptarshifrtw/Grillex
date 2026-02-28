import Link from "next/link";
import React from "react";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import PageBanner from "../components/PageBanner";
import ListWithHeading from "../components/ListWithHeading";
import RightSideContent from "../components/RightSideContent";
import { Metadata } from "next";

const array1 = [
  {
    heading: "Material",
    description:
      "Crafted from high-grade stainless steel, our Metal Railings ensure strength and longevity.",
  },
  {
    heading: "Transparency",
    description:
      "Enjoy an impressive 95% see-through visibility, allowing you to relish your surroundings without compromise.",
  },
  {
    heading: "Installation",
    description:
      "Our flush mount design ensures a sleek and seamless finish, blending with your architectural aesthetics effortlessly.",
  },
  {
    heading: "Custom Sizing",
    description:
      "Tailor-made for all window types, our Metal Railings offer a perfect fit, enhancing the safety and beauty of your space.",
  },
  {
    heading: "Maintenance",
    description:
      "Effortlessly maintain the elegance of your railings with easy cleaning and minimal upkeep.",
  },
];

const array2 = [
  {
    heading: "Residential Applications",
    description:
      "Staircases: Metal railings are often used for both indoor and outdoor staircases, providing safety and support while enhancing the home's aesthetic.\nBalconies and Decks: They offer safety for elevated areas while allowing for an unobstructed view.\nFences and Gates: Metal railings can be used as part of fences and gates, adding security and curb appeal to a property.\nPorches and Patios: They provide a boundary and safety feature for porches and patios.",
  },
  {
    heading: "Commercial Applications",
    description:
      "Office Buildings: Metal railings are used in lobbies, staircases, balconies, and rooftops for safety and design consistency.\nShopping Malls: They are used in atriums, around escalators, and on staircases to ensure shopper safety.\nPublic Spaces: Parks, playgrounds, and recreational areas often feature metal railings for safety and crowd control.",
  },
  {
    heading: "Industrial Applications",
    description:
      "Factories and Warehouses: Metal railings are essential for safeguarding walkways, mezzanines, and machinery platforms.\nLoading Docks: They provide safety barriers to prevent accidents.\nConstruction Sites: Temporary metal railings are used to protect workers and equipment.",
  },
  {
    heading: "Infrastructure",
    description:
      "Bridges and Overpasses: Metal railings provide safety for pedestrians and vehicles.\nPublic Transportation: Railings are used in train stations, bus stops, and along pedestrian pathways for guidance and safety.",
  },
  {
    heading: "Architectural and Aesthetic Applications",
    description:
      "Historic Buildings: Metal railings are often designed to match the historic aesthetics while providing modern safety standards.\nModern Architecture: They are used creatively in modern designs to enhance visual appeal while maintaining functionality.",
  },
];

const array3 = [
  {
    heading: "Wrought Iron",
    description:
      "Known for its decorative appeal and strength, often used in historic and traditional designs.",
  },
  {
    heading: "Stainless Steel",
    description:
      "Preferred for its resistance to corrosion and sleek appearance, commonly used in contemporary designs.",
  },
  {
    heading: "Aluminum",
    description:
      "Lightweight and corrosion-resistant, ideal for outdoor applications.",
  },
  {
    heading: "Steel",
    description:
      "Strong and durable, suitable for industrial and heavy-duty applications.",
  },
];

const array4 = [
  {
    heading: "Durability",
    description:
      "Metal railings are long-lasting and can withstand harsh weather conditions.",
  },
  {
    heading: "Strength",
    description: "They provide strong support and safety.",
  },
  {
    heading: "Low Maintenance",
    description: "Require minimal upkeep compared to wood or other materials.",
  },
  {
    heading: "Aesthetic Flexibility",
    description:
      "Available in various designs, from intricate and decorative to sleek and modern.",
  },
];
const array5 = [
  {
    heading: "Regular Cleaning",
    description: "To prevent buildup of dirt and grime.",
  },
  {
    heading: "Rust Prevention",
    description:
      "Applying rust-resistant coatings or paint to prevent corrosion.",
  },
  {
    heading: "Inspections",
    description:
      "Regular checks for any signs of damage or wear to ensure safety.",
  },
];

const imagesList = [
  "/projects/raillinh1.webp",
  "/projects/raillinh2.webp",
  "/projects/raillinh3.webp",
  "/projects/raillinh4.webp",
  "/projects/raillinh5.webp",
];

export const metadata: Metadata = {
  title:
    "Premium Metal Railing Manufacturer in Kolkata | Grillex",
  description:
    "Grillex is the best manufacturer of metal railings in Kolkata. Elevate your space with our high-quality designs. Get your free quote now!",
  alternates: {
    canonical: "/metal-railing",
  },
};

export default function page() {
  return (
    <>
      {" "}
      <PageBanner title={"METAL RAILING MANUFACTURER IN KOLKATA"} />
      <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
        <div
          className={`flex-grow basis-[60%] overflow-hidden space-y-6 pr-20 ts:basis-full ts:pr-0 border-r ts:border-r-0   md:basis-full md:pr-0 md:border-r-0`}
        >
          <ImageGallery projects_images={imagesList} />
          <h2 className="font-bold text-3xl tracking-wider">METAL RAILING</h2>
          <div className="text-gray-600">
            The usage of metal railings has become the modern trend, which has
            made our efforts to build extensive quality materials more
            susceptible for you. High-quality metal railing with aesthetic
            designs is available at our outlets of Grillex that provide you with
            your preferences. As we produce reliable materials for your home, we
            offer safety and security with proper precautions. Our
            infrastructure for metal binding is quite effective and guided by
            proper expertise. As the utility of metal railings is quite
            significant in urban homes, it gives your interior a modern touch
            while increasing the stability of the products.
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              SPECIFICATIONS OF OUR METAL RAILING
            </h2>
            <ListWithHeading list={array1} />
            <h2 className="uppercase mt-10 font-semibold text-xl">
              Utilization Of METAL RAILINGS
            </h2>
            <p className="pt-2">
              Metal railings are utilized in a variety of settings due to their
              durability, strength, and aesthetic appeal. They are commonly
              found in residential, commercial, and industrial environments,
              serving both functional and decorative purposes. Here are some key
              areas where metal railings are utilized:
            </p>
            <ListWithHeading list={array2} />
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Types of Metal Railings
            </h2>
            <ListWithHeading list={array3} />
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Advantages of Metal Railings
            </h2>
            <ListWithHeading list={array4} />
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Maintenance of Metal Railings
            </h2>
            <ListWithHeading list={array5} />
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
          </div>
        </div>
        <RightSideContent projectname={"metal-railing"} />
      </section>
    </>
  );
}
