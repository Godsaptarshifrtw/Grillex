import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import RightSideContent from "../components/RightSideContent";
import { Metadata } from "next";

const imagesList = [
  "/projects/met-furni1.webp",
  "/projects/met-furni2.webp",
  "/projects/met-furni3.webp",
  "/projects/met-furni4.webp",
  "/projects/met-furni5.webp",
];

export const metadata: Metadata = {
  title:
    "Metal Furniture Manufacturer in Kolkata | Grillex",
  description:
    "Buy exquisite metal furniture in Kolkata by Grillex. Elevate your space with our unique and stylish metal furniture designs. Contact Us now!!",
  alternates: {
    canonical: "/metal-furniture",
  },
};

export default function page() {
  return (
    <>
      <PageBanner title={"METAL FURNITURE MANUFACTURER IN KOLKATA"} />
      <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
        <div
          className={`flex-grow basis-[60%] overflow-hidden space-y-6 pr-20 ts:basis-full ts:pr-0 border-r ts:border-r-0   md:basis-full md:pr-0 md:border-r-0`}
        >
          <ImageGallery projects_images={imagesList} />
          <h2 className="font-bold text-3xl tracking-wider">METAL FURNITURE</h2>
          <div className="text-gray-600">
            The furniture we create has variations, making our designs and
            styles more aesthetic. In the urban society, we, Grillex, are one of
            the best metal furniture manufacturers in Kolkata. Our services for
            manufacturing with the best infrastructure have made our products
            the most desired in the market. We tend to take your choices and
            build quality products with our materials which are affordable and
            stylish all at once.
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              Specifications of Our Metal Furniture
            </h2>
            Materials: Combination of PVD-coated stainless steel and others{" "}
            <br />
            Design: Sleek and minimalistic, ideal for modern interiors <br />
            Versatility: Wide range of furniture for living, dining, and bedroom{" "}
            <br />
            Finishes: Brushed, Gold Rose Gold and Chrome color options <br />
            Customization: Tailored options available to match your decor <br />
            Durability: Sturdy construction for long-lasting use <br />
            Space-saving: Compact designs for urban living <br />
            Assembly: Easy-to-follow instructions for quick setup
            <h2 className="uppercase mt-10 font-semibold text-xl">
              BENEFITS OF METAL FURNITURE
            </h2>
            <p className="pt-2">
              Metal furniture offers numerous benefits that make it a popular
              choice for both residential and commercial settings. Here are some
              key advantages: <br /> 1. Durability and Strength: - <br /> Metal
              furniture is highly durable and can withstand heavy use and wear
              over time. It is less likely to warp, crack, or break compared to
              wooden furniture. - It is resistant to pests such as termites,
              which can damage wooden furniture. <br /> 2. Low Maintenance: -{" "}
              <br /> Metal furniture requires minimal maintenance. It is easy to
              clean with just a damp cloth and doesn&apos;t require special
              treatments or polishes. - It is less susceptible to stains,
              spills, and other forms of damage that can affect other materials.{" "}
              <br /> 3. Weather Resistance: - <br /> Metal furniture, especially
              when coated with protective finishes, can resist weather
              conditions, making it ideal for outdoor use. - Materials like
              aluminum and stainless steel are resistant to rust and corrosion,
              ensuring longevity even in harsh environments. <br /> 4.
              Versatility in Design: - <br /> Metal can be molded into a variety
              of shapes and designs, offering a wide range of styles from
              contemporary to classic. - It can be combined with other materials
              such as wood, glass, or upholstery to create unique and stylish
              pieces. <br /> 5. Strength-to-Weight Ratio: - <br /> Metal
              furniture can be both strong and lightweight, particularly with
              materials like aluminum. This makes it easier to move and
              rearrange. - Even heavier metals like wrought iron provide robust
              support while maintaining aesthetic appeal. <br /> 6.
              Eco-Friendly: - <br /> Metal furniture is often made from
              recyclable materials. Old metal furniture can be recycled and
              repurposed, reducing waste and environmental impact. - The
              production process for metal furniture can be more sustainable
              than that of other materials. <br /> 7. Fire Resistance: - <br />{" "}
              Metal is non-combustible, providing an added layer of safety in
              environments where fire risk is a concern. - This makes it a
              preferred choice for certain commercial and industrial
              applications. <br /> 8. Cost-Effectiveness: - <br /> While the
              initial cost of metal furniture can vary, its durability and low
              maintenance requirements often make it more cost-effective in the
              long run. - It doesn’t require frequent replacements, saving money
              over time. <br />
              9. Aesthetic Appeal: - <br /> Metal furniture can add a sleek,
              modern look to any space. Its clean lines and smooth finishes
              complement a variety of interior design styles. - It can also be
              painted or coated in various colors to match different decor
              themes. <br /> 10. Hygienic Properties: - <br /> Metal surfaces
              are less likely to harbor bacteria and germs compared to porous
              materials. This makes metal furniture a hygienic option for
              healthcare facilities and kitchens.
            </p>
            <h2 className="uppercase mt-10 font-semibold text-xl mb-2">
              METAL FURNITURE VS WOODEN FURNITURE
            </h2>
            When deciding between metal and wooden furniture, several factors
            come into play, including durability, maintenance, aesthetics, and
            cost. Here’s a detailed comparison of metal versus wooden furniture:
            <h3>Durability and Strength</h3>
            <h4>Metal Furniture: </h4>- Highly durable and can withstand heavy
            use without warping, cracking, or breaking. - Resistant to pests
            such as termites and does not degrade due to moisture or humidity. -
            Typically has a longer lifespan due to its resistance to wear and
            tear.
            <h4>Wooden Furniture:</h4>- Also durable, especially hardwoods like
            oak, maple, and teak, but can be susceptible to damage from impacts,
            scratches, and environmental factors. - Can be affected by pests
            like termites and may warp or crack due to changes in humidity and
            temperature. - Generally long-lasting if properly maintained, but
            may require more frequent upkeep.
            <h3>Maintenance </h3>
            <h4>Metal Furniture:</h4>- Requires minimal maintenance; easy to
            clean with a damp cloth. - Resistant to stains and spills, and often
            needs no special treatments. - Outdoor metal furniture, if properly
            coated, can resist rust and corrosion.
            <h4>Wooden Furniture:</h4>- Requires regular maintenance, including
            dusting, polishing, and sometimes refinishing to keep it looking its
            best. - More susceptible to stains, scratches, and water damage. -
            Needs to be protected from extreme temperatures and humidity to
            prevent warping and cracking.
            <h3>Aesthetics and Design</h3>
            <h4>Metal Furniture:</h4>- Offers a sleek, modern look with clean
            lines and a variety of finishes. - Can be molded into various shapes
            and designs, providing a wide range of styles. - Often combined with
            other materials (e.g., wood, glass) for unique aesthetic appeal.
            <h4>Wooden Furniture:</h4>- Provides a warm, classic, and timeless
            look that can enhance the coziness of a space. - Available in
            various wood types, each with its unique grain patterns and colors.
            - Can be crafted into intricate designs and carvings, offering a
            wide range of traditional to modern styles.
            <h3>Cost</h3>
            <h4>Metal Furniture:</h4>- Initial cost can vary, but generally
            offers good value for money due to its durability and low
            maintenance. - Typically more cost-effective in the long run as it
            does not require frequent replacement.
            <h4>Wooden Furniture:</h4>- Can range from affordable to very
            expensive, depending on the type of wood and craftsmanship. - May
            incur additional costs over time for maintenance and potential
            repairs.
            <h3>Weight and Portability</h3>
            <h4>Metal Furniture:</h4>- Can be both lightweight (e.g., aluminum)
            and heavy (e.g., wrought iron), depending on the type of metal. -
            Lightweight metal furniture is easier to move and rearrange.
            <h4>Wooden Furniture:</h4>- Generally heavier than metal furniture,
            especially solid wood pieces. - Can be difficult to move but
            provides a solid, stable feel.
            <h3>Environmental Impact</h3>
            <h4>Metal Furniture:</h4>- Often made from recyclable materials,
            making it a more eco-friendly option. - The production process can
            be sustainable, especially if recycled metal is used.
            <h4>Wooden Furniture:</h4>- Wood is a renewable resource, and
            sustainably sourced wood is environmentally friendly. - However,
            deforestation and the use of non-sustainable wood sources can have
            negative environmental impacts.
            <h3>Fire Resistance</h3>
            <h4>Metal Furniture:</h4>- Non-combustible and provides an added
            layer of safety in environments where fire risk is a concern.
            <h4>Wooden Furniture: </h4>- Combustible and can pose a fire hazard,
            although treated wood can be made more fire-resistant.
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
          {/* <div className="w-[30rem]">
            <CollapseMenu
              elementheadingcolor="text-[#2C343B]"
              elementbg="bg-[#F5F5F5]"
              spacebetween="space-y-3"
              collapsemenudata={collapse_menu_data}
            />
          </div> */}
        </div>
        <RightSideContent projectname={"metal-furniture"} />
      </section>
    </>
  );
}
