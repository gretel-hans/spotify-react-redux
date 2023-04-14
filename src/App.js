import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import BottomFooter from "./components/subComponents/BottomFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/albumpage/:id' element={<AlbumPage/>}/>
              <Route path='/artistpage/:id' element={<ArtistPage/>}/>
            </Routes>
            <BottomFooter/>
          </Row>
        </Container>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
