import { useState } from "react";

function HoverStateIcon(props) {

    const [iconHoverClass, setIconHoverClass] = useState("");

    return (
        <i class={iconHoverClass || props.iconClass} onMouseEnter={() => setIconHoverClass(props.hoverClass)} onMouseLeave={() => setIconHoverClass("")}></i>
    );
}

export default HoverStateIcon;