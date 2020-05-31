import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroMp4 from '../assets/video/hero.mp4';
import heroWebm from '../assets/video/hero.webm';
import heroOgg from '../assets/video/hero.ogv';
import heroPoster from '../assets/images/hero-poster.png';
import tents from '../assets/images/tents.jpg';
// import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <video playsInline loop autoPlay muted poster={heroPoster}>
              <source src={heroMp4} type="video/mp4" />
              <source src={heroWebm} type="video/webm" />
              <source src={heroOgg} type="video/ogg" />
            </video>
            {/* <img src={heroImage} alt="" /> */}
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>
            Is a world without pain possible? Then don't ask the impossible.
          </h2>
        </header>
        <div className="content">
          <p>
            <strong>
              Lern mich besser kennen durch meine größte Schwäche.
            </strong>{' '}
            Ich fühle mich beschämt angesprochen von «Premature optimization is
            the root of all evil» (Donald Knuth aus
            <em> Computer Programming as an Art, 1974</em>).
          </p>
          <span className="image main">
            <img src={tents} alt="Ala-Kul See in Kyrgysztan" />
          </span>
          <p>
            Zweitgrößte Schwäche:{' '}
            <a href="https://www.komoot.de/user/837879928501">Komoot</a>{' '}
            everything.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>
            Don't explain your philosophy. <br />
            Embody it.
          </h2>
        </header>
        <div className="content">
          <p>
            <strong>One day or day one.</strong> Leidenschaften, die Leiden
            schafften: Ich kann sie an meinen Händen nicht mehr abzählen. Oder
            doch.
          </p>
          <ul className="feature-icons">
            <li className="icon fas fa-book open">
              <span className="weight-reduced">
                <a href="https://www.thalia.de/shop/home/rezensent/?rezensent=7040598">
                  Ratgeber are my jam
                </a>
              </span>
            </li>
            <li className="icon fas fa-gamepad">
              <span className="weight-reduced">#1 ranking hartgegönnt</span>
            </li>
            <li className="icon fas fa-code">
              <span className="weight-reduced">All things JavaScript</span>
            </li>
            <li className="icon fas fa-dumbbell">
              <span className="weight-reduced">Hip Thrust progressions</span>
            </li>
            <li className="icon fas fa-hiking">
              <span className="weight-reduced">Woke about trails</span>
            </li>
            <li className="icon fas fa-puzzle-piece">
              <span className="weight-reduced">
                <a href="https://www.16personalities.com/istp-personality">
                  ISTP
                </a>{' '}
                obsessiveness
              </span>
            </li>
            <li className="icon fas fa-chart-line">
              <span className="weight-reduced">Tracking habits</span>
            </li>
            <li className="icon fas fa-pencil-alt">
              <span className="weight-reduced">
                <a href="https://www.magi-mania.de/author/agata/">
                  Skincare blog archive
                </a>
              </span>
            </li>
          </ul>
          <p>
            Wichtig sind mir meine liebsten Menschen. Danach der kontinuierliche
            Verbesserungsprozess meiner Pro-Aktivität.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>The obstacle is the way.</h2>
        </header>
        <div className="content">
          <p>
            <strong>Die Ersten</strong> als aktuelles Lieblingsgedicht, Uwe
            Kolbe (<em>«Imago», 2020</em>).
          </p>
          <blockquote>
            {/* prettier-ignore */}
            Selbstverständlich ist es ein Irrtum,
            <br /> glaubte ich, jede und jeder verliebte
            <br /> sich in dich. Es ist nur jede und jeder
            <br /> Zweite. Aber das genügt dir nicht,
            <br /> aus geht dein Aug und schießt Traum
            <br /> und Schmerz in die Herzen der Ersten.
          </blockquote>

          <section>
            <header>
              <h3>Danke für den Besuch!</h3>
              <p>
                If you are pained by any external thing, it is not this thing
                that disturbs you, but your own judgment about it. And it is in
                your power to wipe out this judgment now.
              </p>
            </header>
            <div className="content">
              {/* <Gallery images={img_set_1} /> */}
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>
            When giving your child or wife a kiss, repeat to yourself,
            <br />
            «I am kissing a mortal»
          </h2>
        </header>
        <div className="content">
          <p>
            <strong>Get to know my «Inner Circle».</strong> Besuche meinen Vater
            Jacek, meine Mutter Beata, meine Tante Beata oder den Kochblog aller
            aufgezählten Personen.
          </p>
          <ul className="actions">
            <li>
              <a href="https://jacek.jankowski.org/" className="button primary">
                Jacek
              </a>
            </li>
            <li>
              <a href="https://beata.jankowski.org/" className="button primary">
                Beata1
              </a>
            </li>
            <li>
              <a href="https://janko.jankowski.org/" className="button primary">
                Beata2
              </a>
            </li>
            <li>
              <a
                href="https://kuchnia.jankowski.org/"
                className="button primary"
              >
                Rezepte
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
