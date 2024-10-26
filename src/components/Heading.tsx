type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <>
      <div className="w-full flex justify-start">
        <h1 className="mb-4">{children}</h1>
      </div>
      <div className="h-1 mb-8 w-[150%] bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
    </>
  );
}
