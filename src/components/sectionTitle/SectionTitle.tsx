const SectionTitle = ({
  sub,
  heading,
  description,
}: {
  sub: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center mb-10 space-y-2">
      <h1 className="md:text-2xl text-[#e08534] text-center font-semibold">
        {sub}
      </h1>
      <h1 className="text-3xl md:text-4xl text-center text-[#033955] font-bold">
        {heading}
      </h1>
      <p className="md:max-w-2xl lg:mx-auto text-center mx-6 md:mx-10 text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
