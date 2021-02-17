import React from 'react';

import { Helmet } from "react-helmet"

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TeamDubwool from '../../images/team-dubwool.png';

import Echo from '../../assets/roster/echo.jpg';
import Pride from '../../assets/roster/pride2.png';
import Turtle from '../../assets/roster/turtlemania.jpeg';
import Midori from '../../assets/roster/midori2.png';

import '../../assets/styles/blog-post.css';
import '../../assets/styles/index.css';

export const EchoPrideMidoriTurtleJoinDubwool = () => (
  <Layout>
    <Helmet>
      <meta name="twitter:title" content="Echo Rose, Pride, Midori, and TurtleMania Join Dubwool | Team Dubwool" /> 
      <meta name="twitter:image" content={TeamDubwool} /> 
      <meta name="twitter:card" content={TeamDubwool} />

      <meta property="og:title" content="Echo Rose, Pride, Midori, and TurtleMania Join Dubwool | Team Dubwool" />
      <meta property="og:image" content={TeamDubwool} />
    </Helmet>

    <SEO
      title="Echo Rose, Pride, Midori, and TurtleMania Join Dubwool | Team Dubwool"
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

      <div className="container blog-post-container">
        <div className="title-section">
          <h1 className="blog-post-title">Echo Rose, Pride, Midori, and TurtleMania Join Team Dubwool!</h1>
        </div>

        <div className="class-players">
          <div className="class-player">
            <img src={Echo} className="class-avatar" />
          </div>

          <div className="class-player">
            <img src={Pride} className="class-avatar" />
          </div>

          <div className="class-player">
            <img src={Midori} className="class-avatar" />
          </div>

          <div className="class-player">
            <img src={Turtle} className="class-avatar" />
          </div>
        </div>

        <p>
          Team Dubwool is excited to introduce to you the newest class of Pokemon VGC/TCG players and content creators that have joined our team the past couple months! Welcome to the team, <b>Echo Rose, PrideVGC, Midori,</b> and <b>TurtlemaniaVGC!</b>
        </p>

        <div className="blog-section">
          <h2>Echo Rose</h2>

          <p>Echo began playing competitive Pokemon casually since high school,  but first became integrated into Pokemon VGC when Wolfey announced and organized the Champion's Cup in 2020. Since competing in that tournament, Echo has become more involved in the VGC scene, where he has won and placed very well in grassroots tournaments such as the Rose Tower (Top 25 in the Rose Tower LCQ), Team Dubwool Tournaments (Champion of one, and Top 4-5 placements), and others. Echo also provides VGC coaching to other players in the community, and helps organize tournaments for Team Dubwool. </p>

          <p>Besides Pokemon, Echo is interested in trying to speedrun other video games in the future.</p>

          <p>
            You can find Echo primarily on Twitter:&nbsp;
            <a href="https://twitter.com/echo_rose" className="link" target="_blank">@echo_rose</a>
          </p>
        </div>

        <div className="blog-section">
          <h2>PrideVGC</h2>

          <p>Pride became interested in VGC during Pokemon ORAS, where he was inspired primarily by Aaron Zheng's (<a href="https://youtube.com/user/CybertronProductions" className="link" target="_blank">CybertronVGC</a>) videos. Pride then began playing VGC in mid-2020, and eventually grew to like the competitive scene after placing 2nd in his first tournament hosted by Team Dubwool. Pride has also placed Top 2 and Top 5 in subsequent tournaments hosted by Team Dubwool.</p>

          <p>Pride also competes in Super Smash Bros. Ultimate, where he entered local tournaments before the pandemic. Since then, he has continued to play Smash and mains Toon Link.</p>

          <p>You can find Pride at the following socials:</p>

          <p>
            Twitter:&nbsp;
            <a href="https://twitter.com/PrideVGC" className="link" target="_blank">@PrideVGC</a>
          </p>

          <p>
            Twitch:&nbsp;
            <a href="https://twitch.tv/PrideVGC" className="link" target="_blank">PrideVGC</a>
          </p>
        </div>

        <div className="blog-section">
          <h2>Midori</h2>

          <p>Midori is a VTuber and a Pokemon VGC and TCG veteran, having played TCG since Summer 2011 (beginning with a Reshiram + Emboar deck) and VGC since Fall 2013 (starting with weather archetypes). She has top cut both VCG and TCG regionals; obtained Top 64 at VGC internationals, Top 32 in TCG regionals, and Top 8 in VGC regionals. More recently, she also participated in the recent Women's Tournament II and placed at Top 8 of the event.</p>

          <p>Midori mostly competes only in Pokemon VGC, however each generation she tends to return to TCG for a bit and is aiming to top cut TCG in Players Cup 4 or 5.</p>

          <p>You can find Midori at the following socials:</p>

          <p>
            Twitter:&nbsp;
            <a href="https://twitter.com/midorinekonya" className="link" target="_blank">@midorinekonya</a>
          </p>

          <p>
            Twitch:&nbsp;
            <a href="https://twitch.tv/MidoriNekoNya" className="link" target="_blank">MidoriNekoNya</a>
          </p>

          <p>
            YouTube:&nbsp;
            <a href="http://midori.video" className="link" target="_blank">Midori Ch. 小鳥遊 緑</a>
          </p>
        </div>

        <div className="blog-section">
          <h2>TurtleManiaVGC</h2>

          <p>TurtleMania has enjoyed the Pokemon series for several years but started playing competitively in August 2020. Since he started playing competitively, he began creating video and written guides of various topics for the general VGC community, ranging from team building for each series, to battle replays, to team reports for tournaments that he won. Some achievements of his include winning the first Series 8 tournament for Pokemon Sword/Shield hosted by <a href="https://twitter.com/NinoPokeBros" className="link" target="_blank">NinoPokeBros</a>, achieving 2nd in the Battle of Legends tournament hosted by Team Dubwool, as well as receiving Top 250 on the Series 7 Ranked Ladder.</p>

          <p>While he competes in Pokemon primarily, he also enjoys playing rhythm games at a high level such as osu!.</p>

          <p>You can find TurtleMania at the following socials:</p>

          <p>
            Twitter:&nbsp;
            <a href="https://twitter.com/TurtleMania7" className="link" target="_blank">@TurtleMania7</a>
          </p>

          <p>
            Twitch:&nbsp;
            <a href="https://twitter.com/turtlemaniavgc" className="link" target="_blank">turtlemaniavgc</a>
          </p>

          <p>
            YouTube:&nbsp;
            <a href="https://www.youtube.com/channel/UCjTfasxesGbtcZgU0A7uMbA" className="link" target="_blank">TurtleManiaVGC</a>
          </p>
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
);

export default EchoPrideMidoriTurtleJoinDubwool;
