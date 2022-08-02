import React, { useEffect, useRef, useState } from "react";

import Chat from "../../components/Chat/Chat";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {

  return (
    <>
      <h1 className="mb-2">Chat</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="surface rounded-lg">
          <Chat />
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/4q6jn89g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
          ></iframe>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
