import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../assets/styles/index.css';
import TeamDubwool from '../images/team-dubwool.png';
import Discord from '../images/discord.png';

import Brain from '../assets/roster/brain.png';
import Echo from '../assets/roster/echo.jpg';
import Gab from '../assets/roster/gab.jpg';
import Justin from '../assets/roster/justin.png';
import MrPig from '../assets/roster/mrpig.png';
import Muk from '../assets/roster/muk.jpg';
import Pride from '../assets/roster/pride.png';
import Ragna from '../assets/roster/ragna.jpg';

const IndexPage = () => (
  // <Layout>
  <div className="bg">
    <nav className="nav">
      <a href="#" className="logo-container">
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

    <section className="section bg-white">
      <div className="container">
        <h2 className="subheader black">
          About
        </h2>

        <p className="body">
          Team Dubwool is a gaming community with an esports organization competing in Pokemon Sword & Shield. We are focused on growing the community by providing support & mentorship to community streamers & competitive players, and hosting tournaments to grow each other's skillsets and help each other become better competitive players.
        </p>
      </div>
    </section>

    <section className="section bg-black white">
      <div className="container">
        <h2 className="subheader white">
          Roster
        </h2>

        <div className="roster">
          <div className="roster-row">
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

            <div className="team-member">
              <img 
                src={Ragna}
                className="avatar"
              />
              <h3 className="team-member-name">
                Professor Ragna
              </h3>
            </div>
          </div>

          <div className="roster-row">
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
                src={Gab}
                className="avatar"
              />
              <h3 className="team-member-name">
                Gabu
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-white">
      <div className="container">
        <h2 className="subheader black">
          Coaching
        </h2>
      </div>
    </section>

    {/* <div className="container"> */}
      {/* <div className="cell">
        <img
          src={TeamDubwool}
          className="logo"
        />
      </div>
      <div className="cell">
        <h1 className="team-name">
          Team Dubwool
        </h1>
      </div> */}

      <section
        className="section-discord"
      >
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

      <footer className="footer">
        Built by
        <a
          className="twitter-name"
          href="https://twitter.com/professorragna"
        >
          &nbsp;@professorragna
        </a>
      </footer>
    </div>
  // </div>
  // </Layout>
)

export default IndexPage
