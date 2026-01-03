import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import DetailsPage from "./pages/DetailsPage";
import CertificatesPage from "./pages/CertificatesPage";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/details" element={<DetailsPage />} />
                    <Route path="/certificates" element={<CertificatesPage />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;