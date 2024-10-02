import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Media() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-40 md:pt-40">
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-20 ml-6 md:ml-20 text-left md:py-10">
            Media
          </h1>

          {/* First YouTube Video Embed */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-20 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
          >
            <div className="responsive-video">
              <iframe
                src="https://www.youtube.com/embed/BHa_n3PSOzI?si=0646JP0AMWIR7Iff"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Second YouTube Video Embed */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-20 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
          >
            <div className="responsive-video">
              <iframe
                src="https://www.youtube.com/embed/Ur4SgYsD8rw?si=Ikzn2EGlGUEqsIm-"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Amazon Link */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-20 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
          >
            <a
              href="https://explorecentralwisconsin.com/wisconsin-bucket-list-author-shares-travel-experiences.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="responsive-video">
                <Image
                  src="/article.png"
                  alt="Amazon"
                  className="w-full h-auto" // Full width with automatic height adjustment
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
