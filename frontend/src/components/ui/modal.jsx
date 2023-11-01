import React from "react";
import PropTypes from "prop-types";
import { RiAlertLine, RiVerifiedBadgeFill } from "react-icons/ri";

export default function Modal({ title, msg, tipo }) {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center space-x-4 p-5 border-b border-solid border-primary rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  {tipo === "OK" ? (
                    <RiVerifiedBadgeFill className="text-primary text-4xl" />
                  ) : (
                    <RiAlertLine className="text-primary text-4xl" />
                  )}
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {msg}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className={
                      tipo === "OK"
                        ? "text-green-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        : "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    }
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  tipo: PropTypes.string,
};
