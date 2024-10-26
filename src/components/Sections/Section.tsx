type SectionProps = {
  id: string;
  children?: React.ReactNode;
};

export default function Section({ children, id }: SectionProps) {
  return (
    <section
      id={id}
      className="w-full max-w-[1200px] min-h-[900px] px-36 pt-36 mt-14"
    >
      {children}
    </section>
  );
}
