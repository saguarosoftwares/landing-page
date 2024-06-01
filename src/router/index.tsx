import { lazy, Suspense, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

import MiddleBlockContent from "../content/MiddleBlockContent.json";
import IntroContent from "../content/IntroContent.json";

const Landing = lazy(() => import("../components/Landing"));

const Router = () => {
  const [svgInNavbar, setSvgInNavbar] = useState(false);

  return (
    <Suspense fallback={null}>
      <Styles />
      <Landing 
        title={MiddleBlockContent.title}
        // content={MiddleBlockContent.text}
        content={IntroContent.launchText}
        button={MiddleBlockContent.button}
        backgroundImage="LANDING_BUTTE_2.svg"
        id="intro"
        t="1"
        svgInNavbar={svgInNavbar}
        setSvgInNavbar={setSvgInNavbar}
      />
      <Header svgInNavbar={svgInNavbar} />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
