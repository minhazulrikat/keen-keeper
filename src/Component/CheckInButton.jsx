import { BiPhoneCall } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";

function CheckInButton({  label }) {
  return (
    <button className="btn h-16 flex-col border-base-300 bg-base-200 font-normal shadow-none sm:h-20">
      <span className="text-lg">
        {label === "Call"? <BiPhoneCall/> : label === "Text" ? <BsChatLeftText/> : <FiVideo/> }
      </span>

      <span className="text-sm sm:text-base">
        {label}
      </span>
    </button>
  );
}

export default CheckInButton;