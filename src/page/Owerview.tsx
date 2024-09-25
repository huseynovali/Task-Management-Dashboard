import OwerviewSidear from "../components/sidebar/OwerviewSidear";
import MainLayout from "../layout/MainLayout";

function Owerview() {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-5">
        <MainLayout />
      </div>
      <div className="col-span-2">
        <OwerviewSidear />
      </div>
    </div>
  );
}

export default Owerview;
