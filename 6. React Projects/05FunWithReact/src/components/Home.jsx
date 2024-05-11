import React from "react";
import "../style/home.scss";
import vg from "../assets/img4.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Fun With React</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            omnis fugiat quia, cupiditate voluptas aliquam beatae eveniet vel
            accusantium enim. Atque sapiente corporis distinctio optio maxime
            amet, labore quos numquam.
          </p>
        </div>
        <img src={vg} alt="graphics" />
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we Are ? </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            minima veritatis voluptatum magni quam facere, fugit obcaecati esse
            natus, id labore consectetur ipsa, incidunt quod illo ea ipsum
            possimus architecto. Incidunt similique tempora quod reprehenderit a
            qui, cumque tempore ab voluptatibus delectus corporis distinctio
            culpa animi, quibusdam ipsum quidem, facilis soluta doloremque alias
            ea ut. Quia culpa maxime eius minima. Quisquam, ab veniam! Nisi
            corrupti aliquid porro aut provident ea aperiam facere magnam iste
            iusto debitis fugiat, animi exercitationem ratione dicta eaque ut
            excepturi. Velit dolore quia molestiae veritatis vitae.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.1s" }}>
              <AiFillYoutube />
              <p>You Tube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
