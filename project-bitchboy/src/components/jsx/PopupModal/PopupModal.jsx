import "../../css/PopupModal/PopupModal.css";

function PopupModal({ className, onClose }) {
  return (
    <div className={`modal-overlay ${className}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Subscribe</h2>
        <p>Get notified for updates!</p>
        {/* Add form or content here */}
      </div>
    </div>
  );
}

export default PopupModal;


