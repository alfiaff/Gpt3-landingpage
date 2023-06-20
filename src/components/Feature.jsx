const Feature = ({title, description}) => {
  return (
    <div className="w-full  flex flex-col gap-5 px-5 py-10">
      <div>
        <span className="w-8 h-[4px] bg-red-500 block mb-3 bg-gradient-to-r from-[#A968F5] from-10%  via-[#9665E1] via-10% to-[#E19086] to-45%"></span>
        <h2 className="font-bold text-3xl">{title}</h2>
      </div>
      <p className="text-textParagraph">{description}</p>
    </div>
  );
}

export default Feature;