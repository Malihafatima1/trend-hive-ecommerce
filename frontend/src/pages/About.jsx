import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              src={assets.about_img}
              alt="About Trend Hive"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Welcome to Trend Hive, your one-stop destination for the latest
              fashion, lifestyle, and everyday essentials. At Trend Hive, we
              believe that shopping should be simple, enjoyable, and affordable
              for everyone. Our mission is to bring you high-quality products at
              the best prices while delivering a seamless online shopping
              experience.
            </p>

            <p className="text-lg leading-relaxed">
              Trend Hive is a modern e-commerce platform built with passion and a
              commitment to excellence. We curate trendy, stylish, and reliable
              products from trusted suppliers to ensure that every item you
              purchase brings value, comfort, and confidence.
            </p>

            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                At Trend Hive, our mission is to make modern, stylish, and high-quality products accessible to everyone.
                We aim to create a trusted online marketplace where customers can discover the latest trends, enjoy a seamless shopping experience, and feel confident in every purchase they make.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-4xl py-4">
               <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
 
      <div className="flex flex-col md:flex-row text-smmb-20 mb-12">
               <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                  <b>Quality Assurance:</b>
                  <p className="text-gray-600">At Trend Hive, quality is at the heart of everything we do. We carefully select our products from trusted suppliers and conduct strict quality checks to ensure that every item meets our high standards.</p>
               </div>

               <div className="border  border-gray-400   px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                  <b>Convenience:</b>
                  <p className="text-gray-600">Shopping at Trend Hive is designed to be simple, fast, and hassle-free. We provide a seamless online experience so you can find what you need anytime, anywhere.</p>
               </div>

               <div className="border  border-gray-400  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                  <b>Exceptional Customer Service:</b>
                  <p className="text-gray-600">At Trend Hive, our customers are at the center of everything we do. We believe that shopping should not only be easy but also enjoyable, and that starts with outstanding support.</p>
               </div>
               
            </div>

            <NewsLetterBox/>
    </div>
  );
}

export default About;
