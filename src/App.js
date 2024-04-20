import logo from "./logo.svg";
import "./App.css";
import HeaderNavbar from "./component/HeaderNavbar";
import Content from "./component/Content";
import Button from "./component/Button";
import { Container } from "react-bootstrap";
import ContentImage from "./component/ContentImage";

function App() {
  return (
    <div>
      <Container>
        <HeaderNavbar />
        <Content />
        <Button />
        <ContentImage />
      </Container>
    </div>
  );
}

export default App;
