import { createContext, useState, cloneElement, useContext, useEffect, useRef } from "react"
import { HiX } from "react-icons/hi"
import { createPortal } from "react-dom"
import useOutsideModalClick from "../hooks/useOutsideModalClick"
import styled from "styled-components"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    width: 100%;
    height:100vh;
`

const StyledXLayout = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: var(--fs-9);
`

const ModalLayout = styled.div`
transform: translate(-50%, -50%);
    position: fixed;
    z-index: 2;
    background-color: white;
    top: 50%;
    left: 50%;
    border-radius: var(--border-radius);
    box-shadow: 1px 1px 10px 3px var(--bg-gray-400);
    padding: var(--spacing);
`

const Context = createContext()

function Modal({children}) {
    const [openName, setOpenName] = useState("")
    const open = setOpenName;
    const close = () => setOpenName("")

    return (
        <Context.Provider value={{open, openName, close}}>
            {children}
        </Context.Provider>
    )
}

function Open({children, name}) {
    const {open} = useContext(Context)
    return cloneElement(children, {onClick: () => open(name)})
}

function Window({name, children}) {
    const {openName, close} = useContext(Context)

    const ref = useOutsideModalClick(close)

    if (name !== openName) return null;

    return createPortal(
            <Overlay>
                <ModalLayout ref={ref}>
                    <StyledXLayout>
                        <HiX onClick={() => close()}></HiX>
                    </StyledXLayout>
                    {cloneElement(children, {onCloseModal: close})}
                </ModalLayout>   
            </Overlay>, document.body
    )
}

Modal.Open = Open
Modal.Window = Window

export default Modal