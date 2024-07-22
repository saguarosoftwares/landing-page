import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import useBackgroundColor from './useBackgroundColor';

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const SoftwareSolutions = lazy(() => import('./softwareSolutions'));
const TechConsultations = lazy(() => import('./techConsultations'));
const CloudSolutions = lazy(() => import('./cloudSolutions'));
const PerformanceOptimization = lazy(() => import('./performanceOptimization'));
const CustomIntegrations = lazy(() => import('./customIntegrations'));
const OnGoingSupport = lazy(() => import('./onGoingSupport'));

const ServicesPage = () => {
  const match = useRouteMatch();
  const sections = [
    { id: 'services', color: '#f4dcdc' },
    { id: 'about', color: '#ffe0b2' },
  ];

  let backgroundColor = useBackgroundColor(sections);
  if (backgroundColor === 'transparent') {
    backgroundColor = '#597B73';
  } else {
    backgroundColor = 'transparent';
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container backgroundColor={backgroundColor}>
        <div className="child" style={{ backgroundColor: backgroundColor }}>
          <Switch>
            <Route path={`${match.path}/software-solutions`} component={SoftwareSolutions} />
            <Route path={`${match.path}/tech-consultations`} component={TechConsultations} />
            <Route path={`${match.path}/cloud-solutions`} component={CloudSolutions} />
            <Route path={`${match.path}/performance-optimization`} component={PerformanceOptimization} />
            <Route path={`${match.path}/custom-integrations`} component={CustomIntegrations} />
            <Route path={`${match.path}/on-going-support`} component={OnGoingSupport} />
            <Route exact path={match.path}>
              <Redirect to="/home" />
            </Route>
          </Switch>
          <ScrollToTop />
        </div>
      </Container>
    </Suspense>
  );
};

export default ServicesPage;
