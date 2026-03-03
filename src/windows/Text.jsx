import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <div className="bg-white h-full flex flex-col">
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 select-text overflow-x-hidden">
                {subtitle && <h3 className="text-2xl font-bold text-gray-800">{subtitle}</h3>}
                {image && <img src={image} alt={name} className="w-full rounded-xl object-cover" />}
                <div className="flex flex-col gap-4">
                    {description?.map((para, index) => (
                        <p key={index} className="text-gray-600 leading-relaxed text-lg">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
