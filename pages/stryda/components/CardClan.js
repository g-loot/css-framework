import React, { useEffect, useState, useContext } from "react";

export default function CardClan({ imageOverlay, rigthContent, actionContent }) {

  return (
    <>
      <div className="card-recap">
      <div className="card-image">
        <div className="card-game">
          <span className="icon icon-game-valorant-symbol text-game-valorant" />
        </div>
        <div className="card-date">4 min. ago</div>
        <div className="card-user">
          <div className="avatar avatar-simple avatar-xs">
            <div>
              <img
                src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/agent-avatar-cypher.webp"
                alt=""
              />
            </div>
          </div>
          <span>Cypher</span>
        </div>
        <div className="card-meta">
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1695129417/Stryda/stats/valorant/Game_Mode_Competitive.webp"
            alt=""
          />
          <span>Competitive</span>
          <span>Haven</span>
        </div>
        <img
          src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/map-piazza.jpg"
          alt=""
        />
        {imageOverlay && <div className="card-overlay">{imageOverlay}</div>}
      </div>
      <div className="card-content">{rigthContent && <>{rigthContent}</>}</div>
      {actionContent && <div className="card-action">{actionContent}</div>}
    </div>
    </>
  );
}
