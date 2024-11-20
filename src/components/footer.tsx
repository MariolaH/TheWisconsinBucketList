"use client";

import Image from "next/image";

  const Footer = () => {
    return (
      <footer  className="bg-gray-200 text-black py-12">
        <div className="container mx-auto text-center flex flex-col items-center">
          <div className="mb-4">
            {/* Publisher Image */}
            <Image 
              src="/publisher.png" 
              alt="Publisher Logo" 
              className="w-20 h-auto md:w-32 md:h-auto mr-4"// Adjust width and height as needed
              width={64}
              height={64}
            />
          </div>
          <p className="text-sm md:text-lg">
            &copy; {new Date().getFullYear()} The Wisconsin Bucket List. All rights reserved.
          </p>
          <p className="text-xs mt-2">
          Website developed by Design Matrix Labs LLC.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  