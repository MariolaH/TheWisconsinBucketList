import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Author() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-40 md:pt-40">
        <div className="container mx-auto py-24 px-4 md:px-12">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-12 ml-6 md:ml-5 text-left md:py-10">
            About Kelly Jo Stull
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Text Section in Container */}
            <div
              style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
              className="bg-gray-100 shadow-lg rounded-lg p-8 md:p-10"
            >
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Kelly Jo Stull was born in Fond du Lac, Wisconsin and had the
                childhood chance to travel the Badgerland’s rustic roads, rural
                valleys, and country highways with her mother driving Kelly Jo
                and her four siblings in the backseat of the family station
                wagon. All this was more than enough opportunity for Kelly Jo to
                learn her first word, “cow,” entirely appropriate for a little
                girl growing up in America’s Dairyland.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Her father worked at a paper company, and her mother educated
                the children in their free time by playing unofficial tour guide
                for Wisconsin’s industries, state parks, historical landmarks,
                and cultural events. Kelly Jo graduated from UW-Stevens Point
                and started her career “Up North” in Rhinelander. Her success
                and hard work gave her the chance to travel the country for her
                job, so she went back to riding the roads, exploring new towns,
                meeting fresh faces, and trying new foods. She loved the
                adventure, and the journey is something she still enjoys.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                While Kelly Jo presently lives in Kentucky, her heart forever
                remains in the great state of Wisconsin.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center">
              <img
                src="/bioPic.png"
                alt="Kelly Jo Stull"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
