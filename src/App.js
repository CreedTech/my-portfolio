import { Switch ,Route, useLocation} from "react-router"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "./components/themes"
import GlobalStyle from "./globalStyles"
import { AnimatePresence } from "framer-motion"
import Main from "./components/main"
import About from "./components/about"
import Blog from "./components/blog"
import Work from "./components/work"
import Skills from "./components/skills"

function App() {

  const location = useLocation();
  return <>
    

    <GlobalStyle />

    <ThemeProvider theme={darkTheme}>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
      </AnimatePresence>
      
    </ThemeProvider>
    </>
    
}

export default App

