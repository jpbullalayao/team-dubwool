import React from "react"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../assets/styles/index.css';
import TeamDubwool from '../images/team-dubwool-v2.png';
import Discord from '../images/discord.png';

import favicon from '../images/favicon.ico';
import Brain from '../assets/roster/brain.png';
import Echo from '../assets/roster/echo.jpg';
import Gab from '../assets/roster/gab.jpg';
import Midori from '../assets/roster/midori2.png';
import MrPig from '../assets/roster/mrpig.png';
import Muk from '../assets/roster/muk.jpg';
import Pride from '../assets/roster/pride.png';
import Ragna from '../assets/roster/ragna.jpg';
import Turtle from '../assets/roster/turtlemania.jpeg';

import GGST from '../assets/games/ggst.png';
import SSBU from '../assets/games/ssbu.png';
import SWSH from '../assets/games/swsh.png';

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
          Team Dubwool is a gaming community with an esports organization competing in Pokemon Sword & Shield, Guilty Gear -Strive-, and SSBU. We are focused on not only competing in tournaments at the highest level, but also growing the community by providing support & mentorship to community streamers & competitive players, and hosting tournaments to grow each other's skillsets and help each other become better competitive players. At the same time, we enjoy creating content and resources for the general gaming community to enjoy and learn from.
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
                Eni Guma
              </h3>
            </div>

            <div className="team-member">
              <img 
                src={Turtle}
                className="avatar"
              />
              <h3 className="team-member-name">
                TurtleManiaVGC
              </h3>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>

    <section className="section bg-white">
      <div className="container">
        {/* <h2 className="subheader black">
          Games
        </h2> */}

        <div className="games">
          <div
            className="game-image-container"
          >

          <img
            src={GGST}
            className="game-image"
          />
          </div>

          <div
            className="game-image-container"
          >
          <img
            src={SWSH}
            className="game-image"
          />
          </div>

          <div
            className="game-image-container"
          >
          <img
            src={SSBU}
            className="game-image"
          />
          </div>
        </div>
      </div>
    </section>

    <section className="section section-discord bg-black">
      <div
        className="section-discord-item"
      >
        <a href="https://discord.gg/zHTWnhqm3y">
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
          href="https://discord.gg/zHTWnhqm3y"
          className="discord-text"
        >
          Join us on Discord!
        </a>
      </div>     
    </section>

    {/* <section className="section bg-white">
      <div className="container">
        <h2 className="subheader black">
          Coaching
        </h2>

        <div className="coaching-info-container">
          <div className="coaching-avatar-container">
            <img 
              src={Echo}
              className="coaching-avatar"
            />
          </div>

          <div className="coaching-info-body-container">
            <p className="body">
              Are you a new Pokemon VGC player looking to learn the ropes of high competitive play? Are you a seasoned VGC player looking to gather new insight and perspectives for Series 8 on team building, decision making, and other aspects of VGC? Our own <b>Echo Rose</b> offers coaching sessions to all types of players for only <b>$8</b> an hour. If you are interested in learning more, feel free to contact us&nbsp;
              <a href="mailto:teamdubwool@gmail.com?subject=VGC Coaching with Echo" className="link">here</a>, and we'll be happy to help! Or, you can contact him on social:<br />
            </p>

            <p className="body">
              Twitter:&nbsp;
              <a href="https://twitter.com/echo_rose" className="link" target="_blank">
                @echo_rose
              </a>
            </p>
          </div>
        </div>

        <br />
        <br />

        <div className="coaching-info-container">
          <div className="coaching-avatar-container">
            <img 
              src={Turtle}
              className="coaching-avatar"
            />
          </div>

          <div className="coaching-info-body-container">
            <p className="body">
              Are you a beginner to VGC looking for some guidance? An intermediate player looking to take your game to the next level? A well seasoned player looking to sharpen your skills and explore new ideas? No matter what skill you are, coaching can help! For just <b>$8</b> an hour, <b>Turtlemania</b> will provide you with tailored lessons on teambuilding, threat recognition, replay analysis and other VGC skills! If you are interested in learning more, please email us&nbsp;
              <a href="mailto:teamdubwool@gmail.com?subject=VGC Coaching with Turtlemania" className="link">here</a> or contact him on either of the following:<br />
            </p>

            <p className="body no-margin">
              Discord: TurtleMania#0744<br />
              Twitter:&nbsp;
              <a href="https://twitter.com/Turtlemania7" className="link" target="_blank">
                @Turtlemania7
              </a>
            </p>
          </div>
        </div> 
      </div>
    </section> */}

    <section className="section bg-white">
      <div className="container">
        <h2 className="subheader black">Contact</h2>

        <p className="body black">
          For any business or other inquiries, don't hesitate to reach us! You can join the Discord and privately message <b>Professor Ragna#1337</b>, or you can contact us via e-mail at&nbsp;
          <a
            href="mailto:teamdubwool@gmail.com"
            className="team-email black"
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
