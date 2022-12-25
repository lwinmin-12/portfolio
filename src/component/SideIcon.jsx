import { RxDoubleArrowUp } from "react-icons/rx";
import { useContext } from "react";
import { Colect } from "../store/Collection";

const SideIcon = () => {
  const { handleScroll, homeRef, nav } = useContext(Colect);

  return (
    <div className="fixed right-[10px] lg:right-[40px] bottom-[70px]">
      {nav[0].con != true && (
        <div
          onClick={() => handleScroll(homeRef)}
          className="bg-green-500 btn p-3"
        >
          <RxDoubleArrowUp className="text-white" />
        </div>
      )}
    </div>
  );
};

export default SideIcon;
