import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  BsTelephone,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { Colect } from "../store/Collection";
//waypoint
import { Waypoint } from "react-waypoint";
import { Toast } from "../component";

const Contact = () => {
  const [senting, setSenting] = useState(false);
  const { contactRef, handleCheck } = useContext(Colect);
  const contactForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a6f03wu",
        "template_9vybn06",
        contactForm.current,
        "3AdTin6nTB6T6zGKY"
      )
      .then(
        (result) => {
          console.log(result.text);
          result.text == "OK" && setSenting(true);
          setTimeout(() => {
            setSenting(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  console.log(senting);
  return (
    <div
      ref={contactRef}
      id="contact"
      className="lg:h-[90vh] flex items-center justify-center"
    >
      {senting ? (
        <Toast setSenting={setSenting} right={"right-2"} />
      ) : (
        <Toast setSenting={setSenting} right={"right-[-300px]"} />
      )}

      <Waypoint onEnter={() => handleCheck(4)} />
      <div className="lg:w-[80%] w-[90%] 2xl:w-[1320px] mx-auto  flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row w-full  ">
          <div data-aos="fade-right" className="lg:w-[50%] w-full space-y-10">
            <div>
              <h1 className="text-[57px] text-green-500">Let's talk</h1>
              <p className="text-[22px]">Ask me anything or just say Hi</p>
            </div>
            <div className="my-3 space-y-5">
              <div className="flex items-center space-x-5 ">
                <BsTelephone className="text-[22px]" />
                <span>09798852056</span>
              </div>

              <div className="flex items-center space-x-5 ">
                <IoMailOutline className="text-[22px]" />
                <span>lmo.lwinmin@gmail.com</span>
              </div>

              <div className="flex items-center space-x-5 ">
                <IoLocationOutline className="text-[22px]" />
                <span>
                  No-29 (B) , South Horse Race Corse Road, Tamwe, Yangon
                </span>
              </div>
            </div>
            <div className="text-[24px] flex space-x-8 text-gray-700">
              <a href="https://www.facebook.com/lwinminoo45/">
                <BsFacebook className="active:text-green-300 hover:text-green-500" />
              </a>
              <a href="https://www.instagram.com/lmo.lwin/">
                <BsInstagram className="active:text-green-300 hover:text-green-500 " />
              </a>
              <a href="https://www.linkedin.com/in/lwin-min-oo-119505236/">
                <BsLinkedin className="active:text-green-300 hover:text-green-500 " />
              </a>
              <a href="https://github.com/lwinmin-12">
                <BsGithub className="active:text-green-300 hover:text-green-500 " />
              </a>
            </div>
          </div>
          <div className="lg:w-[50%] w-full my-10 lg:my-0 ">
            <form
              data-aos="fade-left"
              ref={contactForm}
              onSubmit={sendEmail}
              className="md:w-[80%]  mx-auto space-y-5 shadow-sm rounded-lg p-5 border !duration-300 hover:!-translate-y-3 hover:shadow-lg"
              action=""
            >
              <div className="text-[22px]">
                Send me <br />
                <span className="text-green-500 text-[25px]">
                  a direct message
                </span>{" "}
                here.
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="inputOne"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                  placeholder=" "
                  required
                  name="from_name"
                />
                <label
                  for="inputOne"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                  placeholder=" "
                  required
                  name="from_email"
                  typeof="Email"
                />
                <label
                  for="floating_outlined"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              <div className=" bg-white rounded-t-lg">
                <label for="comment" className="sr-only">
                  Message
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full max-h-[150px] rounded-t-lg p-2 text-sm border border-gray-300 focus:border-green-500 focus:ring-0"
                  placeholder="Message..."
                  required
                  name="message"
                ></textarea>
              </div>
              <button className="btn ml-auto px-5 py-2 space-x-2">
                <span>Send</span>
                <FiSend className="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
