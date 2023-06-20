import blog_one from '../assets/img/blog01.png';
import blog_two from '../assets/img/blog02.png';
import blog_three from '../assets/img/blog03.png';
import blog_four from '../assets/img/blog04.png';
import blog_five from '../assets/img/blog05.png';

const Article= () => {
  return (
    <div className="p-5 xl:px-20 pb-20">
      <h2 className="bg-gradient-to-r from-[#A968F5] from-10%  via-[#9665E1] via-10% to-[#E19086] to-45% text-transparent bg-clip-text font-bold text-2xl mb-10">
        A lot is happening,<br />
        We are blogging about it.
      </h2>
      
      <div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-[40%_50%]  gap-y-10 xl:gap-y-0 gap-x-10 place-content-between">
        <div className="w-full  xl:h-full  grid grid-rows-[50%_1fr] xl:grid-rows-[50%_30%]">
          <img src={blog_one} className="w-full h-full rounded-lg"/>
          <div className="w-full h-full bg-[#0D3F72] p-5 text-white flex flex-col gap-10 rounded-b-lg">
             <div>
                <p>Sep 26, 2023</p>
                <h2 className="font-bold text-xl whitespace-pre-line">GPT-3 and Open AI the future. Let us explore how it is? </h2>
             </div>
             
              <a href="#">Read Full Article</a>
          </div>
        </div>
        
        <div className="grid xl:grid-cols-[1fr_1fr] gap-x-5 gap-y-10">
        
          <div className="w-full grid grid-rows-[45%_1fr] xl:grid-rows-[50%_60%] ">
            <img src={blog_two} className="w-full h-full bg-cover" />
            <div className="w-full h-full bg-[#0D3F72] p-5 flex flex-col  gap-4 text-white">
               <div>
                  <p>Sep 26, 2023</p>
                  <h2 className="font-bold text-xl whitespace-pre-line">GPT-3 and Open AI the future. Let us explore how it is? </h2>
               </div>
               
                <a href="#">Read Full Article</a>
            </div>
          </div>
          <div className="w-full grid grid-rows-[45%_1fr] xl:grid-rows-[50%_60%] ">
            <img src={blog_three} className="w-full h-full" />
            <div className="w-full  bg-[#0D3F72] p-5 flex flex-col gap-4 text-white">
               <div>
                  <p>Sep 26, 2023</p>
                  <h2 className="font-bold text-xl whitespace-pre-line">GPT-3 and Open AI the future. Let us explore how it is? </h2>
               </div>
               
                <a href="#">Read Full Article</a>
            </div>
          </div>
          <div className="w-full grid grid-rows-[45%_1fr] xl:grid-rows-[50%_60%]">
            <img src={blog_four} className="w-full h-full" />
            <div className="w-full  bg-[#0D3F72] p-5 flex flex-col gap-4 text-white">
               <div>
                  <p>Sep 26, 2023</p>
                  <h2 className="font-bold text-xl whitespace-pre-line">GPT-3 and Open AI the future. Let us explore how it is? </h2>
               </div>
               
                <a href="#">Read Full Article</a>
            </div>
          </div>
          <div className="w-full grid grid-rows-[45%_1fr] grid-rows-[50%_60%] ">
            <img src={blog_five} className="w-full h-full" />
            <div className="w-full  bg-[#0D3F72] p-5 flex flex-col gap-4 text-white">
               <div>
                  <p>Sep 26, 2023</p>
                  <h2 className="font-bold text-xl whitespace-pre-line">GPT-3 and Open AI the future. Let us explore how it is? </h2>
               </div>
               
                <a href="#">Read Full Article</a>
            </div>
          </div>
          

        </div>
      </div>
        
    
    </div>
  );
}

export default Article;