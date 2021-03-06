import React from 'react';
import config from '../../config';
export default function SideFooter() {
  return (
    <footer>
      <ul className="items">
        {config.emailId && (
          <li>
            <h3>Email</h3>
            <a
              href={`mailto:${config.emailId}?subject=[agata.de]&body=Hallo%20Agata,%0D%0A%0D%0A`}
            >
              {config.emailId}
            </a>
          </li>
        )}
        {config.phone && (
          <li>
            <h3>Phone</h3>
            <span>{config.phone}</span>
          </li>
        )}
        {config.address && (
          <li>
            <h3>Address</h3>
            <span>{config.address}</span>
          </li>
        )}

        <li>
          <h3>Elsewhere</h3>
          <ul className="icons">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${icon}`} aria-label={name}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </footer>
  );
}
