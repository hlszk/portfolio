import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

//import heroImage from '../assets/images/pic01.jpg';
import heroMp4 from '../assets/video/hero.mp4';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/01.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/01.jpg'),
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/02.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/02.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/images/gallery/fulls/03.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/03.jpg'),
    title: 'Any time ',
    desc: 'Be one with the time',
  },
  {
    src: require('../assets/images/gallery/fulls/04.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/05.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/05.jpg'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/06.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/gallery/fulls/07.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/07.jpg'),
    title: 'Be in present',
    desc: 'Be one with the present',
  },
];
const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/08.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/08.jpg'),
    title: 'Give away',
    desc: 'Be one with the empathy',
  },
  {
    src: require('../assets/images/gallery/fulls/09.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/09.jpg'),
    title: 'Moment',
    desc: 'Be one with the moment',
  },
  {
    src: require('../assets/images/gallery/fulls/10.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/10.jpg'),
    title: 'Serenity',
    desc: 'Be one with the purity',
    full: true,
  },
];
const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <video playsInline loop autoPlay muted>
              <source src={heroMp4} type="video/mp4" />
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
            <strong>Lern mich besser kennen durch meine größe Schwäche.</strong>{' '}
            Ich fühle mich beschämt angesprochen von "Premature optimization is
            the root of all evil" (Donald Knuth aus
            <em> Computer Programming as an Art, 1974</em>).
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
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
              <span className="weight-reduced">F84.5 obsessiveness</span>
            </li>
          </ul>
          <p>
            Wichtig sind mir meine liebsten Menschen. Danach der kontinuierliche
            Verbesserungsprozess täglicher Gewohnheiten und meiner
            Pro-Aktivität.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>
            It is impossible for a man to learn what he thinks he already knows.
          </h2>
        </header>
        <div className="content">
          <p>
            <strong>Integer mollis egestas</strong> nam maximus erat id euismod
            egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>

          <section>
            <header>
              <h3>Erat aliquam</h3>
              <p>
                If you are pained by any external thing, it is not this thing
                that disturbs you, but your own judgment about it. And it is in
                your power to wipe out this judgment now.
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>Nisl consequat</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                aliquam sed facilisis ante interdum congue. Integer mollis, nisl
                amet convallis, porttitor magna ullamcorper, amet mauris. Ut
                magna finibus nisi nec lacinia ipsum maximus.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Lorem gravida</h3>
              <p>
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
              </div>
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
            <strong>Get to know my «Inner Circle».</strong> This starter
            contains all elements for a page. Check it out
          </p>
          <ul className="actions">
            <li>
              <Link to="/Elements" className="button primary large">
                Goto Elements Page
              </Link>
            </li>
            {/* <li>
              <a href="/#" className="button large">
                Learn More
              </a>
            </li> */}
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
