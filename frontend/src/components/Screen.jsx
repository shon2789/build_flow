export const Screen = ({ isOpen, exitScreen }) => {

    return (
        <div
            onClick={() => {
                exitScreen(false)
            }}
            className={`screen ${isOpen ? "screen-active" : ""}`}
        ></div>
    )
}
