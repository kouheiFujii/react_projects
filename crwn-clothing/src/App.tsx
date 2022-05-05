// Components
import Home from "./components/routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import Auth from "./components/routes/authentication/authentication.component";

import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>shop component</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
