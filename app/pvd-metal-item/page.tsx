import React from "react";
import PageBanner from "../components/PageBanner";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import RightSideContent from "../components/RightSideContent";
import ListOption from "../blog/ListOption";
import { Metadata } from "next";

const imagesList = ["/projects/pvt-coted-grills-g1.jpg"];

export const metadata: Metadata = {
  title: "Premium PVD Metal Items | Grillex Metal Solutions",
  description:
    "Explore Grillex PVD Metal Partition, PVD Metal Furniture, and PVD Metal Grills crafted with precision for modern, durable, and stylish spaces.",
};

export default function page() {
  return (
    <>
      <PageBanner title={"PVD Metal Partition"} />

      <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
        <div
          className={`flex-grow basis-[60%] overflow-hidden space-y-6 pr-20 ts:basis-full ts:pr-0 border-r ts:border-r-0   md:basis-full md:pr-0 md:border-r-0`}
        >
          <ImageGallery projects_images={imagesList} />

          <h2 className="font-bold text-3xl tracking-wider">
            PVD Metal Partition
          </h2>
          <div className="text-gray-600">
            <strong>PVD Metal Partition</strong> is one of the most premium
            solutions in modern interior and architectural design. Built with{" "}
            <strong>PVD-coated stainless steel</strong>, these partitions are
            not only highly durable but also deliver a rich, luxurious finish
            that enhances the elegance of any space. The advanced PVD coating
            process ensures long-lasting shine, scratch resistance, and
            protection against corrosion, making it a perfect choice for both
            residential and commercial applications.
            <br />
            <br />
            Whether used as stylish room dividers, office partitions, or
            decorative elements in homes, <strong>
              PVD Metal Partitions
            </strong>{" "}
            provide a perfect blend of strength and beauty. They are available
            in multiple finish options such as gold, rose gold, and chrome,
            giving you the freedom to customize your interiors with a modern
            touch.
            <br />
            <br />
            Choosing <strong>PVD Metal Partition</strong> means investing in
            durability, easy maintenance, and aesthetic appeal. It is a reliable
            option for contemporary homes, luxury offices, showrooms, and
            high-end commercial spaces that require both functionality and
            design excellence.
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Specifications of Our Invisible Grill
            </h2>
            <ListOption
              list={[
                {
                  heading: "Superior Durability And Strength",
                  description:
                    "A PVD Metal Partition is crafted with PVD-coated stainless steel, offering scratch resistance, corrosion protection, and long-lasting performance.",
                },
                {
                  heading: "Luxurious Aesthetic Appeal",
                  description:
                    "With premium finishes like gold, rose gold, and chrome, a PVD Metal Partition enhances the elegance of modern interiors and adds a premium touch.",
                },
                {
                  heading: "Low Maintenance And Easy to Clean",
                  description:
                    "The smooth surface of a PVD Metal Partition makes it resistant to stains and dirt, ensuring easy cleaning and a polished look for years.",
                },
                {
                  heading: "Versatile Applications",
                  description:
                    "Whether used as room dividers, office separators, or decorative elements, a PVD Metal Partition fits perfectly in homes, hotels, showrooms, and luxury offices. ",
                },
              ]}
            />
            <br />
            <br />
            <ImageGallery
              projects_images={["/projects/PVD-metal-furniture-g1.jpg"]}
            />
            <br />
            <h2 className="font-bold text-3xl tracking-wider">
              PVD Metal Furniture
            </h2>
            <br />
            <div>
              <strong>PVD Metal Furniture</strong> is redefining modern
              interiors with its premium finish, exceptional durability, and
              elegant designs. Crafted with advanced{" "}
              <strong>PVD-coated stainless steel</strong>, this type of
              furniture not only resists corrosion and scratches but also
              retains its shine for years, making it a long-lasting investment.
              <br />
              <br />
              From living room tables and dining sets to bedroom and office
              furniture, <strong>PVD Metal Furniture</strong> adds a touch of
              luxury to every space. With finish options such as gold, rose
              gold, brushed, and chrome, it blends perfectly with both
              contemporary and classic interiors.
              <br />
              <br />
              The biggest advantage of <strong>PVD Metal Furniture</strong> is
              its ability to combine strength with style. It is low-maintenance,
              eco-friendly, and suitable for both residential and commercial
              use, offering a sleek aesthetic while ensuring sturdiness. For
              homeowners and businesses seeking modern yet practical solutions,{" "}
              <strong>PVD Metal Furniture</strong> stands out as the ideal
              choice.
            </div>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Benefits of PVD Metal Furniture
            </h2>
            <ListOption
              list={[
                {
                  heading: "Long-Lasting Durability – PVD Metal Furniture",
                  description:
                    "is resistant to corrosion, scratches, and daily wear, ensuring a premium look that lasts for years.",
                },
                {
                  heading: "Luxurious Aesthetic Appeal",
                  description:
                    "With finishes like gold, rose gold, brushed, and chrome, PVD Metal Furniture elevates interiors with a modern, elegant touch.",
                },
                {
                  heading: "Low Maintenance & Eco-Friendly",
                  description:
                    "Unlike traditional options, PVD Metal Furniture is easy to clean, requires minimal upkeep, and supports sustainable design.",
                },
                {
                  heading: "Versatility in Design",
                  description:
                    "From dining sets and living room tables to office furniture, PVD Metal Furniture blends seamlessly into both residential and commercial spaces.",
                },
              ]}
            />
            <br />
            <br />
            <ImageGallery
              projects_images={["/projects/PVdinvisiblegrill-g1.avif"]}
            />
            <br />
            <h2 className="font-bold text-3xl tracking-wider">
              PVD Metal Grill
            </h2>
            <br />
            <div>
              <strong>PVD Metal Grills</strong> combine strength, safety, and
              modern elegance, making them a premium choice for contemporary
              homes and urban spaces. Manufactured with{" "}
              <strong>PVD-coated stainless steel</strong>, these grills offer
              enhanced resistance to rust, scratches, and weather conditions,
              ensuring long-lasting durability.
              <br />
              <br />
              With finish options such as gold, rose gold, brushed, and chrome,{" "}
              <strong>PVD Metal Grills</strong> add a luxurious touch while
              maintaining robust safety standards. They are suitable for
              balconies, windows, staircases, and partitions, blending
              seamlessly with both residential and commercial interiors.
              <br />
              <br />
              The biggest advantage of <strong>PVD Metal Grills</strong> is
              their ability to deliver uncompromised security without
              sacrificing style. Easy to maintain and eco-friendly, they are the
              perfect solution for homeowners who want a balance of safety,
              durability, and aesthetic appeal.
            </div>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Benefits of PVD Metal Grill
            </h2>
            <ListOption
              list={[
                {
                  heading: "Superior Strength & Durability",
                  description:
                    "A PVD Metal Grill is built with stainless steel and PVD coating, making it resistant to rust, corrosion, and daily wear.",
                },
                {
                  heading: "Premium Finish & Aesthetic Appeal",
                  description:
                    "Available in gold, rose gold, and chrome finishes, a PVD Metal Grill adds a touch of luxury and elegance to balconies, windows, and interiors.",
                },
                {
                  heading: "Low Maintenance & Easy Cleaning",
                  description:
                    " The smooth, coated surface of a PVD Metal Grill ensures hassle-free cleaning and long-lasting shine.",
                },
                {
                  heading: "Versatile Applications",
                  description:
                    "Whether for residential balconies, staircases, windows, or commercial spaces, a PVD Metal Grill offers both safety and style.",
                },
              ]}
            />
            <br />
            <br />
            <ImageGallery
              projects_images={["/projects/PVDCoatedGrills-g1.jpg"]}
            />
            <br />
            <h2 className="font-bold text-3xl tracking-wider">
              PVD Coated Grills
            </h2>
            <br />
            <div>
              <strong>PVD Coated Grills</strong> are an advanced and stylish
              solution for modern architectural and interior needs. Manufactured
              using{" "}
              <strong>
                Physical Vapor Deposition (PVD) coating technology
              </strong>
              , these grills provide exceptional durability, scratch resistance,
              and long-lasting shine. Unlike traditional grills,{" "}
              <strong>PVD Coated Grills</strong> retain their luxurious finish
              for years, even when exposed to changing weather conditions.
              <br />
              <br />
              Available in premium finishes like gold, rose gold, brushed, and
              chrome, these grills bring a touch of elegance to balconies,
              windows, staircases, and commercial spaces. Along with their
              stunning appearance, <strong>PVD Coated Grills</strong> offer
              robust protection, making them an ideal choice for homes and
              businesses that prioritize both safety and style.
              <br />
              <br />
              Easy to maintain, corrosion-resistant, and eco-friendly,{" "}
              <strong>PVD Coated Grills</strong> have become one of the most
              preferred choices in urban living. For those who want a
              combination of high security, durability, and contemporary design,{" "}
              <strong>PVD Coated Grills</strong> stand out as the perfect
              option.
            </div>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Benefits of PVD Coated Grills
            </h2>
            <ListOption
              list={[
                {
                  heading: "Exceptional Durability – PVD Coated Grills",
                  description:
                    "are resistant to rust, scratches, and harsh weather conditions, ensuring long-lasting performance.",
                },
                {
                  heading: "Luxury Finish",
                  description:
                    " With premium shades like gold, rose gold, and chrome, PVD Coated Grills enhance the elegance of balconies, windows, and railings.",
                },
                {
                  heading: "Low Maintenance",
                  description:
                    "The smooth surface of PVD Coated Grills makes them easy to clean, while their coating prevents fading and discoloration.",
                },
                {
                  heading: "Wide Applications – PVD Coated Grills",
                  description:
                    "are ideal for residential and commercial use, offering both safety and style in staircases, windows, and façades.",
                },
              ]}
            />
          </div>
        </div>

        <RightSideContent projectname={"pvd-metal-item"} />
      </section>
    </>
  );
}
