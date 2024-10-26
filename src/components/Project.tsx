import { motion } from "framer-motion";

type ProjectProps = {
  name: string;
  tags: string[];
};

export default function Project({ name, tags }: ProjectProps) {
  return (
    <section className="grid grid-cols-8 grid-rows-2 pb-6">
      <a
        href="/"
        className="peer col-start-1 row-span-3 bg-sky-900 rounded-3xl h-[280px] w-[500px] opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg"
      ></a>
      <motion.aside
        layoutId="project-desc"
        transition={{ type: "spring", duration: 0.6 }}
        className="peer-hover:-top-20 peer-hover:left-20 relative -top-40 left-0  place-content-center col-start-4 col-span-5 row-start-2 transition-all duration-300 z-10"
      >
        <h3 className="bg-gradient-to-tl from-indigo-200 to-sky-500 bg-clip-text text-transparent text-2xl text-right font-semibold mb-2">
          {name}
        </h3>
        <p className="text-xl leading-relaxed tracking-wide text-white font-thin bg-gray-900 bg-gradient-to-tl from-gray-900 to-white/10 rounded-md px-6 py-4 shadow-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi
          repellendus corporis in quasi deleniti tempore at reiciendis officiis
          consequuntur?
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
