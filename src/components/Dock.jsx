import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/window";

const Dock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();
    const dockRef = useRef(null);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;
        const icons = dock.querySelectorAll(".dock-icon");

        const ResetIcons = () => icons.forEach((icon) => gsap.to(icon, {
            scale: 1, y: 0, duration: 0.3, ease: "power1.out",
        }))

        dock.addEventListener("mouseleave", ResetIcons);

        return () => {
            dock.removeEventListener("mouseleave", ResetIcons);
        }
    }, []);


    const toggleApp = (app) => {
        if (!app.canOpen) return;

        const window = windows[app.id];
        if (!window) {
            return;
        }
        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }

        console.log(windows);

    };
    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container flex flex-col justify-between py-2">
                <div className="flex flex-col gap-2">
                    {dockApps.map(({ id, name, icon, canOpen }) => (
                        <div key={id} className="relative flex justify-center">
                            <button type="button"
                                className="dock-icon group"
                                aria-label={name}
                                data-tooltip-id="dock-tooltip"
                                data-tooltip-content={name}
                                data-tooltip-delay-show={150}
                                disabled={!canOpen}
                                onClick={() => toggleApp({ id, canOpen })}
                            >
                                <img src={`/images/${icon}`} alt={name} loading="lazy" className={canOpen ? "" : "opacity-60"} />
                                <div className={`dot-indicator ${windows[id]?.isOpen ? "active" : ""}`} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-auto">
                    <button type="button"
                        className="dock-icon group"
                        data-tooltip-id="dock-tooltip"
                        data-tooltip-content="Show Applications"
                    >
                        <svg viewBox="0 0 24 24" className="size-8 fill-white opacity-100">
                            <circle cx="4" cy="4" r="2" />
                            <circle cx="12" cy="4" r="2" />
                            <circle cx="20" cy="4" r="2" />
                            <circle cx="4" cy="12" r="2" />
                            <circle cx="12" cy="12" r="2" />
                            <circle cx="20" cy="12" r="2" />
                            <circle cx="4" cy="20" r="2" />
                            <circle cx="12" cy="20" r="2" />
                            <circle cx="20" cy="20" r="2" />
                        </svg>
                    </button>
                </div>

                <Tooltip id="dock-tooltip" place="right" className="tooltip" />
            </div>
        </section>
    );
}
export default Dock;