import { Mail, Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <div className="bg-white h-full flex flex-col">
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-full flex-1 overflow-hidden">
                <div className="sidebar w-48 bg-gray-50 border-r border-gray-200 p-4">
                    <h2 className="text-xl font-bold mb-4">Photos</h2>

                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                                <img src={icon} alt={title} className="w-5 h-5" />
                                <p className="text-sm">{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery flex-1 p-4 overflow-y-auto">
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery image",
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img,
                                    })
                                }
                            >
                                <img src={img} alt={`Gallery image ${id}`} className="w-full h-full object-cover" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
