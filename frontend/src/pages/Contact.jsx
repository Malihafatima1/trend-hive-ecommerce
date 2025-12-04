import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-5 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10">
        <img
          className="w-full md:max-w-[480px] object-contain"
          src={assets.contact_img}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">54782 Willm Station  <br/>  Suite 531, Washhinfton ,USA</p>
          <p className="text-gray-500">Tel: (415) 555-0123 <br/>  Email: admin2gmail.com</p>
          <p>Careers at Trend-Hive</p>
          <p className="text-gray-500">Leran more baout our teams and job openings.</p>
           <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white -all duration-500">Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
