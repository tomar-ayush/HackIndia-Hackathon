import React from "react";

import { router } from "./routers/Routes";
import { RouterProvider } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

function App() {
  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <RouterProvider router={router} />
      </MoralisProvider>
    </>
  );
}

export default App;
