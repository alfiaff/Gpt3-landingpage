import logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <div className="w-full bg-[#02254F]">
      <div className="h-60 flex flex-col justify-center items-center gap-10">
        <h2 className="text-center font-bold text-2xl xl:text-3xl bg-gradient-to-r from-[#A968F5] from-10%  via-[#9665E1] via-10% to-[#E19086] to-45% text-transparent bg-clip-text">
          Do you want to step in to the <br />
          future before others 
        </h2>
        <a href="#" className="p-3 border-2 border-white text-white">Request Early Access</a>
      </div>
      
      <div className="w-full  grid grid-cols-1 xl:grid-cols-[35%_1fr] py-10 text-white p-5 xl:px-20 xl:py-10">
        <div className="flex xl:justify-center">
         <div>
            <img src={logo} className="mb-6"/>
            <p>
              Crechterwood K12 182 DK <br /> 
              Alknjkcb, All Rights Reserved
            </p>
          </div>
        </div>
        
        <div className="mt-5 xl:mt-0 grid grid-cols-1 xl:grid-cols-3 gap-y-5 xl:gap-y-0">
           <div>
              <ul className="flex flex-col gap-5">
                <li className="font-bold text-xl">Links</li>
                <li><a href="#">Overons</a></li>
                <li><a href="#">Social Media</a></li>
                <li><a href="#">Counters</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
           </div>
           <div>
              <ul className="flex flex-col gap-5">
                <li className="font-bold text-xl">Company</li>
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
           </div>
           <div>
              <ul className="flex flex-col gap-5">
                <li className="font-bold text-xl">Get in touch</li>
                <li><p>Crechterwood K12 <br /> 182 DK Alknjkcb </p></li>
                <li><p>022-033-044</p></li>
                <li><p>info@payme.net</p></li>
              </ul>
           </div>
        </div>
        
      </div>
    </div>
 );
}

export default Footer;