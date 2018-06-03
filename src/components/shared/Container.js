import React from 'react';
import './Container.css';

const Container = ({ children, style, className }) => (
    <div className={`container ${className}`} style={style}>
        {children}
    </div>
);

export default Container;
