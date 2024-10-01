import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Media() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-40 md:pt-40">
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-12 ml-6 md:ml-20 text-left md:py-10">
            Media
          </h1>

          {/* First YouTube Video Embed */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-6 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
          >
            <div className="responsive-video">
              <iframe
                src="https://www.youtube.com/embed/BHa_n3PSOzI?si=0646JP0AMWIR7Iff"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
              ></iframe>
            </div>
          </div>

          {/* Second YouTube Video Embed */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-6 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
          >
            <div className="responsive-video">
              <iframe
                src="https://www.youtube.com/embed/Ur4SgYsD8rw?si=Ikzn2EGlGUEqsIm-"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
              ></iframe>
            </div>
          </div>

          {/* Amazon Link */}
          <div
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
            className="w-full max-w-sm md:max-w-xl mx-auto mb-6 p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg flex items-center transform transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/amazon.png"
              alt="Amazon"
              className="w-10 h-10 md:w-16 md:h-16 mr-4" // Mobile and desktop sizes
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
