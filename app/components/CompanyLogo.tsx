import Image from "next/image";

function CompanyLogos() {
  return (
    <>
      <div className="fixed top-1/3 right-0 z-20 min-w-[200px] space-y-2">
        <a
          href="https://www.ashianainteriors.com/"
          className="flex items-center transform translate-x-[11rem] hover:translate-x-0 transition-all duration-700 ease-in-out text-white bg-[#eb1418] rounded-l-full px-3 py-2 uppercase text-lg font-semibold font-sans"
        >
          <i className="fab fa-instagram bg-white rounded-full h-14 w-14 flex items-center justify-center mr-4">
            <Image
              className="size-full object-cover rounded-full"
              src="/company-logo/Ashina.png"
              alt="Ashiana Logo"
              height={1280}
              width={1280}
            />
          </i>
          Ashiana
        </a>

        <a
          href="https://www.promiplastwindows.com/"
          className="flex items-center transform translate-x-[11rem] hover:translate-x-0 transition-all duration-700 ease-in-out text-white bg-[#05ad00] rounded-l-full px-3 py-2 uppercase text-lg font-semibold font-sans"
        >
          <i className="fab fa-facebook-f text-[#2C80D3] bg-white rounded-full h-14 w-14 flex items-center justify-center mr-4">
            {" "}
            {/* <FaFacebook /> */}
            <Image
              className="size-full object-cover rounded-full"
              src="/company-logo/Promiplast.png"
              alt="Promiplast Logo"
              height={1280}
              width={1280}
            />
          </i>
          Promiplast
        </a>
        <a
          href="https://www.premiumbathware.com/"
          className="flex items-center transform translate-x-[11rem] hover:translate-x-0 transition-all duration-700 ease-in-out text-white bg-[#575454] rounded-l-full px-3 py-2 uppercase text-lg font-semibold font-sans"
        >
          <i className="fab fa-youtube text-green-400 bg-white rounded-full h-14 w-14 flex items-center justify-center mr-4">
            <Image
              className="size-full object-cover rounded-full"
              src="/company-logo/PremiumBathware.png"
              alt="Premium Bathware Logo"
              height={1280}
              width={1280}
            />
          </i>
          Premium Bathware
        </a>
      </div>
    </>
  );
}

export default CompanyLogos;
