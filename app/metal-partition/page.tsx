import React from "react";
import Link from "next/link";
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

const array2 = [
  {
    heading: "Office Spaces",
    description:
      "Metal partitions are often used in office environments to create cubicles, separate workspaces, and meeting rooms. They provide a modern and clean look while being sturdy and long-lasting.",
  },
  {
    heading: "Industrial Settings",
    description:
      "In factories and warehouses, metal partitions are used to create secure storage areas, separate different production zones, and protect machinery and equipment.",
  },
  {
    heading: "Retail Spaces",
    description:
      "Retail stores use metal partitions for dressing rooms, to create display areas, and to organize back-of-house storage spaces.",
  },
  {
    heading: "Public Facilities",
    description:
      "Public restrooms frequently use metal partitions for their stalls due to their resistance to vandalism, ease of cleaning, and durability.",
  },
  {
    heading: "Security Applications",
    description:
      "Metal partitions are utilized in high-security areas such as banks, data centers, and government buildings to provide strong barriers that can withstand forced entry attempts.",
  },
  {
    heading: "Healthcare Facilities",
    description:
      "In hospitals and clinics, metal partitions are used to create separate treatment areas, ensure patient privacy, and maintain hygienic conditions.",
  },
  {
    heading: "Educational Institutions",
    description:
      "Schools and universities use metal partitions to divide large spaces into classrooms, laboratories, and offices.",
  },
  {
    heading: "Transportation Hubs",
    description:
      "Airports, train stations, and bus terminals use metal partitions for crowd control, to guide passengers, and to create secure zones.",
  },
  {
    heading: "Residential Applications",
    description:
      "In homes, metal partitions can be used as room dividers, in outdoor spaces to create privacy screens, and in garages or basements to create organized storage areas.",
  },
  {
    heading: "Exhibition and Trade Shows",
    description:
      "Metal partitions are commonly used to create booths, separate exhibit areas, and provide backdrops for displays at trade shows and exhibitions.",
  },
];

const array3 = [
  {
    heading: "Durability",
    description:
      "Metal partitions are resistant to damage and wear, making them suitable for high-traffic areas.",
  },
  {
    heading: "Security",
    description:
      "They provide a higher level of security compared to other materials.",
  },
  {
    heading: "Fire Resistance",
    description: "Metal is non-combustible, adding a layer of fire protection.",
  },
  {
    heading: "Ease of Maintenance",
    description:
      "Metal partitions are easy to clean and maintain, which is especially important in public and industrial settings.",
  },
  {
    heading: "Aesthetic Appeal",
    description:
      "Available in various finishes and designs, metal partitions can enhance the look of a space.",
  },
  {
    heading: "Steel",
    description:
      "Known for its strength and durability, often used in high-security and industrial applications.",
  },
  {
    heading: "Aluminum",
    description:
      "Lightweight and corrosion-resistant, suitable for office and retail environments.",
  },
  {
    heading: "Stainless Steel",
    description:
      "Combines strength with corrosion resistance, ideal for healthcare and food processing facilities.",
  },
];

const imagesList = [
  "/projects/met-part1.webp",
  "/projects/met-part2.webp",
  "/projects/met-part3.webp",
  "/projects/met-part4.webp",
  "/projects/met-part5.webp",
];

export const metadata: Metadata = {
  title:
    "Leading Metal Partition Manufacturer in Kolkata | Grillex",
  description:
    "Grillex is a leading Kolkata-based metal partition manufacturer. Enquire to elevate your space today with our premium products.",
  alternates: {
    canonical: "/metal-partition",
  },
};

export default function page() {
  return (
    <>
      <PageBanner title={"METAL PARTITION MANUFACTURER IN KOLKATA"} />
      <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
        <div
          className={`flex-grow basis-[60%] overflow-hidden space-y-6 pr-20 ts:basis-full ts:pr-0 border-r ts:border-r-0   md:basis-full md:pr-0 md:border-r-0`}
        >
          <ImageGallery projects_images={imagesList} />
          <h2 className="font-bold text-3xl tracking-wider">METAL PARTITION</h2>
          <div className="text-gray-600">
            The attributes of metal partitions in the decoration of your house
            interiors give it a sleek look while increasing the safety features.
            Making metal partitions a seamless statement of style brings a
            unique look to the whole interiors of the rooms. Protection for the
            houses becomes more reliable with metal grill partitions since it is
            built to hold a higher level of weight. As our production attributes
            have made us the best metal partition manufacturers in Kolkata, it
            has helped us to develop a more susceptible infrastructure for your
            modern life requirements.
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              SPECIFICATIONS OF OUR METAL RAILINGS
            </h2>
            <ListWithHeading list={array1} />
            <h2 className="uppercase mt-10 font-semibold text-xl">
              UTILIZATION OF METAL PARTITIONS
            </h2>
            <p className="py-2">
              Metal partitions are used in a variety of applications due to
              their strength, durability, and versatility. Here are some common
              utilizations of metal partitions:
            </p>
            <ListWithHeading list={array2} />
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Benefits of Metal Partitions
            </h2>
            <ListWithHeading list={array3} />
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
        <RightSideContent projectname={"metal-partition"} />
      </section>
    </>
  );
}
