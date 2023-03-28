import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
// import ProductList from "./components/productList/ProductList";
import NewProject from "./components/newProject/newProject";
// import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import TechStack from "./components/TechStack/TechStack";
import Bottom from "./components/bottom/bottom";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
      
    >
      {/* <Toggle /> */}
      <Intro />
      <About />
      <TechStack/>
      <NewProject/>
      {/* <ProductList /> */}
      <Contact />
      <Bottom />
    </div>
  );
};

export default App;
