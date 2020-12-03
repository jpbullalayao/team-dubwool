import React from 'react';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import TeamDubwool from '../../../images/team-dubwool.png';
import '../../../assets/styles/blog-post.css';
import '../../../assets/styles/index.css';

import Clefairy from '../../../assets/pokemon/clefairy.png';
import Cresselia from '../../../assets/pokemon/cresselia.png';
import Dragapult from '../../../assets/pokemon/Dragapult.png';
import Fini from '../../../assets/pokemon/fini.png';
import GastrodonWest from '../../../assets/pokemon/gastro-pink.png';
import GastrodonEast from '../../../assets/pokemon/gastro-blue.png';
import Grimmsnarl from '../../../assets/pokemon/grimmsnarl.png';
import Kartana from '../../../assets/pokemon/kartana.png';
import Koko from '../../../assets/pokemon/koko.png';
import Mamoswine from '../../../assets/pokemon/mamoswine.png';
import Metagross from '../../../assets/pokemon/metagross.png';
import Moltres from '../../../assets/pokemon/moltres-g.png';
import Nihilego from '../../../assets/pokemon/nihilego.png';
import Raichu from '../../../assets/pokemon/raichu.png';
import Regieleki from '../../../assets/pokemon/regieleki.png';
import Regirock from '../../../assets/pokemon/regirock.png';
import Rhyperior from '../../../assets/pokemon/rhyperior.png';
import RotomHeat from '../../../assets/pokemon/rotom-h.png';
import Spectrier from '../../../assets/pokemon/spectrier.png';
import Thundurus from '../../../assets/pokemon/thundurus.png';
import Torkoal from '../../../assets/pokemon/torkoal.png';
import Urshifu from '../../../assets/pokemon/urshifu.png';
import Venusaur from '../../../assets/pokemon/venusaur.png';

export const Post = () => (
  <Layout>
    <SEO
      title="The NUT Cracker (How to Beat the NUT Core in Pokemon VGC) | Team Dubwool"
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
        <h1 className="blog-post-title">The NUT Cracker (How to Beat the NUT Core in Pokemon VGC)</h1>
        Written by:&nbsp;
        <a
          href="https://twitter.com/echo_rose"
          className="author"
        >
          Echo Rose
        </a>
        &nbsp;(12/2/2020)
      </div>

      <p>So, the NUT core. Even if you haven’t heard of it’s admittedly ridiculous acronym, you’ve almost certainly seen the core in some capacity - Nihilego, Urshifu, and Thundurus. This is a hyper offensive core that covers its own bases relatively well, but there are a few things that give NUT cores trouble. Before we get into that, let’s instead look at the common items and moves on these three Pokemon, as well as what to expect when facing them, and the Pokemon that commonly accompany them into battle.</p>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          N - Nihilego
          <img src={Nihilego} alt="Nihilego" className="sprite" />
        </h2>

        <p>
          Nihilego @ Power Herb<br />
          Ability: Beast Boost<br />
          Level: 50<br />
          EVs: 4 HP / 252 SpA / 252 Spe<br />
          Timid Nature<br />
          IVs: 0 Atk<br />
          - Meteor Beam<br />
          - Power Gem<br />
          - Sludge Bomb<br />
          - Protect<br />
        </p>

        <p>
        Certainly an offensive threat in it’s own right (even more so now thanks to the introduction of it’s Isle of Armor tutor move, Meteor Beam, which, in tandem with the Power Herb, allows Nihi a 120 base power Rock move at +1 Special Attack), this Pokemon struggles heavily against any Pokemon that can live a hit and retaliate with a physical attack. It struggles even more against Ground types, which resist it’s dual STABs. This seems a bit odd, considering it’s access to Grass Knot, but according to Pikalytics, Grass Knot isn’t used on any Nihilego, at all. Why is that, you might ask? I have 2 theories. The first is that the typical Nihilego moveset doesn’t have room for variation - Meteor Beam is an immediate power boost without requiring a Dynamax, Power Gem is to be used once your Power Herb has been depleted so that you have a one turn Rock move, and Sludge Bomb is for Dynamax, since Max Ooze is a free Special Attack boost as well. Protect is standard on any VGC mon not holding a Choice item or an Assault Vest.
        </p>

        <p>My second theory is that moves like Grass Knot and Heavy Slam suffer in a Dynamax format, since they lack the ability to damage Dynamax Pokemon at all. Weight based moves don’t have any effect on Maxed mons, and so if your opponent has a Rhyperior that would almost certainly be OHKOed by Grass Knot, they become immune to such a move simply by Dynamaxing. Not only does Nihilego not have room for Grass Knot in its’ standard set, but I believe that most Nihi users feel as if a potential Grass Knot moveslot could be better utilized, and to be honest, I agree. The standard moveset is standard for a reason - each move has its purpose.</p>

        <p>Nihi is also surprisingly fast, able to outspeed common meta threats such as Galarian Moltres, Rotom-Heat and Zapdos. With a +1 Meteor Beam, it can deal a hefty chunk to all of these Pokemon - 65% minimum to Dynamax Galarian Moltres, a whopping 90% to JoeUX9’s Rotom Heat when Dynamaxed, and almost always scoring an OHKO against 252 Speed / 252 Special Attack Zapdos, even when Dynamaxed.</p>

        <p>Nihilego serves as a phenomenal breaker for the NUT core, and it’s not to be underestimated. But where it’s weaknesses shine through, it’s partners pick up the pieces.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          U - Urshifu
          <img src={Urshifu} alt="Urshifu" className="sprite" />
        </h2>
        <p>
          Urshifu (Single Strike) @ Choice Band/Focus Sash<br />
          Ability: Unseen Fist<br />
          Level: 50<br />
          EVs: 252 Atk / 4 SpD / 252 Spe<br />
          Jolly Nature<br />
          - Wicked Blow<br />
          - Close Combat<br />
          - Sucker Punch<br />
          - Poison Jab/Protect<br />
        </p>

        <p>While both of these items are common, I’ve seen many, many more Choice Banded Urshifu on NUT cores than I have Focus Sash. However, I do think it’s important to note that since it can be either item, a bit of caution is advised - if you assume Band and attack into it and it lives on a Sash, that could potentially be bad news.</p>

        <p>Urshifu’s strength comes from its raw damage output, and from the fact that it doesn’t need Dynamax to be a threat. In fact, out of the NUT core, it is the least likely Dynamax candidate, and that can be accredited to how much pure power this Pokemon possesses. With a Choice Band and the speed boosts provided by it’s partner Thundurus through the use of Max Airstreams, it can blow through entire teams with minimal effort. Wicked Blow always results in a critical hit, and a lot of the Pokemon that would like to switch into such a Dark type attack will be hit far too hard by Close Combat for comfort. It exerts so much offensive presence alongside Thundurus because Urshifu’s most reliable counters are Fairy types, who resist both of it’s powerful STAB moves, and the most common Fairy type is Tapu Fini, who gets blown out of the water by Thundurus’ STAB Max Lightnings unless it chooses to Dynamax. On top of this, if the Urshifu is Choice Banded, you can almost guarantee that it’s final moveslot will be Poison Jab to deal with that very threat. If it is Sash, it is forced to choose between Poison Jab and Sucker Punch.</p>

        <p>The final reason that Urshifu is terrifying is it’s ability to hit through Protect with it’s signature ability, Unseen Fist. Dynamax moves also hit through Protect, but only for 25% of their original damage. Urshifu ignores Protect completely (with the caveat that only it’s contact moves have this effect, but that doesn’t mean much when all of it’s common moves are contact moves), and it’s moves hit for the full damage that they would otherwise hit for, meaning that Protect, which is generally seen as one of the premier defensive options in a VGC format, is completely negated. If it launches an attack at you, the only 100% effective way to block it is to Dynamax and Max Guard, but wasting your Dynamax for a single turn of ignoring Urshifu is usually seen as a poor decision, seeing as how if your partner is KOed in the process, then you are right back to square one, but minus a Pokemon.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          T - Thundurus
          <img src={Thundurus} alt="Thundurus" className="sprite" />
        </h2>

        <p>
          Thundurus (M) @ Life Orb<br />
          Ability: Defiant<br />
          Level: 50<br />
          EVs: 252 Atk / 4 SpD / 252 Spe<br />
          Jolly Nature<br />
          - Wild Charge<br />
          - Fly<br />
          - Superpower<br />
          - Protect<br />
        </p>

        <p>The reason that this core is as scary as it is comes from one Pokemon, and it’s this one. Defiant makes Intimidate, which usually cripples physical attackers, almost completely worthless, since you will instead give Thundurus an attack boost. Plus, Urshifu’s signature move, Wicked Blow, ignores the effects of Intimidate entirely, making Intimidate a far cry from an answer to NUT.</p>

        <p>Thundurus lacks a bit in damage output, but that is made up for by it’s partner in crime, Urshifu, who, as we discussed, is a veritable powerhouse. Thundurus’ main job is to deal with Urshifu’s bane, Tapu Fini, and provide speed boosts to Urshifu, who’s speed tier leaves it vulnerable to the likes of Zapdos, Kartana, and basically any base 100+ speed Pokemon. Thundurus, however, has a base speed of 111, which makes it a very viable candidate to outspeed those Pokemon and give Urshifu the speed boost it requires to go to town on the opposing team.</p>

        <p>Thundurus’ Flying typing isn’t just good for helping boost Urshifu, though. If played correctly, a Ground move can be baited into Nihilego, who can switch and utilize Thundurus’ Flying typing to float over what would surely have led to Nihi’s demise.</p>

        <p>This core has seen success through overpowering an opposing team and using defensive switches to position an endgame win condition - usually Urshifu, who runs even more rampant once it’s counters have been dealt with. But what can stop this core? Fear not, Trainer, for there are certainly options.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          Regirock
          <img src={Regirock} alt="Regirock" className="sprite" />
        </h2>

        <p>
          Regirock @ Leftovers<br />
          Ability: Clear Body<br />
          Level: 50<br />
          EVs: 252 HP / 140 Atk / 76 Def / 36 SpD<br />
          Relaxed Nature<br />
          IVs: 0 Spe<br />
          - Rock Slide<br />
          - Stomping Tantrum/Iron Head<br />
          - Body Press<br />
          - Curse<br />
        </p>

        <p>Regirock - as surprising as it may be - is actually a fabulous answer to the NUT core and it’s shenanigans. (I have my friend Gab to thank for this idea. She is @Gab_Chwan on Twitter. Give her a follow!) It’s typing may not be the best, but it feels as if the NUT core simply cannot deal enough damage to Regirock to secure the KO. Allow me to demonstrate:</p>

        <p>
          <b>252 Atk Life Orb Thundurus Max Knuckle vs. 252 HP / 76+ Def Dynamax Regirock: 62-75 (16.5 - 20%) -- possible 5HKO</b>
        </p>

        <p>Here is the first attack that Regirock will have to stomach - but as you can see, with it’s EV spread, it does so handily. But the real test is still ahead.</p>

        <p>
          <b>
            +1 252 Atk Choice Band Urshifu Close Combat vs. 252 HP / 76+ Def Dynamax Regirock: 218-260 (58.2 - 69.5%) -- guaranteed 2HKO
          </b>
        </p>

        <p>Now, looking at these two damage numbers together, the highest possible damage output for Thundurus + Urshifu is 69.5% + 20% - and as you may have already gathered, that does not score a KO onto Regirock, who is then free to fire off a Max Rockfall into Thundurus.</p>

        <p>
          <b>
            140 Atk Regirock Max Rockfall vs. 0 HP / 0 Def Dynamax Thundurus: 224-266 (72.7 - 86.3%) -- guaranteed 2HKO
          </b>
        </p>

        <p>You may notice that Regirock also cannot score a KO onto Thundurus in return. However, this can be dealt with in a few ways.</p>

        <p>
          <b>140 Atk Expert Belt Regirock Max Rockfall vs. 0 HP / 0 Def Dynamax Thundurus: 269-319 (87.3 - 103.5%) -- 25% chance to OHKO</b>
        </p>

        <p>That’s more like it. It still isn’t perfect, but with sand chip and Life Orb recoil (with sand chip dealing 9 damage to Thundurus and Life Orb recoil dealing 15 damage), the calc is as follows:</p>

        <p>
          <b>140 Atk Expert Belt Regirock Max Rockfall vs. 0 HP / 0 Def Dynamax Thundurus: 269-319 (87.3 - 103.5%) -- 68.8% chance to OHKO</b>
        </p>

        <p>However, there is another option still, and I think it’s fairly obvious what I mean. The Weakness Policy.</p>

        <p>
          <b>+2 0 Atk Regirock Max Rockfall vs. 0 HP / 0 Def Dynamax Thundurus: 390-462 (126.6 - 150%) -- guaranteed OHKO</b>
        </p>

        <p>With a Weakness Policy (WP for short), Regirock requires 0 Attack investment in order to KO Thundurus in return. However, when I’ve used Regirock, I choose to run Leftovers, as you may have seen. The reason for this is because of the partner I choose to give Regirock when facing down NUT.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          Tapu Koko
          <img src={Koko} alt="Tapu Koko" className="sprite" />
        </h2>

        <p>
          Tapu Koko @ Shuca Berry<br />
          Ability: Electric Surge<br />
          Level: 50<br />
          EVs: 236 HP / 28 Def / 92 SpA / 44 SpD / 108 Spe<br />
          Timid Nature<br />
          IVs: 0 Atk<br />
          - Dazzling Gleam<br />
          - Volt Switch<br />
          - Thunderbolt<br />
          - Protect<br />
        </p>

        <p>At a glance, this Pokemon doesn’t seem to be the hail Mary that I believe it to be, but allow me to explain. This EV spread allows Tapu Koko to outspeed max speed Jolly Thundurus by 1 point, ensuring that you always have the speed advantage. Since you outspeed Thundurus, you can use your spread Dazzling Gleam and either KO Urshifu or knock it down to Sash, in which case the sand that your Regirock’s Max Rockfall sets will finish the job. Plus, the small bit of Gleam chip onto Thundurus ensures that Regirock KOs, counting Life Orb recoil and sand chip.</p>

        <p>
          <b>92 SpA Tapu Koko Dazzling Gleam vs. 0 HP / 4 SpD Dynamax Thundurus: 42-51 (13.6 - 16.5%) -- possible 6HKO</b>
        </p>

        <p>
          <b>92 SpA Tapu Koko Dazzling Gleam vs. 4 HP / 0 SpD Urshifu: 216-256 (122.7 - 145.4%) -- guaranteed OHKO</b>
        </p>

        <p>As an added bonus to always outspeeding all three members of the NUT core, Tapu Koko’s typing - Electric and Fairy - allows it to resist all of the moves common on Urshifu and Thundurus, with the exception of Poison Jab. Electric resists Thundurus’ Flying and Electric STABs, and Fairy resists Fighting and Dark. If their Urshifu Protects, you can assume that it isn’t Choice Banded, and generally won’t be carrying Poison Jab, so there isn’t much to worry about. Regirock’s Max Quake also is solidly an OHKO onto almost every Nihilego, so in a worst case scenario where they lead Nihilego, you can both boost your SpDef and KO the main threat to your Tapu Koko.</p>

        <p>
          <b>140 Atk Regirock Max Quake vs. 0 HP / 4 Def Dynamax Nihilego: 400-472 (108.6 - 128.2%) -- guaranteed OHKO</b>
        </p>

        <p>However, Steelspike does a lot as well.</p>

        <p>
          <b>140 Atk Regirock Max Steelspike vs. 0 HP / 4 Def Dynamax Nihilego: 200-236 (54.3 - 64.1%) -- guaranteed 2HKO</b>
        </p>

        <p>Nihilego struggles to do much of anything back to Regirock, though. Regirock resists it’s Poison STAB, and if it uses its Rock STAB, it will set the sandstorm for Regirock, making it more specially bulky.</p>

        <p>
          <b>252 SpA Nihilego Max Rockfall vs. 252 HP / 36 SpD Dynamax Regirock: 114-135 (30.4 - 36%) -- 45.1% chance to 3HKO</b>
        </p>

        <p>And again, after setting the sand:</p>

        <p>
          <b>252 SpA Nihilego Max Rockfall vs. 252 HP / 36 SpD Dynamax Regirock in Sand: 76-90 (20.3 - 24%) -- guaranteed 5HKO</b>
        </p>

        <p>But enough of Regirock! You get it, it works against NUT. What other options are there?</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          Rhyperior
          <img src={Rhyperior} alt="Rhyperior" className="sprite" />
        </h2>

        <p>
          Rhyperior @ Weakness Policy<br />
          Ability: Solid Rock<br />
          Level: 50<br />
          EVs: 252 HP / 92 Atk / 84 Def / 76 SpD<br />
          Brave Nature<br />
          IVs: 0 Spe<br />
          - Rock Slide<br />
          - High Horsepower<br />
          - Swords Dance/Fire Punch/Ice Punch<br />
          - Protect<br />
        </p>

        <p>This Pokemon essentially serves the same purpose as Regirock - it’s a bulky Rock type that hits hard and can survive the NUT onslaught.</p>

        <p>
          <b>252 Atk Life Orb Thundurus Max Knuckle vs. 172 HP / 84 Def Solid Rock Dynamax Rhyperior: 74-88 (17.4 - 20.7%) -- possible 5HKO</b>
        </p>

        <p>
          <b>+1 252 Atk Choice Band Urshifu Close Combat vs. 172 HP / 84 Def Solid Rock Dynamax Rhyperior: 258-306 (60.8 - 72.1%) -- guaranteed 2HKO</b>
        </p>

        <p>72.1% + 20.7% = 92.8%. Not enough for a KO. The Defense investment here is actually in case of an Adamant Urshifu - uncommon, surely, but not impossible.</p>

        <p>
          <b>+1 252+ Atk Choice Band Urshifu Close Combat vs. 172 HP / 84 Def Solid Rock Dynamax Rhyperior: 283-334 (66.7 - 78.7%) -- guaranteed 2HKO</b>
        </p>

        <p>78.7% + 20.7% = 99.4%. Just barely enough to still survive. However, Rhyperior on it’s own with 92 Attack investment and a Brave/Adamant Nature easily scores an OHKO onto both Thundurus and Nihilego with it’s dual STABs, even without the Weakness Policy.</p>

        <p>
          <b>92+ Atk Rhyperior Max Rockfall vs. 0 HP / 0 Def Dynamax Thundurus: 308-366 (100 - 118.8%) -- guaranteed OHKO</b>
        </p>

        <p>
          <b>92+ Atk Rhyperior Max Quake vs. 0 HP / 4 Def Dynamax Nihilego: 816-960 (221.7 - 260.8%) -- guaranteed OHKO</b>
        </p>

        <p>Swords Dance is an option for mitigating Intimidates, but Ice Punch can deal with Landorus-T, and Fire Punch helps against Kartana and Glastrier, while both help against Amoonguss. Really, it’s up to what your team needs more than anything.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          Gastrodon
          <img src={GastrodonWest} alt="Gastrodon-West" className="sprite" />
          <img src={GastrodonEast} alt="Gastrodon-East" className="sprite" />
        </h2>

        <p>
          Gastrodon @ Expert Belt<br />
          Ability: Storm Drain<br />
          Level: 50<br />
          EVs: 180 HP / 212 Def / 84 SpA / 28 SpD / 4 Spe<br />
          Modest Nature<br />
          IVs: 0 Atk<br />
          - Ice Beam<br />
          - Earth Power<br />
          - Recover<br />
          - Protect<br />
        </p>

        <p>Gastrodon - the dark horse. It can survive the onslaught as well, and deals handily with Nihilego. This one is an odd one, but personally, I think Gastrodon can have a place in this metagame.</p>

        <p>
          <b>252 Atk Life Orb Thundurus Max Knuckle vs. 180 HP / 212 Def Dynamax Gastrodon: 68-81 (16.2 - 19.3%) -- possible 6HKO</b>
        </p>

        <p>
          <b>+1 252 Atk Choice Band Urshifu Wicked Blow vs. 180 HP / 212 Def Dynamax Gastrodon on a critical hit: 241-285 (57.6 - 68.1%) -- guaranteed 2HKO</b>
        </p>

        <p>
          19.3% + 68.1% = 87.4%. But what about an Airstream + Wicked Blow?
        </p>

        <p>
          <b>252 Atk Life Orb Thundurus Max Airstream vs. 180 HP / 212 Def Dynamax Gastrodon: 140-165 (33.4 - 39.4%) -- guaranteed 3HKO</b>
        </p>

        <p>
          <b>252 Atk Choice Band Urshifu Wicked Blow vs. 180 HP / 212 Def Dynamax Gastrodon on a critical hit: 160-190 (38.2 - 45.4%) -- guaranteed 3HKO</b>
        </p>
        
        <p>The unfortunate part is that Gastrodon can’t pick up OHKOs like Regirock or Rhyperior can.</p>

        <p>
          <b>84+ SpA Expert Belt Gastrodon Max Hailstorm vs. 0 HP / 4 SpD Dynamax Thundurus: 158-187 (51.2 - 60.7%) -- guaranteed 2HKO</b>
        </p>

        <p>
          <b>84+ SpA Expert Belt Gastrodon Max Quake vs. 0 HP / 0 SpD Dynamax Nihilego: 322-379 (87.5 - 102.9%) -- 12.5% chance to OHKO</b>
        </p>

        <p>However, next to Tapu Koko, you don’t have to worry about taking damage from an Urshifu. So Gastrodon wins the 1v1 versus Dynamaxed Thundurus and Dynamaxed Nihilego. It’s less of a “kill them immediately” strategy and more of an “outlast them until the end” strategy.</p>

        <p>Now that we’ve talked about some cool Pokemon picks against this core, what are your other options?</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          Burns
          <img src={Spectrier} alt="Spectrier" className="sprite" />
          <img src={Dragapult} alt="Dragapult" className="sprite" />
        </h2>

        <p>WilloWisp is an amazing option for crippling Urshifu and Thundurus. Some Thundurus are adapting to hold the Lum Berry for this reason, but then Thundurus + Urshifu loses a lot of its power in exchange for preventing a certain scenario once. For this reason, burning the Urshifu is recommended, as the Urshifu will never carry a Lum Berry. Some notable examples that could potentially utilize these moves to cripple these Pokemon are Spectrier and Dragapult, who outspeed both members of the core and can dodge a Sucker Punch due to launching a Willo instead of an attacking move.</p>

        <p>Theoretically, Burning Jealousy would also be an amazing option to cripple this core, but seeing as how you would have to take hits from them before retaliating with Burning Jealousy, it seems a lot less viable than Willo.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          Fake Out
          <img src={Raichu} alt="Raichu" className="sprite" />
        </h2>

        <p>If you can immobilize the Urshifu for a turn, or KO it before it gets a chance to move (like with Tapu Koko, for example), the core loses a lot of its immediate power. Urshifu is really the big threat of this core, to be honest.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          Screens
          <img src={Grimmsnarl} alt="Grimmsnarl" className="sprite" />
        </h2>

        <p>Screens don’t help as much as burns do, due to Urshifu straight up ignoring them with crits, but if Urshifu is removed, screens can help mitigate a lot of the damage coming from the rest of the team.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">
          Trick Room
          <img src={Cresselia} alt="Cresselia" className="sprite" />
        </h2>

        <p>The NUT core generally relies on speed control in the form of going fast, so if you can find a Pokemon that lives the onslaught of attacks, Trick Room becomes a very good option. Cresselia comes to mind - with a Colbur Berry, 236 HP investment, 180 in Defense and a Bold Nature, it will live the attacks from Thundurus and Urshifu and set up Trick Room, where it can then Moonblast into Urshifu or Ice Beam into Thundurus.</p>

        <p>
          <b>252 Atk Life Orb Thundurus Max Knuckle vs. 236 HP / 180+ Def Cresselia: 22-26 (9.7 - 11.5%) -- possible 9HKO</b>
        </p>

        <p>
          <b>+1 252 Atk Choice Band Urshifu Wicked Blow vs. 236 HP / 180+ Def Colbur Berry Cresselia on a critical hit: 156-184 (69.3 - 81.7%) -- guaranteed 2HKO</b>
        </p>

        <p>
          11.5% + 81.7% = 93.2%. Credit for the Cresselia spread goes to JoeUX9. (@JoeUX9 on Twitter. :3)
        </p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">Teammates</h2>

        <p>Now, only bringing 3 Pokemon to a battle is a bad idea, and so here are the Pokemon you are likely to see alongside the NUT core.</p>

        <b className="teammate">
          Clefairy
          <img src={Clefairy} alt="Clefairy" className="sprite" />
        </b>
        <p>Clefairy is very commonly run on the NUT core in order to give it a defensive backbone. Since the team relies so heavily on offense, a strong defensive option like Clefairy provides much needed support. It also allows for a pseudo Trick Room answer if it carries Sing or After You, though just clicking Follow Me also buys it’s teammates a turn.</p>

        <b className="teammate">
          Rotom-H
          / Tapu Fini
          / Kartana
          <img src={RotomHeat} alt="Rotom-Heat" className="sprite" />
          <img src={Fini} alt="Tapu Fini" className="sprite" />
          <img src={Kartana} alt="Kartana" className="sprite" />
          </b>
        <p>This is another core that is very strong, and for good reason. If you see these next to a NUT core, your Rhyperior and Gastrodon may struggle a bit, but still consider bringing them to help against NUT and Rotom-Heat, since both Gastro and Rhyperior beat Rotom-H in a 1v1. Regirock, however, is a defensive behemoth.</p>

        <p>
          <b>252 Atk Kartana Max Overgrowth vs. 252 HP / 76+ Def Regirock: 134-162 (71.6 - 86.6%) -- guaranteed 2HKO</b>
        </p>

        <p>That’s the damage Regirock takes WITHOUT DYNAMAXING. If it Maxes, it only takes half of that damage.</p>

        <p>
          <b>252 Atk Kartana Max Overgrowth vs. 252 HP / 76+ Def Dynamax Regirock: 134-162 (35.8 - 43.3%) -- guaranteed 3HKO</b>
        </p>

        <p>But most Kartana aren’t running 252 Attack right now. A lot of them are investing in Speed and Special Defense, with an Assault Vest. So there’s a chance that your Regirock will take even less damage than what was shown here. Tapu Koko is still a must bring against this, though, for it’s output against Fini and Urshifu.</p>

        <b className="teammate">
          Metagross
          <img src={Metagross} alt="Metagross" className="sprite" />
        </b>
        <p>Some Thundurus variants run a Metagross on the team, and if this is the case, it is best to be vigilant. If you see a Metagross + Thundurus lead, chances are that the Thundurus is also running Brutal Swing to self proc what is likely a Weakness Policy on the Metagross. The Thundurus on these types of teams also tend to be an Assault Vest variant, so keep that in mind.</p>

        <b className="teammate">
          Sun
          <img src={Venusaur} alt="Venusaur" className="sprite" />
          <img src={Torkoal} alt="Torkoal" className="sprite" />
        </b>
        <p>Tapu Koko is incredibly valuable in a matchup against sun. The electric terrain that it sets means that Venusaur is forced into an offensive position, and will likely Gigantamax and start firing off attacks instead of opting for a Sleep Powder. Use this to your advantage. Pokemon like Safety Goggles Rotom-Heat and Assault Vest Kartana are also reasonably good answers to sun, provided that you remove any threatening Fire types in the case of Kartana.</p>

        <b className="teammate">
          Galarian Moltres
          <img src={Moltres} alt="Moltres-Galar" className="sprite" />
        </b>
        <p>Against this kind of team, it is usually best to try and avoid activating the Moltres’ Weakness Policy, but if their partners activate it for them, fire off strong attacks to try and finish it off. In the event that the Moltres has a Comfey as a partner, target that instead to avoid such headaches as Floral Healing and Ally Switch. Tapu Koko, especially Assault Vest variants, will have a relatively easy time dealing with G-Moltres, assuming it’s partner isn’t something like Lightningrod Raichu.</p>

        <b className="teammate">
          Mamoswine
          <img src={Mamoswine} alt="Mamoswine" className="sprite" />
        </b>
        <p>Mamoswine is an alternate partner to Thundurus, and if you find yourself staring those two down, it’s usually best to utilize your strong Rock type to wall them. Remove Mamoswine first, as it threatens your NUT answer. It usually carries the Focus Sash and requires two hits to KO, but some variants run a Life Orb.</p>

        <b className="teammate">
          Regieleki
          <img src={Regieleki} alt="Regieleki" className="sprite" />
        </b>
        <p>In the event that a Regieleki is lead, expect Electro Web to be on it. If this is the case, try and eliminate Eleki as soon as possible while conserving Tapu Koko, so that you can still outspeed Urshifu with your Koko. Do not let Urshifu have the potential to sweep in the endgame.</p>
      </div>

      <div className="blog-section">
        <h2 className="blog-post-subtitle">Final Thoughts</h2>

        <p>NUT is a powerful core, but it is far from indomitable. With a few preparations, it becomes just another matchup. The examples listed here are certainly good ways to overcome NUT, but don’t limit yourself. Try out the ideas here, and once you have a handle on NUT, feel free to try out some new things! There are a lot of options that aren’t listed here - let your creative genius flow, and crack the NUT with an idea all your own!</p>

        <p>Until next time!</p>

        <p>- Echo</p>
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

export default Post;
