import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import QRCodeImage from '@site/static/img/qr-code.png';

export default function SidebarWithQR(props) {
  return (
    <div className="sidebar-with-qr">
      <DocSidebar {...props} />
      <div className="sidebar-qr-container">
        <img src={QRCodeImage} alt="QR Code" style={{ width: '80%', maxWidth: '120px', margin: '10px auto', display: 'block' }} />
      </div>
    </div>
  );
}
