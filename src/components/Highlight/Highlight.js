import React from 'react';
import styles from './styles.module.css';

const colors = {
  primary: 'var(--ifm-color-primary)',
  secondary: 'var(--ifm-color-secondary)',
  success: 'var(--ifm-color-success)',
  info: 'var(--ifm-color-info)',
  warning: 'var(--ifm-color-warning)',
  danger: 'var(--ifm-color-danger)'
};

export default class Highlight extends React.Component {
  render() {
    const { children, color, className, ...props } = this.props;
    return (
      <span
        style={{
          backgroundColor: color ? (colors[color] || color) : undefined,
          ...props
        }}
        className={`${styles.highlight} ${className || ''}`}
      >
        {children}
      </span>
    );
  }
}