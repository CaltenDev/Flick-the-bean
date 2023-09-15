import { FC } from "react";

interface ModalProps {
	show: boolean;
  handleModal: () => void;
  children: any;
  customClass: string;
}

const Modal:FC<ModalProps> = ({ show, handleModal, children, customClass }) => {
  return(
    <div className={`modal ${customClass}  ${show ? 'show' : ''}`}>
			<div className="modal__content">
				<button className="modal__btn" onClick={handleModal}><img src="/static/svgs/close.svg" alt="close" /></button>
				{children}
			</div>
		</div>
  )
}

export default Modal;