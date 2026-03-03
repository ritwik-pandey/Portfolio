import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <div className="bg-white h-full flex flex-col">
            <div id="window-header">
                <WindowControls target="imgfile" />
                <p className="font-bold text-[#5f6266] uppercase text-xs tracking-widest">{name}</p>
            </div>

            <div className="preview p-2 bg-gray-200 flex-1 overflow-hidden flex items-center justify-center">
                <img src={imageUrl} alt={name} className="max-w-full max-h-full object-contain" />
            </div>
        </div>
    );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');
export default ImageWindow;
