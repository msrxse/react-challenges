import { useEffect, useState } from "react"
import ReactDOM from "react-dom"

interface Modal {
    isOpen: boolean;
    onClose: () => void;
    children:React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }:Modal) => {
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);
    
      if (!isOpen) return null;
      
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>,
        document.body
    )
}

const Portal = () => {
    const [isPortalOpen, setIsPortalOpen] = useState(false)

    return(
        <div>
            <button onClick={() => setIsPortalOpen(true)}>Open Modal</button>
            <Modal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)}>
                <h1>Modal Content</h1>
                <p>This is the content inside the modal</p>
            </Modal>
        </div>
    )
}


export default Portal