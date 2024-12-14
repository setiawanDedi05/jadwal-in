import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import RootLayout from "./pages/layout";
import ServicesPage from "./pages/services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<RootLayout />}>
          <Route index element={<ServicesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
