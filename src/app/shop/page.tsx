import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Head from "next/head";

export default function Shop() {
  return (
    <>
    <Head>
        <title>The Wisconsin Bucket List Book</title>
        <meta name="description" content="Shop" />
        <meta
          name="keywords"
          content="The Wisconsin Bucket List Book, Kelly Jo Stull, Wisconsin, Bucket List, Kelly Stull"
        />
      </Head>
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-40 md:pt-40">
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-12 ml-6 md:ml-20 text-left md:py-10">
            Shop
          </h1>

          {/* Facebook Link */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-6 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg flex items-center transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
            >
            <Image
              src="/Fireside.png"
              alt="Facebook"
              className="w-30 h-10 md:w-28 md:h-16 mr-4" // Mobile and desktop sizes
              width={64}
              height={64}
              />
            <a
              href="https://www.firesidetheatre.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg font-semibold text-black text-left"
              >
              Available at the Fireside Theatre Gift Shop
            </a>
          </div>

          {/* X Link */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-6 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg flex items-center transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
            >
            <Image
              src="/cave.png"
              alt="X"
              className="w-50 h-10 md:w-30 md:h-16 mr-4" // Mobile and desktop sizes
              width={64}
              height={64}
              />
            <a
              href="https://www.caveofthemounds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg font-semibold text-black text-left"
              >
              Find it at the Cave of the Mounds Gift Shop
            </a>
          </div>
          {/* Amazon Link */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-6 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg flex items-center transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
            >
            <Image
              src="/amazon.png"
              alt="Amazon"
              className="w-10 h-10 md:w-16 md:h-16 mr-4" // Mobile and desktop sizes
              width={64}
              height={64}
              />
            <a
              href="https://www.amazon.com/Wisconsin-Bucket-List-Ways-Experience/dp/1628470283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg font-semibold text-black text-left"
              >
              Purchase on Amazon
            </a>
          </div>

          {/* <div className="text-center mt-2 py-20 md:py-24 sm:py-14 flex justify-center">
            <a
            href="https://www.amazon.com/Wisconsin-Bucket-List-Ways-Experience/dp/1628470283"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
            src="/bucket.png"
            alt="Amazon"
            className="w-20 h-20 md:w-36 md:h-36" // Mobile and desktop sizes
            />
            </a>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
          </>
  );
}
