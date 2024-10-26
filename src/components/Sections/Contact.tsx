import Heading from "../Heading";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Contact</Heading>
      <section className="m-10">
        <p className="w-full text-xl leading-relaxed tracking-wide text-white font-thin">
          If you feel like I'd be a good fit for your team, let's chat! Feel
          free to reach out to me via LinkedIn or send me an email.
        </p>
      </section>
    </div>
  );
}
