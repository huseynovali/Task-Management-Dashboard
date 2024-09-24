import OwerviewSidear from "../components/OwerviewSidear";
import MainLayout from "../layout/MainLayout";

function Owerview() {
  return (
    <div className="flex">
      <div className="">
        <MainLayout />
      </div>
      <div className="">
        <OwerviewSidear />
      </div>
    </div>
  );
}

export default Owerview;
