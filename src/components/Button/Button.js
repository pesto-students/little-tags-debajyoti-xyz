import React, { createElement } from 'react'
import PropTypes from 'prop-types'

import "./Button.scss";

const Button = ({
    className,
    children,
    variant,
    size,
    icon,
    ...buttonProps
}) => {
    const classBtnIcon = icon ? "btn-icon" : "";
    const finalClassName = `button ${classBtnIcon} btn-${variant} btn-${size} ${className}`;
    return (
        <button className={finalClassName} {...buttonProps} >
           {icon && createElement(icon, {
               className: "icon"
           })}
           <span className="label">{children}</span>
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "outline",
        "text"
    ]),
    size: PropTypes.oneOf([
        "sm", "md", "lg"
    ]),
    icon: PropTypes.elementType,
    children: PropTypes.string.isRequired,
}

Button.defaultProps = {
    className: "",
    variant: "primary",
    size: "md"
}

export default Button
