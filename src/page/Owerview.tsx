import OwerviewPage from "../components/OwerviewPage";
import OwerviewSidear from "../components/sidebar/OwerviewSidear";
import Account from "../layout/Account";
import Sidebar from "../layout/Sidebar";

function Owerview() {
  return (
    <div className="grid md:grid-cols-7">
      <div className="md:col-span-5 relative bg-[#fafafa] flex">
        <Sidebar />
        <Account />
        <OwerviewPage />
      </div>
      <div className="md:col-span-2 w-full">
        <OwerviewSidear />
      </div>
    </div>
  );
}

export default Owerview;
