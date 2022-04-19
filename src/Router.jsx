import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import FormOne from './pages/FormOne';
import FormTwo from './pages/FormTwo';
import FormThree from './pages/FormThree';

const Router = ({ currentPage, setCurrentPage }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formOne" element={<FormOne currentPage />} />
      <Route path="/formTwo" element={<FormTwo currentPage />} />
      <Route path="/formThree" element={<FormThree currentPage />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
