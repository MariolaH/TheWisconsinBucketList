import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-40 md:pt-40">
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-12 ml-6 md:ml-20 text-left md:py-10">
            Contact
          </h1>

          {/* Facebook Link */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-6 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg flex items-center transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src="/facebook.png"
              alt="Facebook"
              className="w-30 h-10 md:w-16 md:h-16 mr-4" // Mobile and desktop sizes
              width={40}
              height={44}
            />
            <a
              href="https://www.facebook.com/TheWisconsinBucketList?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg font-semibold text-black text-left"
            >
              Join the Conversation on Facebook
            </a>
          </div>

          {/* X Link */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-6 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg flex items-center transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src="/X.png"
              alt="X"
              className="w-50 h-10 md:w-30 md:h-16 mr-4" // Mobile and desktop sizes
              width={40} 
              height={44}
            />
            <a
              href="https://x.com/wibucketlist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg font-semibold text-black text-left"
            >
              See What’s Buzzing on X 
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
              Shop on Amazon
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
