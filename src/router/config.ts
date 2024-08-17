const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home", // Reference the actual Home component
  },
  {
    path: "/services",
    component: "ServicesPage", // Overview component for services
    routes: [
      {
        path: "/services/software-solutions",
        exact: true,
        component: "SoftwareSolutions", // Detailed component for Software Solutions
      },
      {
        path: "/services/tech-consultations",
        exact: true,
        component: "TechConsultations", // Detailed component for Tech Consultations
      },
      {
        path: "/services/cloud-solutions",
        exact: true,
        component: "CloudSolutions", // Detailed component for Cloud Solutions
      },
      {
        path: "/services/performance-optimization",
        exact: true,
        component: "PerformanceOptimization", // Detailed component for Performance Optimization
      },
      {
        path: "/services/custom-integrations",
        exact: true,
        component: "CustomIntegrations", // Detailed component for Custom Integrations
      },
      {
        path: "/services/on-going-support",
        exact: true,
        component: "OnGoingSupport", // Detailed component for On Going Support
      },
    ],
  },
];

export default routes;
