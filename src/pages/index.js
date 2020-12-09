import React from "react"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../assets/styles/index.css';
import TeamDubwool from '../images/team-dubwool.png';
import Discord from '../images/discord.png';

import favicon from '../images/favicon.ico';
import Brain from '../assets/roster/brain.png';
import Echo from '../assets/roster/echo.jpg';
import Gab from '../assets/roster/gab.jpg';
import Justin from '../assets/roster/justin.png';
import Midori from '../assets/roster/midori.jpg';
import MrPig from '../assets/roster/mrpig.png';
import Muk from '../assets/roster/muk.jpg';
import Pride from '../assets/roster/pride.png';
import Ragna from '../assets/roster/ragna.jpg';

const IndexPage = () => (
  <>
  <Helmet>
    <meta name="twitter:title" content="Home | Team Dubwool" /> 
    <meta name="twitter:image" content={TeamDubwool} /> 
    <meta name="twitter:card" content={TeamDubwool} />

    <meta property="og:title" content="Home | Team Dubwool" />
    <meta property="og:image" content={TeamDubwool} />
  </Helmet>
  <SEO
    title="Home"
  />
  <Layout>
  <div className="bg">
    <nav className="nav">
      <a href="https://www.teamdubwool.com" className="logo-container">
        <div className="">
          <img
            src={TeamDubwool}
            className="nav-logo"
          />
        </div>
        <div className="team-name">
          Team Dubwool
        </div>
      </a>
    </nav>

    <section className="section section-about bg-white">
      <div className="container">
        <h2 className="subheader black">
          About
        </h2>

        <p className="body">
          Team Dubwool is a gaming community with an esports organization competing in Pokemon Sword & Shield. We are focused on not only competing in tournaments at the highest level, but we are also focused on growing the community by providing support & mentorship to community streamers & competitive players, and hosting tournaments to grow each other's skillsets and help each other become better competitive players.
        </p>
      </div>
    </section>

    <section className="section bg-black white">
      <div className="container">
        <h2 className="subheader white">
          Roster
        </h2>

        <div className="roster">
          {/* <div className="roster-row"> */}
            <div className="team-member">
              <img 
                src={Echo}
                className="avatar"
              />
              <h3 className="team-member-name">
                Echo Rose
              </h3>
            </div>

            <div className="team-member">
              <img 
                src={Pride}
                className="avatar"
              />
              <h3 className="team-member-name">
                PrideVGC
              </h3>
            </div>

            <div className="team-member">
              <img 
                src={Muk}
                className="avatar"
              />
              <h3 className="team-member-name">
                Mukining
              </h3>
            </div>

          {/* </div> */}

          {/* <div className="roster-row"> */}
            <div className="team-member">
              <img 
                src={Justin}
                className="avatar"
              />
              <h3 className="team-member-name">
                JustinSnores
              </h3>
            </div>

            <div className="team-member">
              <img 
                src={Brain}
                className="avatar"
              />
              <h3 className="team-member-name">
                BrainVGC
              </h3>
            </div>

            <div className="team-member">
              <img 
                src={MrPig}
                className="avatar"
              />
              <h3 className="team-member-name">
                MrPig28
              </h3>
            </div>

            <div className="team-member">
              <img 
                src={Ragna}
                className="avatar"
              />
              <h3 className="team-member-name">
                Professor Ragna
              </h3>
            </div>

            <div className="team-member">
              <img 
                src={Midori}
                className="avatar"
              />
              <h3 className="team-member-name">
                Midori
              </h3>
            </div>

            <div className="team-member">
              <img 
                src={Gab}
                className="avatar"
              />
              <h3 className="team-member-name">
                Gabu
              </h3>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>

    <section className="section bg-white">
      <div className="container">
        <h2 className="subheader black">
          Coaching
        </h2>

        <div className="coaching-info-container">
          <div className="coaching-avatar-container">
            <img 
              src={Gab}
              className="coaching-avatar"
            />
          </div>

          <div className="coaching-info-body-container">
            <p className="body">
            <b>Gab</b> is our Pokemon VGC veteran & coach that has competed in the Pokemon World Championships twice, and has various other accolades such as winning a LatAm Regional Championship. If you are interested in Pokemon VGC coaching sessions with Gab, stay tuned for more information!
              {/* <b>Gab</b> is our Pokemon VGC veteran & coach that has competed in the Pokemon World Championships twice, and has various other accolades such as winning a LatAm Regional Championship. If you are interested in Pokemon VGC coaching sessions with Gab, email us&nbsp;
              <a
                href="mailto:teamdubwool@gmail.com?subject=VGC Coaching with Gab"
                className="coaching-email"
              >
                here
              </a>
              &nbsp;for more information. */}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-discord bg-black">
      <div
        className="section-discord-item"
      >
        <a href="https://discord.gg/4EtN3Zu">
          <img
            src={Discord}
            className="discord-logo"
          />
        </a>
      </div>
      <div
        className="section-discord-item"
      >
        <a
          href="https://discord.gg/4EtN3Zu"
          className="discord-text"
        >
          Join us on Discord!
        </a>
      </div>     
    </section>

    <section className="section bg-white">
      <div className="container">
        <h2 className="subheader black">Contact</h2>

        <p className="body black">
          For any business or other inquiries, don't hesitate to reach us! You can join the Discord and privately message <b>Professor Ragna#1337</b>, or you can contact us via e-mail at&nbsp;
          <a
            href="mailto:teamdubwool@gmail.com"
            className="team-email"
          >
            teamdubwool@gmail.com
          </a>
          .
        </p>
      </div>
    </section>

    <footer className="footer bg-black">
      Built by
      <a
        className="twitter-name"
        href="https://twitter.com/professorragna"
      >
        &nbsp;@professorragna
      </a>
    </footer>
  </div>
  </Layout>
  </>
)

export default IndexPage
