

const HamburgerButton = ({menu}) => {
  return (
    <div className="w-5 h-5 flex xl:hidden flex-col justify-between pr-10" onClick={menu}>
      <span className="w-6 h-1 bg-white block"></span>
      <span className="w-6 h-1 bg-white block"></span>
      <span className="w-6 h-1 bg-white block"></span>
      
    </div>
  );
}

export default HamburgerButton;