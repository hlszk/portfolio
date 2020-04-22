import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main-container">
      <div className="container">
        <div className="content">
          <header className="major">
            <h2>NOT FOUND</h2>
          </header>
          <section>
            <h4>Not a valid URL</h4>
            <Link to="/" className="button primary">
              Go back
            </Link>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
