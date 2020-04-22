import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main-container">
      <div className="container">
        <div className="content">
          <header className="major">
            <h2>Danke!</h2>
          </header>
          <section>
            <h4>Deine Nachricht wurde erfolgreich übermittelt.</h4>
            <Link to="/" className="button primary">
              Gehe zurück
            </Link>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
