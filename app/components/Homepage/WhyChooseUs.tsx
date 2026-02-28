import React from "react";


const collapse_menu_data = [
  {
    title: "Extensive experience",
    description:
      "Since 1959, we have been supplying the world with high-quality steel products. Today, we also provide various services that meet our customers’ expectations.",
  },
  {
    title: "Quality from start to finish",
    description:
      "We are dedicated to providing absolute quality to all our customers, from individual to corporate ones. No matter what you use our structural steel solutions for, you won’t regret.",
  },
  {
    title: "Employees are continually trained on safety",
    description:
      "Our huge, experienced, and friendly team is constantly trained to match the industry safety standards. Every one of us makes sure to strictly follow the safety measures.",
  },
  {
    title: "We use technology to do the job more efficiently",
    description:
      "Our work depends on the innovative technology we use during the production cycle. It is the key to customer satisfaction with the high quality of our products.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#fff] h-auto min-h-[420px] ts:min-h-[550px] max-h-full flex gap-8 px-0 my-20">
      <div className="h-full flex-grow basis-[50%] py-10 pt-20 px-20 space-y-5 ts:px-5 ts:basis-[100%]">
        <div>
          <h2 className="text-[#6F6F6F] font-reg font-bold tracking-widest text-lg">
            GRILLEX
          </h2>
          <div className="w-24 h-[1px] bg-[#6F6F6F] mt-1"></div>
        </div>
        <h1 className="font-reg font-bold tracking-widest text-3xl text-black">
          METAL PRODUCTS MANUFACTURER IN KOLKATA
        </h1>

        <p className="text-gray-400 font-semibold tracking-[0.1em] text-sm">
          Welcome to Grillex Kolkata: your go-to for the best metal products.
          Our wide collections include invisible grills, metal partitions, metal
          railings, metal furniture, PVD-coated grills, and pergolas. We
          revolutionize contemporary interior design with a wide range of
          Invisible Grilles, backed by thorough market research and professional
          manufacturing. Elevate your space with our durable, versatile aluminum
          and galvanized steel products, offering soundproofing and fire
          resistance. Experience customer-centric service excellence and join
          Kolkata’s preferred choice for metal products.
        </p>

        <div className="flex-center">
          <button className="bg-[#444444] px-6 tracking-widest hover:bg-[#5f5f5f] transition-all duration-300 py-4 text-gray-200 rounded-lg shadow-lg text-sm">
            LEARN MORE ABOUT US
          </button>
        </div>

        {/* <CollapseMenu collapsemenudata={collapse_menu_data} /> */}
      </div>
      <div className="basis-[50%] ts:hidden md:hidden flex-grow why-choose-us-bg-img min-h-[full] transition-all duration-1000 ease-linear">
        {/* <div className="w-full bg-black why-choose-us-bg-img h-full overflow-hidden object-cover  flex items-center justify-end"></div> */}
      </div>
    </section>
  );
}
