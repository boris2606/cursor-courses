import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import './index.css';
import reportWebVitals from './reportWebVitals';

const ANAKIN_IMAGE = "https://tvline.com/wp-content/uploads/2020/12/hayden-christensen-star-wars.jpg?w=620";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const CHEK_AUTH = 'https://www.iconpacks.net/icons/2/free-check-mark-icon-3281-thumb.png'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Nav />
    <Posts author={{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
      auth={CHEK_AUTH}/>
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
