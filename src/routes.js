import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUsPage"
import Articles from "./pages/Articles"
import NotFound from "./pages/NotFound"


const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
  
  {
    path: "/articles",
    component: Articles,
  },
  {
    component: NotFound,
  },
]

export default routes;
