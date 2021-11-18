import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";

const getRandomBg = () => {
  const bg = () => {
    const random = Math.random() * (255 - 0) + 0;
    return parseInt(random, 10);
  };
  return `rgb(${bg()},${bg()},${bg()})`;
};

const ProfileCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = useRef(getRandomBg());
  return (
    <div className="flex flex-col h-full justify-center items-center py-3 gap-4 bg-white rounded-xl hover:shadow-xl focus-within:shadow-xl  items-center max-h-60">
      {/*Card start here */}
      <button
        style={{ background: bgColor.current }}
        className=" w-16 h-16 rounded-full flex  md:w-20 md:h-20"
        onClick={() => setIsOpen(true)}
      >
        <p className=" text-white text-2xl font-bold mix-blend-lighten m-auto ">
          {props.name[0]}
        </p>
      </button>
      <p className="block text-center text-2xl font-bold ">{props.name}</p>
      {/*Dialog starts here */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto flex "
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
        <div className="flex flex-col items-center gap-8 justify-center mx-2 my-auto w-full max-w-screen-sm transform bg-white rounded-xl  md:mx-auto md: p-8 ">
          <div
            style={{ background: bgColor.current }}
            className=" w-20 h-20 rounded-full flex "
          >
            <p className="text-white text-2xl font-bold mix-blend-lighten m-auto ">
              { props.name[0]}
            </p>
          </div>
          <p className="text-xl font-bold">{props.name}</p>
          <p className="block">{props.bio}</p>
          <div>
            <button
              className="px-6 py-3 bg-red-600 text-white font-bold text-white rounded hover:bg-red-500 hover:shadow-xl focus-visible:shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProfileCard;
