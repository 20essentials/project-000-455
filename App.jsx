import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { globalCss, keyframes, styled } from "@pandacss/dev";

const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    fontFamily:
      "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  },
  a: {
    WebkitTapHighlightColor: "transparent",
  },
  html: {
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "transparent transparent",
  },
  body: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
    overflow: "hidden",
    backgroundColor: "#000",
  },
});

const up_and_down = keyframes({
  "0%, 100%": {
    transform: "translateZ(-100px) rotate(0deg)",
  },
  "50%": {
    transform: "translateZ(100px) rotate(90deg)",
  },
});

const ContainerLoader = styled("aside", {
  base: {
    width: "300px",
    height: "300px",
    position: "relative",
    transformStyle: "preserve-3d",
    transform: "perspective(500px) rotateX(60deg)",
    "@media (max-width: 1111px)": {
      zoom: 0.7,
    },
  },
});

const Aro = styled("div", {
  base: {
    position: "absolute",
    boxShadow: "inset 0 0 80px #00f8",
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    animation: `${up_and_down} 3s infinite ease-in-out both`,
  },
  variants: {
    s: (value) => ({
      inset: `calc(${value} * 10px)`,
      animationDelay: `calc(${value} * -0.1s)`,
    }),
  },
});

function App() {
  useEffect(() => {
    globalStyles();
    if (!document.getElementById("root")) {
      const rootEl = document.createElement("div");
      rootEl.id = "root";
      document.body.appendChild(rootEl);
    }
  }, []);

  return (
    <ContainerLoader>
      {[...Array(15).keys()].map((i) => (
        <Aro key={i} s={i} />
      ))}
    </ContainerLoader>
  );
}

if (typeof window !== "undefined") {
  if (!document.getElementById("root")) {
    const rootEl = document.createElement("div");
    rootEl.id = "root";
    document.body.appendChild(rootEl);
  }
  const root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
