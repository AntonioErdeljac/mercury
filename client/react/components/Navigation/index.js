import React from 'react';

const Navigation = ({ children }) => (
  <div className="mc-h-100">
    <div className="mc-sidebar" />
    {children}
  </div>
);

export default Navigation;
