type SectionProps = {
  id: string;
  children?: React.ReactNode;
};

export default function Section({ children, id }: SectionProps) {
  return (
    <section
      id={id}
      className="w-full max-w-[1400px] min-h-[900px] px-36 pt-36"
    >
      {children}
    </section>
  );
}
