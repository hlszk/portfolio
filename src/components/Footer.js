import React from 'react';

export default function Footer() {
  return (
    <div className="copyright">
      &copy; hlszk. All rights reserved, {new Date().getFullYear()}.
    </div>
  );
}
