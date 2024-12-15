import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Layout";
import ServicesPage from "./pages/SelectService";
import SelectTime from "./pages/SelectTime";
import Summary from "./pages/Summary";
import EntryData from "./pages/EntryData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<RootLayout />}>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/time" element={<SelectTime />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/entry-data" element={<EntryData />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
