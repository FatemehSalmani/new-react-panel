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
    path:"/new-react-panel",
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
    path:"*",
    component: NotFound,
  },
]

export default routes;
