import React from 'react';
import { Link } from 'gatsby';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>Schreibe mir, wenn Du magst</strong>. Die abgesendeten Daten
          werden nur zum Zweck der Bearbeitung Deines Anliegens verarbeitet.
          Weitere Informationen findest Du in der&nbsp;
          <Link to="/Datenschutz">Datenschutzerklärung.</Link>
        </p>
        <form
          name="contact-form"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/Success"
        >
          <input type="hidden" name="bot-field" />
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
