type SectionProps = {
  id: string;
  children?: React.ReactNode;
};

export default function Section({ children, id }: SectionProps) {
  return (
    <section
      id={id}
      className="w-screen lg:max-w-screen-xl min-h-[900px] mt-8 px-8 py-16"
    >
      {children}
    </section>
  );
}
