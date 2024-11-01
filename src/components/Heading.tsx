type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1 className="w-full text-center lg:text-left items-center mb-4 ">
        {children}
      </h1>
      <div className="h-1 mb-8 w-full lg:w-[150%] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
    </>
  );
}
