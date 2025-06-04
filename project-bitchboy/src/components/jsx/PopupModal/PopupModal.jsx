import "../../css/PopupModal/PopupModal.css";
import Backdrop from "./Backdrop.jsx";

function PopupModal({ className, setShowModal }) {
  // Handle close modal

  const closeModal = () => setShowModal(false);

  return (
    <>
      <Backdrop closeModal={closeModal} />
      <div className={`modal-overlay ${className} `}>
        <div class="absolute mt-25 flex flex-col p-20 bg-black border-2 border-green-400 rounded-lg shadow-lg overflow-hidden z-3">
          <div class="absolute top-0 left-0 w-6 h-1 bg-green-400"></div>
          <div class="absolute top-0 left-0 w-1 h-6 bg-green-400"></div>
          <div class="absolute top-0 right-0 w-6 h-1 bg-green-400"></div>
          <div class="absolute top-0 right-0 w-1 h-6 bg-green-400"></div>
          <div class="absolute bottom-0 left-0 w-6 h-1 bg-green-400"></div>
          <div class="absolute bottom-0 left-0 w-1 h-6 bg-green-400"></div>
          <div class="absolute bottom-0 right-0 w-6 h-1 bg-green-400"></div>
          <div class="absolute bottom-0 right-0 w-1 h-6 bg-green-400"></div>

          <div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-green-900/20 to-transparent"></div>

          <label class="mb-3 text-green-400 text-sm tracking-wider flex items-center justify-center">
            <span class="text-green-400 font-bold text-6xl animate-pulse">
              JOIN ÜS
            </span>
          </label>
          <label class="mb-3 text-green-400 text-sm tracking-wider flex items-center justify-center">
            <span class="text-green-300 text-lg mt-2">
              SUBSCRIBE TO OUR NEWSLETTER AND RECEIVE THE LATEST UPDATES ABOUT
              BITCHBOY COMMUNITY
            </span>
          </label>

          <div class="relative">
            <input
              class="w-full bg-transparent text-green-300 text-base border-2 border-green-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600 placeholder-green-600/60 pr-10"
              placeholder="➤ ENTER YOUR EMAIL"
              id="email"
            />
          </div>

          <div class="tracking-wider flex items-center justify-center">
            <button class="outer-btn mt-10">
              <div class="shadow-down"></div>
              <div class="inner-btn">
                <span class="btn-text">Enter</span>
                <span class="btn-icon">⏎</span>
              </div>
            </button>
          </div>

          <div class="absolute top-0 right-12 w-px h-4 bg-green-500/50"></div>
          <div class="absolute top-0 right-16 w-px h-6 bg-green-500/30"></div>
          <div class="absolute top-0 right-20 w-px h-2 bg-green-500/70"></div>

          <div class="absolute bottom-0 left-12 w-px h-4 bg-green-500/50"></div>
          <div class="absolute bottom-0 left-16 w-px h-6 bg-green-500/30"></div>
          <div class="absolute bottom-0 left-20 w-px h-2 bg-green-500/70"></div>
        </div>
      </div>
    </>
  );
}

export default PopupModal;
