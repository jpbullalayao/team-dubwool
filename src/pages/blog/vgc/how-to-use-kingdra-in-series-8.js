import React from 'react';

import { Helmet } from "react-helmet"

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import TeamDubwool from '../../../images/team-dubwool.png';
import '../../../assets/styles/blog-post.css';
import '../../../assets/styles/index.css';

import TurtleRental from '../../../assets/misc/turtle-rental.png';
import Kartana from '../../../assets/pokemon/kartana2.png';
import Tornadus from '../../../assets/pokemon/tornadus.png';
import Incineroar from '../../../assets/pokemon/incineroar.png';
import Regieleki from '../../../assets/pokemon/regieleki2.png';
import Kyogre from '../../../assets/pokemon/kyogre.png';
import Kingdra from '../../../assets/pokemon/kingdra.png';

export const KingdraPost = () => (
  <Layout>
    <Helmet>
      <meta name="twitter:title" content="How to Use Kingdra in Series 8 | Team Dubwool" /> 
      <meta name="twitter:image" content={TeamDubwool} /> 
      <meta name="twitter:card" content={TeamDubwool} />

      <meta property="og:title" content="How to Use Kingdra in Series 8 | Team Dubwool" />
      <meta property="og:image" content={TeamDubwool} />
    </Helmet>
    <SEO
      title="How to Use Kingdra in Series 8 | Team Dubwool"
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

      <div class="container blog-post-container">
        <div class="title-section">
          <h1 className="blog-post-title">How to Use Kingdra in Series 8</h1>
          Team report by:&nbsp;
          <a
            href="https://twitter.com/turtlemania7"
            className="author"
          >
            TurtlemaniaVGC
          </a>
          &nbsp;(1/27/2021)
        </div>

        <p>Hi everyone! My name is Jeffrey though I normally go by TurtlemaniaVGC. I’m 16 years old and I’ve been playing VGC since around August 2020. I recently won the first series 8 tournament (Ninopokebros FF #20) using this early meta rain team starring a Kingdra! So I’m gonna break down 
everything you should know about this team that I have learned so far.
</p>
        <div className="blog-section">
          <h2 className="blog-post-subtitle">
            Kyogre
            <img src={Kyogre} alt="Kyogre" className="sprite medium-sprite" />
          </h2>

          <p>To anyone who has played even a bit of series 8 by now, you will be very familiar with the sheer dominance of Kyogre.</p>
        
          <p>Kyogre has some awesome base stats, with a 150spatk, 140spdef and some very reasonable stats with 100hp, 90def and 90spe. Not only does it have great stats, Kyogre has the Drizzle ability. Drizzle sets the rain which gives a 50% damage boost to its STAB water moves. The rain is also very useful both defensively and offensively, which this team will highlight later on in the report.</p>
        
          <p>Kyogre is also good because it is very threatening in and out of dynamax. With giant max geysers doing huge damage and surprisingly good bulk, Kyogre is a very viable max target. That being said, Kyogre is a very offensive pokemon and can really showcase it’s power with very strong spread water moves like Water Spout and Origin Pulse outside of dynamax.</p>

          <p>
            This is my Kyogre set:<br />
            Kyogre @ Wave Incense<br />
            Ability: Drizzle<br />  
            Level: 50<br />  
            EVs: 4 HP / 36 Def / 252 SpA / 4 SpD / 212 Spe<br />  
            Timid Nature<br />  
            IVs: 0 Atk<br />  
            - Water Spout<br />  
            - Scald<br />  
            - Ice Beam<br />  
            - Protect<br />
          </p>

          <p>My Kyogre is running the Wave Incense, which gives all water moves a 1.2x damage boost. I am using Water Spout as a way to do tons of damage when Kyogre is healthy outside of dynamax as this is a very good lead with speed control. I am running scald for when my Kyogre gets lower on HP and or runs out of dynamax. I also don’t want to be walled by Wide Guard. Ice Beam is mostly to get some good hits into some of the flying, dragon and more substantially grass pokemon in the meta. Protect is to make sure Kyogre stays healthy while setting up speed control for it.</p>

          <p>The EV spread is very simple. Your Kyogre at +1 speed will outspeed max speed jolly Pheromosa, meaning you can also outspeed stuff like Zacian, Dragapult or Adamant Scarf Landorus-T. This also gives you a tailwind speed tier to outspeed any regieleki spread in the game outside of scarf.
The extra EVs after 252spatk were mostly used on defense to round out the stats more as Kyogre already has very good spdef.
</p>

          <p>
            Some good calcs to know:
          </p>
          <p>
            <u>Defensive Calcs:</u><br />
            -1 252+ Atk Choice Band Rillaboom-Gmax Wood Hammer vs. 4 HP / 36 Def Dynamax Kyogre in Grassy Terrain: 296-350 (84 - 99.4%) -- guaranteed 2HKO after Grassy Terrain recovery (This calc obviously works the same for non-intimidated AV Rillaboom)
          </p>
        </div>

        <div className="blog-section">
          <h2 className="blog-post-subtitle">
            Kingdra
            <img src={Kingdra} alt="Kingdra" className="sprite medium-sprite"  />
          </h2>

          <p>Though Kingdra has seen moderate success in prior formats, I think this meta may be the best time to use Kingdra just because the synergy with Kyogre is so awesome.</p>

          <p>Kingdra is another great dynamax pokemon, despite having nothing special in terms of offense or defense. Water/Dragon is a great typing for most of the meta, but the real selling point for Kingdra is the ability Swift Swim. This ability doubles the speed of Kingdra in the rain, giving it a damage boost to its otherwise somewhat weak water moves and putting it in an amazing speed tier immediately after Kyogre has joined the field. </p>

          <p>
            This is my Kingdra set:<br />
            Kingdra @ Life Orb<br />  
            Ability: Swift Swim<br />  
            Level: 50<br />  
            EVs: 76 HP / 4 Def / 252 SpA / 4 SpD / 172 Spe<br />  
            Timid Nature<br />  
            IVs: 0 Atk<br />  
            - Hydro Pump<br />  
            - Draco Meteor<br />  
            - Hurricane<br />  
            - Protect<br />
          </p>

          <p>Kingdra is a really great dynamax partner (or even outside of max sometimes) with Kyogre because of the speed. Kingdra can OHKO regieleki and Rillabooms that are not running AV, and also can OHKO a lot of non-dynamaxed pokemon like Zacian.  Max Airstream also will usually move first thanks to Swift Swim, and can give you a very good way to boost the speed of Kyogre while dealing damage. Max Wyrmwind paired with Kingdras decent bulk can also be useful sometimes.</p>

          <p>Some good calcs to know:</p>

          <p>
            <u>Offensive Calcs:</u><br />
            252 SpA Life Orb Kingdra Max Airstream vs. 252 HP / 4 SpD Rillaboom-Gmax: 221-263 (106.7 - 127%) -- guaranteed OHKO<br /><br />

            252 SpA Life Orb Kingdra Max Geyser vs. 0 HP / 4 SpD Dynamax Regieleki in Rain: 320-376 (103.2 - 121.2%) -- guaranteed OHKO<br /><br />

            252 SpA Life Orb Kingdra Max Geyser vs. 0 HP / 4 SpD Zacian in Rain: 168-199 (100.5 - 119.1%) -- guaranteed OHKO<br /><br />
          </p>

          <p>
            <u>Defensive Calcs:</u><br />
            252+ Atk Choice Band Rillaboom-Gmax Grassy Glide vs. 76 HP / 4 Def Dynamax Kingdra in Grassy Terrain: 129-153 (40.3 - 47.8%) -- guaranteed 3HKO after Grassy Terrain recovery<br /><br />
            252 SpA Transistor Regieleki Thunder vs. 76 HP / 4 SpD Dynamax Kingdra: 123-145 (38.4 - 45.3%) -- guaranteed 3HKO (No offense item because the fact that they attack implies sash)
          </p>
        </div>

        <div className="blog-section">
          <h2 className="blog-post-subtitle">
            Kartana
            <img src={Kartana} alt="Kartana" className="sprite medium-sprite" />
          </h2>

          <p>Every rain team needs a grass type to help beat other bulky water types (especially Gastrodon) and I thought Kartana was the best pokemon for the job on my team. Kartana is a great pokemon to have in tailwind, can pile up beast boosts to chain many kills and can not suffer as much from it’s quadruple weakness to fire. It also provides some much needed physical damage to my primarily special attacking team.</p>

          <p>
            This is my Kartana set:<br />
            Kartana @ Assault Vest<br />
            Ability: Beast Boost<br />  
            Level: 50<br />  
            EVs: 4 HP / 4 Atk / 4 Def / 244 SpD / 252 Spe<br />  
            Jolly Nature<br />  
            - Leaf Blade<br />  
            - Smart Strike<br />  
            - Sacred Sword<br />  
            - Aerial Ace<br />
          </p>

          <p>Kartana doesn’t really have any specific calculations behind it. I wanted max speed jolly to outspeed more things in tailwind, almost max special defense plus the assault vest and rain to give it better bulk and the rest was leftover EVs. Kartana doesn’t need much atk as it has a base stat of 181, you just have to watch out for intimidates.</p>
        </div>

        <div className="blog-section">
          <h2 className="blog-post-subtitle">
            Incineroar
            <img src={Incineroar} className="sprite medium-sprite" alt="Incineroar" />
          </h2>

          <p>Incineroar is a staple of many VGC teams and plays a very important role in this one. Incineroars intimidate ability helps deal with the lower physical defense of Kyogre and some of the offense grass types like Kartana and Rillaboom. Incineroar is also very useful in the Groudon matchup thanks to the Shuca Berry I am running. Incineroar is primarily used for fake out, intimidate cycling and parting shot pivots for improving the board position against some of Kyogres checks.</p>

          <p>
            This is my Incineroar set:<br />
            Incineroar @ Shuca Berry<br />  
            Ability: Intimidate<br />  
            Level: 50<br />  
            EVs: 244 HP / 36 Atk / 4 Def / 132 SpD / 92 Spe<br />  
            Careful Nature<br />  
            - Fake Out<br />  
            - Flare Blitz<br />  
            - Darkest Lariat<br />  
            - Parting Shot<br />
          </p>

          <p>92 speed EVs is exactly enough to outspeed -spe 0IV Lunala (which is common for trick room sets) allowing Darkest Lariat or Parting Shot as options in that matchup. Having a faster than typical Incineroar will also help you win fake out wars against other Incineroars which is useful since we don’t have any faster fake out users on this team.</p>

          <p>
            Some good calcs to know:
          </p>
          <p>
            Defensive Calcs:<br />
            252 SpA Life Orb Calyrex-Shadow Max Quake vs. 244 HP / 132+ SpD Incineroar: 169-200 (84 - 99.5%) -- guaranteed 2HKO<br /><br />

            252+ SpA Life Orb Calyrex-Shadow Max Quake vs. 244 HP / 132+ SpD Incineroar: 185-218 (92 - 108.4%) -- 50% chance to OHKO<br /><br />
          </p>
        </div>

        <div className="blog-section">
          <h2 className="blog-post-subtitle">
            Regieleki
            <img src={Regieleki} className="sprite" alt="Regieleki" />
          </h2>

          <p>Regieleki has quickly become a very popular choice in this format, and it is very useful on this team. Regieleki provides us another way to deal big damage to opposing bulky water pokemon, and a different form of speed control using Electroweb. Volt Switch pivoting can also come into play for board positioning and Regieleki can even dynamax sometimes and just lay out huge electric type damage in the right matchups.</p>

          <p>
            This is my Regieleki set:<br />
            Regieleki @ Magnet<br />  
            Ability: Transistor<br />  
            Level: 50<br />  
            EVs: 4 HP / 4 Def / 252 SpA / 4 SpD / 244 Spe<br />  
            Modest Nature<br />  
            IVs: 0 Atk<br />  
            - Thunderbolt<br />  
            - Volt Switch<br />  
            - Electroweb<br />  
            - Protect<br />
          </p>

          <p>The set is designed to make Regieleki hit as hard as possible while still keeping the ability to use Protect as it is a very frail pokemon (Be careful as some dynamax pokemon will just kill it through Protect after stat boosts). The 244 EVs in speed are to outspeed base 100 pokemon that have a +1 speed boost, so for example this Regieleki will be faster than an opposing Zapdos that has just used Max Airstream.</p>
        </div>

        <div className="blog-section">
          <h2 className="blog-post-subtitle">
            Tornadus
            <img src={Tornadus} className="sprite medium-sprite" alt="Tornadus" />
          </h2>

          <p>Tornadus is a really popular teammate for Kyogre and rounds out this team very well. Having access to tailwind and taunt gives the team a lot more utility options, and with pokemon like Regieleki and Kingdra paired with tailwind you have some of the literal fastest combos imaginable in competitive VGC. Tornadus is also a great lead pokemon directly with Kyogre where you can immediately get speed control and let Kyogre just absolutely tear into things with dynamax or water spout immediately.
Hurricane also does really solid damage to many threatening grass pokemon and opens the potential for confusion RNG to improve certain positions. Overall a phenomenal support pokemon for this team.
</p>

          <p>
            This is my Tornadus set:<br />
            Tornadus (M) @ Focus Sash<br />  
            Ability: Prankster<br />  
            Level: 50<br />  
            EVs: 4 HP / 252 SpA / 252 Spe<br />  
            Timid Nature<br />  
            IVs: 0 Atk<br />  
            - Hurricane<br />  
            - Tailwind<br />  
            - Taunt<br />  
            - Protect<br />
          </p>

          <p>While many people would opt for Rain Dance in that 4th slot for better weather control, I actually prefer Protect. Having both the Focus Sash and Protect allows Tornadus a very consistent way to get up the Tailwind even if the opponent leads an aggressive dynamax paired with Fake Out pressure. I will generally just switch Kyogre out or use Max Geyser or Max Hailstorm to change the weather to my liking.</p>
        </div>

        <div className="blog-section">
          <h2 className="blog-post-subtitle">Final Thoughts</h2>

          <p>Although rain is certainly counterable, it is a very balanced archetype and I really like the offensive qualities Kingdra can highlight from it. Kyogre will be and already is beginning to be an extremely meta dictative pokemon and I think that Kingdra is a great way to deal with many of those threats.</p>

          <p>
            That pretty much concludes my team report! If you want to see some of the pokemon in action and hear a little bit more about my experiences in the tournament as well as a more raw thought process into this team, I highly recommend my <a href="https://www.youtube.com/watch?v=fksXzCe8ffY&lc=Ugyscu4BzMRVl1cjYbx4AaABAg&ab_channel=TurtleManiaVGC" className="link">team report video</a> if you haven’t seen it already!
          </p>

          <div class="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fksXzCe8ffY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <br />
          <p>As always, here is the rental code so you can try out the team for yourself and check out the pokepaste incase you want to run any calcs of your own.</p>

          <img src={TurtleRental} alt="Turtle Rental" className="rental" />
          <a href="https://pokepast.es/6bf92d91f66ee437" className="link" target="_blank">https://pokepast.es/6bf92d91f66ee437</a>
          <br /><br />
          <p>
            See also:&nbsp;
            <a href="https://www.teamdubwool.com/blog/vgc/nut-cracker-how-to-beat-nut-core-in-pokemon-vgc/" className="link" target="_blank">
              The NUT Cracker (How to Beat the NUT Core in Pokemon VGC)
            </a>
          </p>

          <br /><br />
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

export default KingdraPost;
