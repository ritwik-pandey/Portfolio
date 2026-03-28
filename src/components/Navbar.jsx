import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import dayjs from "dayjs";
import React from "react";

const Navbar = () => {
    const { openWindow } = useWindowStore();

    return (
        <nav>
            <div>
                <p>Activities</p>
                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <time>{dayjs().format("MMM D  H:mm")}</time>

            <div>
                <ul className="flex items-center gap-3">
                    {navIcons.map(({ id, img }) => (
                        <li key={id} >
                            <img src={img} alt={`icon-${id}`} className="icon opacity-80" />
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-default">
                    <img src="/icons/wifi.svg" className="size-4 invert" alt="wifi" />
                    <img src="/icons/user.svg" className="size-4 invert" alt="user" />
                    <img src="/icons/mode.svg" className="size-4 invert" alt="settings" />
                </div>
            </div>
        </nav>

    );
}

export default Navbar;