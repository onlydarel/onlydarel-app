import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks = {
  "Instagram": "https://www.instagram.com/onlydarel/",
  "Github": "https://www.github.com/onlydarel/",
  "LinkedIn": "https://www.linkedin.com/in/grapheel-darel-pandey-527003215/",
}

const SocialMedia = () => {
  return (
    <div className="mt-16 bg-secondaryBlue bg-opacity-40 py-4 px-6 w-full max-w-7xl mx-auto rounded-lg drop-shadow-lg">
        <ul className="flex justify-center space-x-6 text-white text-3xl">
          <li>
            <a href={SocialLinks["Instagram"]} target="_blank" className="hover:text-primary transition duration-500 ease-in-out">
              <FaInstagram/>
            </a>
          </li>
          <li>
            <a href={SocialLinks["Github"]} target="_blank" className="hover:text-primary transition duration-500 ease-in-out">
              <FaGithub/>
            </a>
          </li>
          <li>
            <a href={SocialLinks["LinkedIn"]} target="_blank" className="hover:text-primary transition duration-500 ease-in-out">
              <FaLinkedin/>
            </a>
          </li>
        </ul>
      </div>
  )
}

export default SocialMedia