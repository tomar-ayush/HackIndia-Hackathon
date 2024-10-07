import React from "react";

import { router } from "./routers/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      {/* <MoralisProvider initializeOnMount={false}> */}
        <RouterProvider router={router} />
      {/* </MoralisProvider> */}
    </>
  );
}

export default App;
