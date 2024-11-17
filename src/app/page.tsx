import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Wisconsin Bucket List Book</title>
        <meta name="description" content="The Wisconsin Bucket List Book" />
        <meta
          name="keywords"
          content="The Wisconsin Bucket List Book, Wisconsin tourism, Kelly Jo Stull, Wisconsin, Bucket List, Kelly Stull, The Wisconsin Bucket List Kelly Jo Stull"
        />
        <link
          href="https://www.bookthewisconsinbucketlist.com"
          rel="canonical"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="The Wisconsin Bucket List Book" />
        <meta
          property="og:description"
          content="Plan your next Wisconsin adventure with The Wisconsin Bucket List book."
        />
      <meta property="og:image" content="https://www.bookthewisconsinbucketlist.com/book.png" />

        <meta
          property="og:url"
          content="https://www.bookthewisconsinbucketlist.com"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="bg-white min-h-screen">
        <Navbar />

        {/* Top padding to account for the navbar height */}
        <div className="pt-40 md:pt-40">
          {/* Header Section */}
          <header className="container mx-auto py-5 md:py-24 text-center px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-bold text-black py-12 md:py-24 italic">
              Why just visit when you can explore?
            </h1>
          </header>

          {/* Book and Description Section */}
          <div className="container mx-auto md:px-16 px-14 flex flex-col items-center justify-center md:flex-row md:space-x-8">
            {/* Book Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src="/book.png" // Replace with your book cover image path
                alt="The Wisconsin Bucket List"
                width={150} // Smaller size for mobile
                height={250}
                className="shadow-lg md:w-[300px] md:h-[430px]" // Set desktop size with md breakpoint
                priority
              />
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-sm md:text-lg text-gray-800 ">
                Whether Wisconsin is your home or you&quot;re visiting
                America&quot;s Dairyland, this book is your guide to adventures
                filled with purpose, meaning, and accomplishment.
              </p>
              <p className="text-sm md:text-lg text-gray-800 mt-4">
                Search for treasure! Wear a cheese head! Take in the view from a
                lighthouse! Go dog sledding! Both Wisconsin natives and visitors
                will discover hidden gems in{" "}
                <span className="text-red-600 italic font-bold">
                  The Wisconsin Bucket List.
                </span>
              </p>
              <p className="text-sm md:text-lg text-gray-800 mt-4">
                These fun-filled experiences and family adventures will create
                memories that last a lifetime. You&quot;ll explore new places,
                meet fascinating people, and savor unique foods, all while
                gaining a deeper appreciation for the culture that makes
                Wisconsin so special.
              </p>
              <p className="text-sm md:text-lg text-gray-800 mt-4">
                Concise, honest, and thoughtfully crafted,{" "}
                <span className="text-red-600 italic font-bold">
                  The Wisconsin Bucket List
                </span>{" "}
                promises you the time of your life!
              </p>
            </div>
          </div>

          {/* Buy Now Button */}
          <div className="text-center mt-8 py-10 md:py-20">
            <a
              href="https://www.amazon.com/Wisconsin-Bucket-List-Ways-Experience/dp/1628470283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
                  backgroundColor: "#EE1925",
                }}
                className="text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded mt-6 inline-block text-lg md:text-xl transform transition-all duration-300 hover:bg-red-900 hover:scale-105 hover:shadow-2xl animate-shake animate-infinite animate-duration-1000 animate-ease-linear"
              >
                Buy Now
              </button>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
