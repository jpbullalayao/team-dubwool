import React from 'react';

import { Helmet } from 'react-helmet';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TeamDubwool from '../../images/team-dubwool.png';

import Ragna from '../../assets/roster/ragna.jpg';

import Twitter from '../../assets/misc/twitter.png';
import Twitch from '../../assets/misc/twitch.png';
import '../../assets/styles/index.css';
import '../../assets/styles/profile.css';

const ProfessorRagna = () => (
  <>
    <Helmet>
      <meta name="twitter:title" content="Professor Ragna | Team Dubwool" /> 
      <meta name="twitter:image" content={TeamDubwool} /> 
      <meta name="twitter:card" content={TeamDubwool} />

      <meta property="og:title" content="Professor Ragna | Team Dubwool" />
      <meta property="og:image" content={TeamDubwool} />
    </Helmet>
    <SEO
      title="Professor Ragna | Team Dubwool"
      description="Professor Ragna's VGC profile and accomplishments"
    />
    <Layout>
      <div className="profile-page-container">
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
        <div className="container profile-container profile-body">
          <div className="profile-section section-overview">
            <div className="avatar-container">
              <img
                src={Ragna}
                alt="Professor Ragna"
                className="profile-avatar"
              />
            </div>
            <div className="overview-container">
              <div className="overview-subcontainer">
              <h1 className="profile-name">Professor Ragna</h1>
              <div className="socials-container">
                <ul className="socials-list">
                  <li>
                    <a href="https://twitch.tv/ProfessorRagna" target="_blank" className="social link">
                      <img src={Twitch} className="social-icon" />
                      ProfessorRagna
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/professorragna" target="_blank" className="social link">
                      <img src={Twitter} className="social-icon" />
                      @professorragna
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cp-container">
                <div className="cp">
                  <span className="cp-title">Season CP:</span> 4/?
                </div>
                <div className="cp">
                  <span className="cp-title">Lifetime CP:</span> 4
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="profile-section section-about-me">
            <h2 className="profile-section-header">About</h2>
            <p>Hello! I'm Professor Ragna and I've been playing Pokemon VGC since January 2020.</p>
            <p>I have had only one local tournament experience here in the Bay Area before the pandemic started, where I had a ton of fun but finished an unimpressive 1-4 with a team built around Dubwool. Afterwards, I began to stream on Twitch during my free time, and it was through the community that I built there that I became more integrated into the VGC community and became a much better player over time.</p>
            <p>Eventually, I'm looking forward to attending local and regional tournaments when they open up again, make some new friends, and hope to have my first Worlds experience soon.</p>
            <p>Until then, I'm primarily an online content creator where I am building the Team Dubwool community as a credible source of VGC content (via the website, Discord, Twitch, etc) that I hope you as a VGC player find useful and insightful.</p>
            <p>Besides Pokemon, I have a wide variety of interests that range from Final Fantasy games, to anime, to basketball, and many other things. Feel free to follow me at my socials!</p>
          </div>

          <div className="profile-section section-achievements">
            <h2 className="profile-section-header">Achievements</h2>
            <div className="achievements-groups">
              <div className="achievements-group">
                <ul className="achievements-list">
                  <li>
                    <span className="event-name">X9 Championships 2&nbsp;</span>
                    <span className="event-year">(2021)&nbsp;</span>
                    <span className="event-result">- Top 21</span>
                  </li>
                  <li>
                    <span className="event-name">TexasVGC Winter Major&nbsp;</span>
                    <span className="event-year">(2020)&nbsp;</span>
                    <span className="event-result">- Top 16</span>
                  </li>
                  <li>
                    <span className="event-name">TexasVGC Season 2&nbsp;</span>
                    <span className="event-year">(2020)&nbsp;</span>
                    <span className="event-result">- Top 2</span>
                  </li>
                  <li>
                    <span className="event-name">Team Dubwool Battle of Legends Friendly&nbsp;</span>
                    <span className="event-year">(2020)&nbsp;</span>
                    <span className="event-result">- Winner</span>
                  </li>
                  <li>
                    <span className="event-name">Comic-Con@Home Day 1&nbsp;</span>
                    <span className="event-year">(2020)&nbsp;</span>
                    <span className="event-result">- Winner</span>
                  </li>
                </ul>
              </div>

              <div className="achievements-group">
                <ul className="achievements-list">
                  <li>
                    <span className="event-name">ATX Turkey Tour</span>
                    <span className="event-year">(2020)&nbsp;</span>
                    <span className="event-result">- Winner</span>
                  </li>
                  <li>
                    <span className="event-name">Pokemon Labs Friendly #32&nbsp;</span>
                    <span className="event-year">(2020)&nbsp;</span>
                    <span className="event-result">- Winner</span>
                  </li>
                  <li>
                    <span className="event-name">Pokemon Labs Friendly #29&nbsp;</span>
                    <span className="event-year">(2020)&nbsp;</span>
                    <span className="event-result">- Winner</span>
                  </li>
                  <li>
                  <span className="event-name">Pokemon Labs Friendly #15&nbsp;</span>
                    <span className="event-year">(2020)&nbsp;</span>
                    <span className="event-result">- Winner</span>
                  </li>
                </ul>
              </div>
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
      </div>
    </Layout>
  </>
);

export default ProfessorRagna;
