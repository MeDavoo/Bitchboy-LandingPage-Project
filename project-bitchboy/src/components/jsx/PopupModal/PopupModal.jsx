import "../../css/PopupModal/PopupModal.css";

function PopupModal({ className, onClose }) {
  return (
    <div className={`modal-overlay ${className} `}>
      {/* <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Subscribe</h2>
        <p>Get notified for updates!</p>
      </div> */}
      <div class="relative p-30 bg-black border-2 border-green-400 rounded-lg shadow-lg overflow-hidden">
        
        <div class="absolute top-0 left-0 w-6 h-1 bg-green-400"></div>
        <div class="absolute top-0 left-0 w-1 h-6 bg-green-400"></div>
        <div class="absolute top-0 right-0 w-6 h-1 bg-green-400"></div>
        <div class="absolute top-0 right-0 w-1 h-6 bg-green-400"></div>
        <div class="absolute bottom-0 left-0 w-6 h-1 bg-green-400"></div>
        <div class="absolute bottom-0 left-0 w-1 h-6 bg-green-400"></div>
        <div class="absolute bottom-0 right-0 w-6 h-1 bg-green-400"></div>
        <div class="absolute bottom-0 right-0 w-1 h-6 bg-green-400"></div>

        <div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-green-900/20 to-transparent"></div>

        <label
          class="mb-3 text-green-400 text-sm tracking-wider flex items-center justify-center"
          for="password"
        >
          <span class="mr-5 opacity-200 animate-pulse font-bold text-3xl">Ü</span>
          <span class="text-green-300 font-bold text-2xl">GET THE LATEST NEWS</span>
          <span class="ml-5 opacity-200 animate-pulse font-bold text-3xl">Ü</span>
        </label>

        <div class="relative">
          <input
            class="w-full bg-transparent text-green-300 text-base border-2 border-green-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600 placeholder-green-600/60 pr-10"
            placeholder="➤ ENTER YOUR EMAIL"
            id="email"
          />
        </div>

        <div class="mt-4 flex flex-col gap-2">
          <p class="text-xs text-green-500 opacity-80 flex items-center gap-2">
            <span class="w-2 h-2 bg-red-500 rounded-full"></span>
            <span>
              <span class="text-red-400">WARNING:</span> Unauthorized access
              will be reported
            </span>
          </p>
        </div>

        <div class="absolute top-0 right-12 w-px h-4 bg-green-500/50"></div>
        <div class="absolute top-0 right-16 w-px h-6 bg-green-500/30"></div>
        <div class="absolute top-0 right-20 w-px h-2 bg-green-500/70"></div>

        <div class="absolute bottom-0 left-12 w-px h-4 bg-green-500/50"></div>
        <div class="absolute bottom-0 left-16 w-px h-6 bg-green-500/30"></div>
        <div class="absolute bottom-0 left-20 w-px h-2 bg-green-500/70"></div>
      </div>
    </div>
  );
}

export default PopupModal;
