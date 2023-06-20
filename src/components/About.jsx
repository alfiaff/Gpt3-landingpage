import Feature from './Feature';

const About = () => {
  
  const DescChatBots = `
       We so opinion friends me message as 
       delight. Whole front do of plate heard on
       ought. 
    `
  const DescKnowLadgeBase = `
       At jointure ladyship an insisted so humanity 
       he. Friendly bachelor entrance to on by. As 
       put impossible own apartments b
    `
   
  const DescEducation = `
       At jointure ladyship an insisted so humanity
       he. Friendly bachelor entrance to on by. As 
       put impossible own apartments b
   `
    
  return (
    <div className="w-full xl:p-20">
      <div className="w-full h-fit xl:p-10">
        <div className="w-full  flex flex-col gap-3 xl:gap-0 xl:flex-row xl:items-center justify-between  bg-gradient-to-br from-[#0d3f72] from-1% to-[#052C55] to-70% p-5 xl:rounded-tr-lg xl:rounded-tl-lg">
          <div>
            <span className="w-8 h-[4px] bg-red-500 block mb-3 bg-gradient-to-r from-[#A968F5] from-10%  via-[#9665E1] via-10% to-[#E19086] to-45%"></span>
            <h2 className="font-bold text-white text-xl">What is GPT-3?</h2>
          </div>
          <p  className="text-textParagraph">
              We so opinion friends me message as delight. Whole front do of plate heard oh ought. His <br /> 
              defective nor convinced residence own. Connection has put impossible own apartments <br /> 
              boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by
          </p>
        </div>
        
        <div className="py-10 px-5 flex flex-col xl:flex-row xl:items-center  justify-between gap-10 bg-[#052C55]">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#A968F5] from-10%  via-[#9665E1] via-10% to-[#E19086] to-45% text-transparent bg-clip-text">
            The possibilities are beyond <br />
            your imagination 
          </h1>
          <a href="#" className="text-buttonColor self-end">Explore the libray</a> 
        </div>
        
        <div className="w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#176DCA] from-3% to-[#052C55] to-90%  grid grid-cols-1 grid-rows-3 xl:grid-rows-1 xl:grid-cols-3 text-white xl:rounded-br-lg xl:rounded-bl-lg">
          <Feature title="Chatbots" description={DescChatBots}/>
          <Feature title="Knowledgebase" description={DescKnowLadgeBase}/>
          <Feature title="Education" description={DescEducation}/>
        </div>
        
      </div>
    </div>
  );
}
// #176DCA
export default About;