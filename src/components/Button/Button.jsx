export default function Button(Props, color, ...others) {
    return (
        <button
            {...others}
            className="px-4 py-3 border text-white rounded-md bg-[#A02279] "
        >
            {Props.Text}
        </button>
    );
}
