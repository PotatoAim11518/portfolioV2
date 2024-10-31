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
        <p className="w-full text-xl leading-relaxed tracking-wide text-white font-thin p-6">
          If you feel like I'd be a good fit for your team, let's chat! Feel
          free to reach out to me via LinkedIn or send me an email.
        </p>
        <ContactForm />
      </motion.section>
    </div>
  );
}
