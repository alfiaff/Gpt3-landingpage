import React from 'react';
import imageBanner from '../assets/img/ai.png';
import people from '../assets/img/people.png';

const Jumbotron = () => {
  return (
    <div className="w-full  bg-gradient-to-br from-[#0d3f72] from-1% to-[#040C18] to-70% flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-0 px-5 py-32 xl:px-20 xl:py-40">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-4xl bg-gradient-to-r from-[#A968F5] from-10%  via-[#9665E1] via-10% to-[#E19086] to-45% text-transparent bg-clip-text">
          Let's Build Something <br/>
          Amazing with GPT-3 <br/>
          OpenAI <br/>
        </h1>
        <p className="text-textParagraph">
          Yet bed any for travelling assistance indulgence unpleasing.<br /> 
          Not thoughts all exercise blessing. Indulgence way <br /> 
          everything joy alteration boisterous the attachment. Party <br /> 
          we years to order allow asked of.
        </p>
        <form className="relative ">
          <input 
            type="email" 
            placeholder="Your Email Address"
            className="bg-emailField p-3 w-52 xl:w-full rounded-lg border-none outline-none text-white"
          />
          <button className="bg-buttonColor p-3 absolute right-3 xl:right-0 text-white rounded-tr-lg rounded-br-lg">Get started</button>
        </form>
        <div className="flex flex-col xl:flex-row xl:items-center gap-3">
          <img src={people} className="w-40 xl:w-52"/>
          <p className="text-textParagraph">1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      
      <div>
        <img src={imageBanner} className="w-52 xl:w-96" />
      </div>
    </div>
  );
}

export default Jumbotron;