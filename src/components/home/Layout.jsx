import React from 'react';
import "../../styles/Layout.css"

function Layout({ children }) {
  return (
    <div className="container-portfolio">
      {children}
    </div>
  );
}

export default Layout;
