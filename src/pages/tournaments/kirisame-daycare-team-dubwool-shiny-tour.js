import React from 'react';

import { Helmet } from "react-helmet"

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TeamDubwool from '../../images/team-dubwool-v2.png';

import Image from '../../assets/tournaments/shiny-tour-1.jpeg';
import '../../assets/styles/blog-post.css';
import '../../assets/styles/index.css';
import '../../assets/styles/tournament.css';

const HolidayClashQualifier = () => (
  <Layout>
    <Helmet>
      <meta name="twitter:title" content="Kirisame Daycare + Team Dubwool Shiny Tour | Team Dubwool" /> 
      <meta name="twitter:image" content={TeamDubwool} /> 
      <meta name="twitter:card" content={TeamDubwool} />

      <meta property="og:title" content="Kirisame Daycare + Team Dubwool Shiny Tour | Team Dubwool" />
      <meta property="og:image" content={TeamDubwool} />
    </Helmet>

    <SEO
      title="Kirisame Daycare + Team Dubwool Shiny Tour | Team Dubwool"
    />

    <div class="body">
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
      </div>

      <div className="banner-daycare"></div>

      <div className="container tournament-container">
        <h1 className="title">
          Kirisame Daycare + Team Dubwool Shiny Tour
        </h1>

        <div className="tournament-section">
          Welcome to the <b>Kirisame Daycare + Team Dubwool Shiny Tour</b>! We are partnering with <a href="https://twitter.com/KirisamePDC" className="link">Kirisame Daycare</a>, where we will be hosting a 3 hour in-game ladder tournament for the VGC community. Come test out your team against fellow competitive players, and win a shiny Porygon if you are #1 by the end of the tournament!
        </div>

        <div className="tournament-section">
          <img src={Image} className="image" />
        </div>

        <div className="tournament-section">
          <b>How to Register</b><br />
          Go to "VS" -> "Battle Stadium" -> "Online Competitions" -> "Participate in a Friendly Competition" and input the above Competition ID <b>(1Y2Y0FFW0)</b> to register for the event.
        </div>

        <div className="tournament-section">
          <b>Prize</b><br />
          The #1 player will receive a Shiny Porygon, courtesy of <a href="https://twitter.com/KirisamePDC" className="link">Kirisame Daycare</a>. In order to retrieve the prize, you must contact <a href="https://twitter.com/KirisamePDC" className="link">@KirisamePDC</a> on Twitter, or join the <a href="https://discord.gg/sDpbVve4tz" className="link">Kirisame Daycare Discord</a> and message MrKarotiko or Professor Ragna.
        </div>

        <div className="tournament-section">
          Looking forward to seeing you there!
        </div>
      </div>
    </div>

    <footer className="footer bg-black">
      Built by
      <a
        className="twitter-name"
        href="https://twitter.com/professorragna"
      >
        &nbsp;@professorragna
      </a>
    </footer>
  </Layout>
);

export default HolidayClashQualifier;
