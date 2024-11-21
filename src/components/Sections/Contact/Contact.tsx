import { LINKEDIN } from "../../../data/constants";
import { viewVariants } from "../../../lib/motion";
import Heading from "../../Heading";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Contact</Heading>
      <motion.section
        variants={viewVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-6"
      >
        <h6 className="w-full tracking-wider leading-relaxed font-extralight">
          If you feel like I'd be a good fit for your team, let's chat! Feel
          free to reach out to me via{" "}
          <span>
            <a
              className="text-sky-500 italic font-medium"
              aria-label="linkedin"
              href={LINKEDIN}
            >
              LinkedIn
            </a>
          </span>{" "}
          or send me an email below.
        </h6>
        <ContactForm />
      </motion.section>
    </div>
  );
}
