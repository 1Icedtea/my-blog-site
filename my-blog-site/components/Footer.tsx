import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          I&apos;m open for <span className="text-purple">collaboration</span>{" "}
          and
          <span className="text-purple"> work opportunities!</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s get to <span className="text-purple">know</span> each
          other!
        </p>
        <a href="mailto:cabatitjeromejr@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="sm:px-6"
          />
        </a>
      </div>
      <div className="text-center py-3 my-2 flex md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Cabatit, J. Jr.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 rounded-lg border border-black-300 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200"
            >
              <img src={profile.img} alt="avatar" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
