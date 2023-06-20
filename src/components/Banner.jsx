import possibility from '../assets/img/possibility.png';

const Banner = () => {
  return (
    <div className="w-full px-5 pb-20 xl:p-20 ">
      <div className="flex flex-col xl:flex-row xl:items-center gap-0 xl:gap-40">
        <img src={possibility} className="w-44 xl:w-96" />
        <div className="flex flex-col gap-3">
          <p className="text-sky-300 mt-3">Request Early Access to Get Started </p>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#A968F5] from-10%  via-[#9665E1] via-10% to-[#E19086] to-45% text-transparent bg-clip-text">
            The possibilities are beyond <br />
            your imagination 
          </h1>
         <p className="text-textParagraph">
            Yet bed any for travelling assistance indulgence unpleasing.<br /> 
            Not thoughts all exercise blessing. Indulgence way <br /> 
            everything joy alteration boisterous the attachment. Party <br /> 
            we years to order allow asked of.
        </p>
        <p className="text-buttonColor">Request Early Access to Get Started </p>
        </div>
      </div>
      
      <div className="w-full mt-10 xl:mt-20 flex flex-col xl:flex-row xl:justify-between bg-gradient-to-r from-[#A968F5] from-20%  via-[#9665E1] via-30% to-[#E19086] to-90% rounded-lg p-5 xl:p-5 gap-10">
        <div>
          <p>Request Early Access to Get Started</p>
          <h2 className="mt-3 font-bold">Register today & start exploring the endless possibilities</h2>
        </div>
        <a href="#" className="py-3 px-5 bg-black text-white rounded-full self-end">Get Started</a>
      </div>
    </div>
  );
}

export default Banner;