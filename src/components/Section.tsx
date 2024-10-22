type SectionProps = {
  id: string;
  children?: React.ReactNode;
};

export default function Section({ children, id }: SectionProps) {
  return (
    <section id={id} className="h-[400px] pt-36">
      {children}
    </section>
  );
}