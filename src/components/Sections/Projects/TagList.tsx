import { motion } from "framer-motion";
import { useStaggerAnimation } from "../../../lib/hooks";
import { viewVariants } from "../../../lib/motion";

type TagListProps = {
  name: string;
  tags: string[];
};

export default function TagList({ name, tags }: TagListProps) {
  const scope = useStaggerAnimation(
    "li",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0 },
    0.3,
    0,
    false
  );
  return (
    <motion.ul
      ref={scope}
      variants={viewVariants}
      initial="initial"
      animate="visible"
      layoutId={`project-taglist-${name}`}
      className="flex flex-wrap gap-3 m-2"
    >
      {tags.map((tag) => (
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          layoutId={name + tag}
          key={tag}
          className="tag"
        >
          {tag}
        </motion.li>
      ))}
    </motion.ul>
  );
}
