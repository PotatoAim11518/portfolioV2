import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

type ProjectProps = {
  name: string;
  tags: string[];
};

export default function Project({ name, tags }: ProjectProps) {
  return (
    <section className="grid grid-cols-8 grid-rows-2 pb-6">
      <a
        target="blank"
        href="/"
        className="peer col-start-1 row-span-3 h-[320px] w-[500px] rounded-3xl opacity-40 hover:opacity-100 border-transparent hover:border-2 bg-clip-border overflow-hidden hover:scale-[1.05] active:scale-[1.03] animate-sheen sheen transition delay-100 duration-300 shadow-lg hover:shadow-xl"
      >
        <img
          src="src/assets/marco-murakami-Ap4wkcAr4Wk-unsplash.jpg"
          className="w-full object-cover"
        ></img>
      </a>
      <motion.aside
        layoutId="project-desc"
        transition={{ type: "spring", duration: 0.6 }}
        className="pointer-events-none peer-hover:-top-20 peer-hover:left-20 relative -top-40 left-0  place-content-center col-start-4 col-span-5 row-start-2 transition-all duration-300 z-10"
      >
        <h3 className="bg-gradient-to-tl from-indigo-200 to-sky-500 bg-clip-text text-transparent text-3xl text-right font-semibold mb-2">
          {name}
        </h3>
        <p className="relative text-xl leading-relaxed tracking-wide text-white font-thin bg-gray-900 bg-gradient-to-tl from-gray-900 to-white/10 rounded-md px-6 py-4 shadow-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi
          repellendus corporis in quasi deleniti tempore at reiciendis officiis
          consequuntur?
          <a href="">
            <Icon
              icon="cib:github"
              width="2.5rem"
              className="absolute -bottom-4 right-4 pointer-events-auto"
            />
          </a>
        </p>
        <ul className="flex flex-wrap gap-2 m-2">
          {tags.map((tag) => (
            <li className="tag">{tag}</li>
          ))}
        </ul>
      </motion.aside>
    </section>
  );
}
