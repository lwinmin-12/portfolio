import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  BsTelephone,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { Colect } from "../store/Collection";

const Contact = () => {
  const {contactRef} = useContext(Colect)
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
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div ref={contactRef} id="contact" className="h-[90vh] flex items-center justify-center">
      <div className="w-[80%] mx-auto  flex flex-col justify-center items-center">
        <div className="flex w-full  ">
          <div className="w-[50%] space-y-10">
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
              <BsFacebook className="hover:text-green-500 " />
              <BsInstagram className="hover:text-green-500 " />
              <BsLinkedin className="hover:text-green-500 " />
              <BsWhatsapp className="hover:text-green-500 " />
            </div>
          </div>
          <div className="w-[50%] ">
            <form
              ref={contactForm}
              onSubmit={sendEmail}
              className="w-[80%] mx-auto space-y-5 shadow-lg rounded-lg p-5 border duration-300 hover:-translate-y-3 hover:shadow-2xl"
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
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                  placeholder=" "
                  required
                  name="from_name"
                />
                <label
                  for="inputOne"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                  placeholder=" "
                  required
                  name="from_email"
                  typeof="Email"
                />
                <label
                  for="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              <div className=" bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" className="sr-only">
                  Message
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full max-h-[150px] rounded-t-lg p-2 text-sm border border-gray-300 focus:border-green-500  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-500"
                  placeholder="Message..."
                  required
                  name="message"
                ></textarea>
              </div>
              <button className="btn px-5 py-2 space-x-2">
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
