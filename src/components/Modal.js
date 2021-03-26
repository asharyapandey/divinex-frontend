import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

const modalElement = document.getElementById("modal-root");

function Modal({ children, defaultOpened = false, fade = false }, ref) {
	const [isOpen, setIsOpen] = useState(defaultOpened);

	const close = useCallback(() => setIsOpen(false), []);

	useImperativeHandle(
		ref,
		() => ({
			open: () => setIsOpen(true),
			close: () => setIsOpen(false),
		}),
		[close]
	);

	return createPortal(
		isOpen ? (
			<div className="modal">
				<div className="modal-overlay" onClick={close} />
				<span
					role="button"
					className="modal-close"
					aria-label="close"
					onClick={close}
				>
					x
				</span>
				<div className="modal-body">{children}</div>
			</div>
		) : null,
		modalElement
	);
}

export default forwardRef(Modal);
