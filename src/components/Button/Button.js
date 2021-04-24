import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
    className,
    children,
    variant,
    size,
    ...buttonProps
}) => {
    const finalClassName = `button btn-${variant} btn-${size} ${className}`;
    return (
        <button className={finalClassName} {...buttonProps}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOfType([
        "primary",
        "outline",
        "text"
    ]),
    size: PropTypes.oneOfType([
        "sm", "md", "lg"
    ]),
    children: PropTypes.string.isRequired,
}

Button.defaultProps = {
    className: "",
    variant: "primary",
    size: "md"
}

export default Button
