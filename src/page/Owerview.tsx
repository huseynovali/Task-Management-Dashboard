import OwerviewSidear from "../components/OwerviewSidear";
import MainLayout from "../layout/MainLayout";

function Owerview() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">
        <MainLayout />
      </div>
      <div className="col-span-2">
        <OwerviewSidear />
      </div>
    </div>
  );
}

export default Owerview;
