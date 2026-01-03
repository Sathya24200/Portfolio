import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import DetailsPage from "./pages/DetailsPage";
import CertificatesPage from "./pages/CertificatesPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/details" element={<DetailsPage />} />
                    <Route path="/certificates" element={<CertificatesPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;