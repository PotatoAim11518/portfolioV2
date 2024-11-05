import { Icon } from "@iconify/react/dist/iconify.js";
import { ExternalLink } from "../../lib/types";

type ExternalLinkItemProps = {
  link: ExternalLink;
};

export default function ExternalLinkItem({ link }: ExternalLinkItemProps) {
  return (
    <li
      key={link.name}
      className="text-slate-400 hover:text-white p-2 transition mix-blend-difference"
    >
      <a className="" href={link.href} target="blank">
        <Icon icon={link.icon} height={40} width={40} />
      </a>
    </li>
  );
}
