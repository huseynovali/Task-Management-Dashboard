import constants from "../../constants/constants";
import TabsNavigate from "./TabsNavigate";

function SidebarMobile({
  open,
  setOpen,
}: Readonly<{ open: boolean; setOpen: any }>) {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="absolute right-5 top-5 z-50 " onClick={handleClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00098 5L19 18.9991"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.99996 18.9991L18.999 5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div>
       <TabsNavigate/>  
      </div>
    </div>
  );
}

export default SidebarMobile;
