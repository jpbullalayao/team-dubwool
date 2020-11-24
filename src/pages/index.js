import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../assets/styles/index.css';
import TeamDubwool from '../images/team-dubwool.png';
import Discord from '../images/discord.png';

const IndexPage = () => (
  // <Layout>
  <div className="bg">    
    <div className="container bg">
      <div className="cell">
        <img
          src={TeamDubwool}
          className="logo"
        />
      </div>
      <div className="cell">
        <div className="team-name">
          Team Dubwool
        </div>
      </div>

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
  </div>
  // </Layout>
)

export default IndexPage
