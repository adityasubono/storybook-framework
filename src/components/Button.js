import PropTypes from "prop-types"

function Button({
                    label,
                    backgroundColor = "red",
                    size = "md",
                    handleClick
                })
{
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    if (size === "xl") scale = 2

    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale}rem`,
        border: "none",
    }
    return (
        <button onClick={handleClick} style={style}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    handleClick: PropTypes.func,
}

export default Button

