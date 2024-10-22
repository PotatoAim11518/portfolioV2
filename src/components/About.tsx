export default function About() {
  return (
    <div>
      <h1 className="text-6xl text-white mb-8">
        Welcome! I'm{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-indigo-500 via-cyan-400 to-indigo-500 animate-myName">
          Wilson.
        </span>
      </h1>
      <h2 className="text-4xl text-sky-500">
        I'm a Fullstack Engineer based in{" "}
        <span className="font-medium">San Francisco, CA</span>.
      </h2>
      <p className="pt-6 text-xl tracking-wide text-white/70 font-thin w-[50vw]">
        I build pixel-perfect front end experiences and love finding things that
        tease my brain enough to reverse-engineer it. When I'm not coding you
        can find me by the ocean with fishing rod in hand, or exploring Hyrule
        for its puzzles. The princess can wait.
      </p>
    </div>
  );
}
