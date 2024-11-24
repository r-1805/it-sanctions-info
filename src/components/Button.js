import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Button.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon,
}) => {
  const classes = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth && 'button--full-width',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__text">{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;
