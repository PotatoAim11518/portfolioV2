import { NAV_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="w-full h-52 bg-zinc-950 flex justify-evenly items-center mt-auto text-white/80 border-t-[1px] border-t-gray-600 p-6 shadow-md">
      <small className="h-full text-center place-content-center my-6 px-8 border-r-white/30 border-r-[1px]">
        &copy; Wilson Huang 2024
      </small>
      <nav>
        <h3 className="text-xl mb-4">Places</h3>
        <ul className="flex flex-col gap-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="tracking-widest">
              <a href={link.hash}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <small>
        Coded in Visual Studio Code by me. Built with React/Vite. Styled with
        Tailwind CSS, deployed with Vercel.
      </small>
    </footer>
  );
}
