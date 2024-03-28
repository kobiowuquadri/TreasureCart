import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const sections = [
  {
    title: "Need Help?",
    items: [
      "Contact Us",
      "Chat with Us",
      "Help Center",
      "Return and Exchange",
      "Shopping guides and insights",
    ],
  },
  {
    title: "About Us",
    items: [
      "About Treasure Cart",
      "Terms and Conditions",
      "Sales and Discounts",
      "Sell on Treasure Cart",
      "Privacy",
    ],
  },
  {
    title: "Payments",
    items: ["Payment methods", "Coupons"],
  },

  {
    title: "Delivery",
    items: ["Delivery Options", "Track your items", "Info on bulk purchases"],
  },
];
const items = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://linkedin.com/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/",
  },
];
function Footer() {
  return (
    <div className="w-full mt-24 bg-[#3b8bc1] text-white py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-white py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt 2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 text-white hover-text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className=" flex col sm:w-[400px] pt-4 text 2xl">
          <p className="">JOIN US ON : </p>
          <div className="flex gap-5 px-4 py-1">
            {items.map((x, index) => {
              return (
                <x.icon
                  key={index}
                  className="hover:text-white cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        {/* enter mail */}
        <div className="col-span-3 md:pt-8 ">
          <p className="font-bold uppercase">NEW TO TREASURE CART?</p>

          <p className="py-4">
            Subscribe to our newsletter, get latest news on sales and available
            discounts.
          </p>
          <form className="flex flex-col sm:flex-row ">
            <input
              ml-auto
              type="email"
              placeholder="Enter email address"
              className="w-full p-2 mr-4 rounded-md mb-6"
            />
            <button className="p-2 mb-4">Submit</button>
          </form>
        </div>
      </div>
      <div
        className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify between
      sm:flex-row text-center text-black"
      >
        <p className="py-2">2024 Treasure Cart</p>
      </div>
    </div>
  );
}

export default Footer;
