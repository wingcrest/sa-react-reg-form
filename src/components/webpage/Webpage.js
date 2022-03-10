import React from "react";
import { useState } from "react";
import "./Webpage.scss";

const Webpage = () => {
  return (
    <div className="webpage-container">
      <header>
        <div className="header-content">
          <h1>The Legend of Zelda</h1>
        </div>
      </header>

      <div className="searchbar">
        <input type="search" />
        <button>
          <i class="ri-search-line"></i>
        </button>
      </div>

      <div className="card-list">
        <div className="card">
          <div className="card-image">
            <img src="https://i.imgur.com/CbD42Kd.png"></img>
          </div>
          <div className="card-title">
            10 Powerful Bonds Link has Forged throughout the Zelda Series
          </div>
          <div className="card-desc">
            These characters inspire him with their kindness and resilience,
            pose challenges to help him grow, and heal him with love more potent
            than any Red Potion. And for that, Link owes them a debt of
            gratitude.
          </div>
          <button
            className="card-btn"
            onClick={() =>
              (window.location.href =
                "https://zeldauniverse.net/features/10-powerful-bonds-that-link-has-forged-throughout-the-zelda-series/")
            }
          >
            Read More
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="https://i.imgur.com/MHfpMiR.png"></img>
          </div>
          <div className="card-title">Zelda's Ballad</div>
          <div className="card-desc">
            Ever wanted to play as Zelda? Thanks to <i>YamGaming</i> and{" "}
            <i>Amiibolad</i>, you can now! Zelda's Ballad is now available for
            download at GameBanana.com.
          </div>
          <button
            className="card-btn"
            onClick={() =>
              (window.location.href = "https://gamebanana.com/mods/168244")
            }
          >
            Read More
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="https://i.imgur.com/DLn104R.png"></img>
          </div>
          <div className="card-title">
            Breath of the Wild 2 Concepts Discovered in Newly Uncovered Nintendo
            Patents
          </div>
          <div className="card-desc">
            This week, Zelda fans in Europe bumped into patents with Breath of
            the Wild 2 gameplay concept drafts featuring player movement
            mirroring those featured in the latest teaser trailer. The discovery
            was reported by <i>GameReactor</i> shortly afterward.
          </div>
          <button
            className="card-btn"
            onClick={() =>
              (window.location.href =
                "https://zeldauniverse.net/2021/12/17/breath-of-the-wild-2-concepts-discovered-in-newly-uncovered-nintendo-patents/")
            }
          >
            Read More
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>

      <footer>
        <b>Disclaimer</b>: The Legend of Zelda is the property of Nintendo.
      </footer>
    </div>
  );
};

export default Webpage;
