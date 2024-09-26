import user from "../assets/Profil.png";
import notification from "../assets/Notification.png";
function Account() {
  return (
    <div className="absolute flex items-center gap-x-5 top-0 right-0 md:py-8 md:px-8 px-5 py-5">
      <div className="left">
        <div
          className="
        w-[52px] h-[52px] border rounded-full flex justify-center items-center
         border-[#F5F5F7] cursor-pointer hover:border-[#dddddf] transition-colors"
        >
          <div className="relative">
            <div className="absolute w-2 h-2 bg-[#FF4D5E] rounded-full right-0"></div>
            <img src={notification} alt="" />
          </div>
        </div>
      </div>
      <div className="right rounded-full w-[52px] h-[52px] cursor-pointer border hover:border-[#dddddf]">
        <img src={user} alt="" />
      </div>
     
    </div>
  );
}

export default Account;
