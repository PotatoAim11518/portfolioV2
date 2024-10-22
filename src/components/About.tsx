export default function About() {
  return (
    <div>
      <h1 className="text-6xl text-white mb-8">
        Welcome. I'm{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-indigo-500 via-cyan-400 to-indigo-500 animate-myName">
          Wilson.
        </span>
      </h1>
      <h2 className="text-4xl text-white/80">
        I'm a Fullstack Engineer based in{" "}
        <span className="font-medium">San Francisco, CA</span>.
      </h2>
    </div>
  );
}
