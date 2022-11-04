import React from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import mystory from "../../image/mystory.jpg";
import "./about.css";
function About() {
  return (
    <div className="body-1">
      <Navbar />
      <div>
        <div>
          <img class="image-1" src={mystory} alt="mystory" />
        </div>
        <div class="story">
          <p>
            I started my blogging journey back in 2013 as a creative outlet
            while working in corporate full-time. As I was putting in the daily
            9-5 grind I found that blogging is what kept me inspired. I had so
            much fun scouting locations, being the stylist and being able to
            share a story behind the photos. Before I knew it I found myself
            working on blog posts early mornings, late nights and into the
            weekends. I always seemed to have an on-going list of more content I
            was ready to create. Several blog posts later, I gained a bit of
            traction and had the opportunity to work with a few companies. I
            remember waking up one morning being so excited that Rachel Roy
            posted me on her Instagram account wearing one of her t-shirts. All
            for doing what I loved. In the midst of my blogging excitement, I
            received a promotion at my full-time job. That of course came with
            more responsibility. The competitive side of me lead to committing
            all my time and energy at becoming the best I could in the corporate
            world. All the while that little voice inside screaming at me year
            after year to "just keep blogging!". Fast forward to 2017 - here I
            am again. Picking up my passion once more. This time, going full
            force in even more avenues than before! I firmly believe that with
            every door that closes, a new opportunity awaits. Join me here as I
            share my hair and beauty tips, healthy recipes and so much more. I'm
            excited to share this next chapter in blogging journey with you all!
            ​ "If your too comfortable, it's time to move on. Terrified of
            what's next? Your on the right track." - Susan Fales-Hill
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default About;
