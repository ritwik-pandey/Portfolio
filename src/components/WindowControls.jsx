import useWindowStore from "#store/window";
import { X, Minus, Square } from "lucide-react";

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();

    return (
        <div id="window-controls">
            <div className="minimize"><Minus size={14} strokeWidth={2.5} /></div>
            <div className="maximize"><Square size={12} strokeWidth={2.5} /></div>
            <div className="close" onClick={() => closeWindow(target)}><X size={14} strokeWidth={2.5} /></div>
        </div>
    )
}

export default WindowControls;