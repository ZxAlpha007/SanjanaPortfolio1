import Body from "./parts/body/body";
import Footer from "./parts/footer/footer";
import Header from "./parts/header/header";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return <>
    <BrowserRouter>
      <div className="rootxx">
        <div className="rootTrans">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </>;
}
