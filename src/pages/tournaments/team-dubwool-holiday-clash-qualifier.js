import React from 'react';

import { Helmet } from "react-helmet"

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TeamDubwool from '../../images/team-dubwool.png';
// import Banner from '../../../assets/tournaments/crown-tundra.jpg';
import '../../assets/styles/blog-post.css';
import '../../assets/styles/index.css';
import '../../assets/styles/tournament.css';

const HolidayClashQualifier = () => (
  <Layout>
    <Helmet>
      <meta name="twitter:title" content="Team Dubwool Holiday Clash Qualifier | Team Dubwool" /> 
      <meta name="twitter:image" content={TeamDubwool} /> 
      <meta name="twitter:card" content={TeamDubwool} />

      <meta property="og:title" content="Team Dubwool Holiday Clash Qualifier | Team Dubwool" />
      <meta property="og:image" content={TeamDubwool} />
    </Helmet>

    <SEO
      title="Team Dubwool Holiday Clash Qualifier | Team Dubwool"
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

      <div className="banner"></div>

      <div className="container tournament-container">
        <h1 className="title">Team Dubwool Holiday Clash Qualifier</h1>

        <div className="tournament-section">
          <i>
            Sign up here on
            <a
              href="https://battlefy.com/team-dubwool-vgc-league/team-dubwool-holiday-clash-qualifier/5fcd87f571dc7e6e94a1a66a/info?infoTab=details"
              className="link"
            >
              &nbsp;Battlefy
            </a>.
          </i>
        </div>

        <div className="tournament-section">
          Welcome to the <b>Team Dubwool Holiday Clash Qualifier</b>! This is a friendly Pokemon Sword/Shield VGC competition featuring members of the Team Dubwool stream / Discord community, as well as friends and the general VGC community in which the top 8 competitors in this tournament will receive invites to participate in a <b>Holiday Clash</b> tournament on <b>Sunday, Dec 20</b> (North America, time TBD, Battlefy link TBA), which will be a ~32 person invite-only tournament organized by fellow VGC streamers Paige6ixx, YoungsterJazz, NinoPokeBros, Neku, ProfessorRagna & Gab_Chwan.
        </div>

        <div className="tournament-section">
          <b>Important Dates:</b><br />
          1. Swiss Rounds (Saturday, 12/12/2020 @ 9am PST)<br />
          2. Top 8 Single Elimination (Sunday, 12/13/2020 @ 9am PST)<br />
        </div>


        <div className="tournament-section">
          <b>Prizes:</b><br />
          Top 8 competitors receive invites to participate in an upcoming Holiday Clash tournament on Sunday, Dec 20 (North America, time TBD, Battlefy link TBA), which will be a ~32 person invite-only tournament organized by fellow VGC streamers Paige6ixx, YoungsterJazz, NinoPokeBros, Neku, Professor Ragna & Gab_Chwan.
        </div>

        <div className="tournament-section">
          <b>Please do the following before tournament check-in:</b><br />
          1. Join the Team Dubwool community at https://discord.gg/4EtN3Zu and go to #tournament-roles to stay up-to-date with this tour, but also future tournament announcements.          
        </div>

        <div className="tournament-section">
          All games will be played on the Pokemon Sword & Shield carts (i.e. no pokemonshowdown.com).<br /><br />
          <b>Rules / Format:</b><br />
          - Swiss Rounds on Day 1, best of 3 sets, with a Top 8 Cut bracket beginning at 9am PST the following day<br />
          - Teams must comply with VGC Series 7 rules, be sure to download it in-game by going to VS -> Battle Stadium -> Download Rules<br />
          - Players submit their own scores via Battlefy<br />
          - Rental teams are allowed<br />
          - You CANNOT switch teams mid-competition; you must use the exact same team each round<br />
          - Please take screenshots of your game results after each game, in order to make it easier for admins to resolve disputes
        </div>

        <div className="tournament-section">
          Within an hour before the tournament begins, check-in will open. Be sure to check in to the tournament here, otherwise you will not be able to be paired with an opponent in the tournament system.
        </div>

        <div className="tournament-section">
          <i>
            Sign up here on
            <a
              href="https://battlefy.com/team-dubwool-vgc-league/team-dubwool-holiday-clash-qualifier/5fcd87f571dc7e6e94a1a66a/info?infoTab=details"
              className="link"
            >
              &nbsp;Battlefy
            </a>.
          </i>
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