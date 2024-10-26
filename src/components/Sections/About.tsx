export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-2">
        Hello, I'm{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-indigo-500 via-cyan-400 to-indigo-500 animate-sheen">
          Wilson.
        </span>
      </h1>
      <h2>
        I'm a Fullstack Engineer based in{" "}
        <span className="font-medium text-sky-500">San Francisco</span>.
      </h2>
      <div className="flex items-start gap-x-8 mt-10 ">
        <div className="min-w-60 w-60 h-60 rounded-full bg-white/60 shadow-md" />
        <p className="pt-6 text-xl tracking-wide text-white font-thin">
          I build pixel-perfect front end experiences and love finding things
          that tease my brain enough to reverse-engineer it. When I'm not coding
          you can find me by the ocean with fishing rod in hand, or exploring
          Hyrule for its puzzles. The princess can wait.
        </p>
      </div>
      <h3>Story</h3>
      <h3>Random Facts</h3>
      <ul>
        <li>
          <p>some fact</p>
        </li>
        <li>
          <p>some fact</p>
        </li>
        <li>
          <p>some fact</p>
        </li>
        <li>
          <p>some fact</p>
        </li>
        <li>
          <p>some fact</p>
        </li>
      </ul>
    </div>
  );
}
