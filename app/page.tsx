import SectionLayout from "./components/SectionLayout";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/Homepage/WhyChooseUs";
import OurProjects from "./components/Homepage/OurProjects";
import PreviousProjects from "./components/Homepage/PreviousProjects";
import AboutUs from "./components/Homepage/AboutUs";
import Testimonials from "./components/Homepage/Testimonials";
import SocialLinks from "./components/SocialLinks";
import DropDown from "./components/Homepage/DropDown";
import Heading from "./components/Homepage/Heading";
import P from "./components/Homepage/P";

export default function Home() {
  return (
    <main className="w-full">
      <SectionLayout style={{ padding: "0px" }} className="h-[90vh] pt-10">
        <div className="h-full ts:h-[75vh] bg-[#ebe1be73] relative pt-3">
          <div className="container-layout">
            <SocialLinks className="h-full w-60 absolute mt-10 flex gap-3 pl-10 ts:w-full ts:pl-0 ts:mt-20 flex-col ts:flex-row     md:w-full md:pl-0 md:mt-0 md:flex-row justify-center top-0 left-0 bottom-0" />
            <Banner />
          </div>
        </div>
      </SectionLayout>
      {/* <OurServices /> */}
      <OurProjects />
      <WhyChooseUs />
      <AboutUs />
      <PreviousProjects />
      <Testimonials />
      <DropDown>
        <div className="py-10 space-y-10">
          <div className="space-y-1">
            <Heading>Top Quality Metal Products: Grillex in Kolkata</Heading>
            <P>
              In the bustling streets of Kolkata, amidst the rich tapestry of
              culture and commerce, stands a beacon of quality and innovation in
              metal products—Grillex. Renowned for its exquisite range of grills
              and allied metalware, Grillex has carved a niche in the city’s
              market concerning metal products.
            </P>
          </div>

          <div className="space-y-1">
            <Heading>1. Invisible Metal Grill Products</Heading>
            <P>
              Elevate the safety and aesthetics of your windows and balconies
              with Grillex’s invisible grilles. Designed to blend seamlessly
              with any architecture, our invisible grilles provide unobstructed
              views while ensuring the safety of your loved ones.
            </P>
          </div>

          <div className="space-y-1">
            <Heading>2. Metal Furniture Products</Heading>
            <P>
              Discover a world of elegance and comfort with Grillex’s range of
              metal furniture. Crafted with precision and designed to
              perfection, our furniture pieces adorn spaces and elevate them,
              blending functionality with aesthetics seamlessly.
            </P>
          </div>

          <div className="space-y-1">
            <Heading>3. Metal Railing Products</Heading>
            <P>
              Enhance the safety and beauty of your spaces with Grillex’s
              meticulously crafted metal railings. Whether it’s for residential
              or commercial settings, our railings exude sophistication while
              providing the necessary security and support.
            </P>
          </div>

          <div className="space-y-1">
            <Heading>4. Metal Partitions Products</Heading>
            <P>
              Transform interiors with Grillex’s versatile metal partitions.
              Offering privacy without compromising on openness, our partitions
              add a touch of modernity to any space, be it offices, homes, or
              commercial establishments.
            </P>
          </div>

          <div className="space-y-1">
            <Heading>5. PVD Coated Metal Grilles</Heading>
            <P>
              Experience the pinnacle of durability and style with Grillex’s
              PVD-coated grills. Engineered to withstand the harshest
              environments while retaining their luster, our PVD-coated grills
              redefine longevity and aesthetics in metalware.
            </P>
          </div>

          <div className="space-y-1">
            <Heading>6. Metal Pergolas</Heading>
            <P>
              Create captivating outdoor spaces with Grillex’s exquisite
              European motorized pergolas. Crafted with precision and designed
              to withstand the elements, our pergolas provide the perfect blend
              of shade and style, transforming any outdoor area into a sanctuary
              of relaxation.
            </P>
          </div>

          <div className="space-y-1">
            <Heading>7. Metal Awnings & Screens</Heading>
            <P>
              Shield your spaces from the elements with Grillex’s durable
              awnings and screens. Whether it’s sun, rain, or wind, our awnings
              and screens offer protection without compromising on style,
              enhancing the functionality of any outdoor area.
            </P>
          </div>

          <div className="space-y-1">
            <Heading>Conclusion</Heading>
            <P>
              In a city that thrives on diversity, Grillex offers metal products
              that cater to every budget. Ensuring that quality remains
              accessible to all, Grillex strikes the perfect balance between
              affordability and excellence. As Kolkata continues to evolve,
              Grillex stands as a beacon of reliability, offering metal products
              that enrich lives and spaces alike. Experience the difference with
              Grillex—the epitome of quality in Kolkata’s metalware landscape.
            </P>
          </div>
        </div>
      </DropDown>
    </main>
  );
}
