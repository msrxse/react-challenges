import { useState, useEffect } from "react"

/**
 * Create a Modal Component
 * Create a reusable modal component that can be opened and closed and display any content passed to it.
 */
const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);
    

    return (
        <div style={{position:'relative', width:'600px', height:'600px', border:'1px solid red'}}>
            <button onClick={() => setIsOpen(!isOpen)}>Show modal</button>
            {isOpen && (
                <>
                    {/* BACKDROP */}
                    {/* No scroll, relative to viewport */}
                    <div style={{
                        position:'fixed', 
                        left: '0', 
                        top: '0', 
                        right: '0', 
                        bottom: '0', 
                        background: '#F0FFFF', 
                        opacity: '0.5'}} 
                        onClick={() => setIsOpen(!isOpen)} 
                    />
                    {/* MODAL */}
                    {/* Relative to next positioned parent element (main div here) */}
                    <div style={{
                        position:'absolute', 
                        left: '50%', 
                        top: '50%', 
                        transform:'translate(-50%, -50%)', 
                        width:'200px', 
                        height:'200px', 
                        background: 'teal'}} 
                        onClick={(e) => e.stopPropagation()}>
                        This are the modals contents
                    </div>
                </>
            )}
        </div>
    )
}
export default Modal