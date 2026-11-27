import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiSearch, FiUser } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import "../assets/Style/style.css";

import cake from '../assets/Image/cake.jpg';
import hero from '../assets/Image/ckhero.avif';

import img1 from '../assets/Image/ck1.jpg';
import img2 from '../assets/Image/ck2.jpg';
import img3 from '../assets/Image/ck3.jpg';
import img4 from '../assets/Image/ck4.jpg';
import img5 from '../assets/Image/ck5.jpg';
import img6 from '../assets/Image/ck6.jpg';
import img7 from '../assets/Image/ck7.jpg';
import ckpg from '../assets/Image/ckpg.png';

// 4 points under the hero
const features = [
  { icon: "🛵", title: "Fast Delivery", text: "On time, every time" },
  { icon: "🏅", title: "Best Quality", text: "Only premium ingredients" },
  { icon: "🎂", title: "100% Fresh", text: "Baked fresh for you" },
  { icon: "🔒", title: "Secure Payments", text: "Safe and easy checkout" },
];

// Shop by category (round images)
const categories = [
  { name: "Birthday Cakes", img: img1 },
  { name: "Wedding Cakes", img: img2 },
  { name: "Anniversary Cakes", img: img3 },
  { name: "Photo Cakes", img: img4 },
  { name: "Cupcakes", img: img5 },
];

// Best seller cards - change name and price here
const bestSellers = [
  { id: 1, name: "Rose Cream Cake", price: 650, img: img2 },
  { id: 2, name: "Chocolate Drip Cake", price: 700, img: img3 },
  { id: 3, name: "Strawberry Delight", price: 600, img: img4 },
  { id: 4, name: "Pink Velvet Cake", price: 750, img: img3 },
  { id: 5, name: "Vanilla Blossom", price: 550, img: img6 },
  { id: 6, name: "Berry Cupcake Box", price: 450, img: img7 },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoomImg, setZoomImg] = useState(null);
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");

  // Contact form values
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Start AOS animation once
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Small message that disappears after 2 seconds
  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  }

  // Footer email form
  function handleSubscribe(e) {
    e.preventDefault();
    showToast("Thank you for subscribing!");
    setEmail("");
  }

  // Update the contact form while typing
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Contact form submit
  function handleContact(e) {
    e.preventDefault();
    showToast("Message sent! We will call you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="cz-page">
      {/* ---------- Navbar ---------- */}
      <nav className="cz-navbar">
        <h2 className="cz-logo">🍰CakeZone</h2>

        <div className={menuOpen ? "cz-nav-links open" : "cz-nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#cakes" onClick={() => setMenuOpen(false)}>Cakes</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="cz-nav-icons">
          <FiSearch className="cz-icon" />
          <FiUser className="cz-icon" />
          <button className="cz-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <section
        className="cz-hero"
        id="home"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="cz-hero-content" data-aos="fade-up">
          <h1>
            Freshly Baked Cakes <span className="cz-pink">Made Just For You</span>
          </h1>
          <p>
            From birthdays to weddings, we bake every cake with real butter,
            fresh cream and lots of love. Order online and enjoy it at your
            doorstep.
          </p>
          <div className="cz-hero-buttons">
            <a href="#shop" className="cz-btn">Shop Now</a>
            <a href="#contact" className="cz-btn cz-btn-white">Custom Cake</a>
          </div>
        </div>
      </section>

      {/* ---------- 4 Points ---------- */}
      <section className="cz-features" data-aos="fade-up">
        {features.map((f, i) => (
          <div className="cz-feature" key={i}>
            <div className="cz-feature-icon">{f.icon}</div>
            <div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ---------- Shop by Category ---------- */}
      <section className="cz-section" id="cakes">
        <h2 className="cz-title" data-aos="fade-up">Shop by Category</h2>
        <div className="cz-line"></div>

        <div className="cz-categories">
          {categories.map((c, i) => (
            <div className="cz-category" key={i} data-aos="zoom-in">
              <img src={c.img} alt={c.name} />
              <h4>{c.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Best Sellers ---------- */}
      <section className="cz-section cz-pink-bg" id="shop">
        <h2 className="cz-title" data-aos="fade-up">Best Sellers</h2>
        <div className="cz-line"></div>

        <div className="cz-cards">
          {bestSellers.map((item) => (
            <div className="cz-card" key={item.id} data-aos="fade-up">
              {/* Click image to zoom */}
              <img
                src={item.img}
                alt={item.name}
                onClick={() => setZoomImg(item.img)}
              />
              <h3>{item.name}</h3>
              <p className="cz-price">₹{item.price}</p>
              <button
                className="cz-btn"
                onClick={() => showToast(item.name + " added to your order!")}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="cz-section cz-about" id="about">
        <div className="cz-about-img" data-aos="zoom-in">
          <img src={cake} alt="About CakeZone" />
        </div>

        <div className="cz-about-text" data-aos="fade-up">
          <h2>About CakeZone</h2>
          <div className="cz-line cz-line-left"></div>
          <p>
            CakeZone is a small bakery with a big love for cakes. We started
            with one oven and a simple idea: bake every cake fresh, with
            honest ingredients and no shortcuts.
          </p>
          <p>
            Whether it is a birthday, a wedding or just a sweet craving, our
            bakers design each cake to make your moment special.
          </p>
          <a href="#contact" className="cz-btn">Contact Us</a>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="cz-section" id="contact">
        <h2 className="cz-title" data-aos="fade-up">Contact Us</h2>
        <div className="cz-line"></div>

        <form className="cz-contact-form" onSubmit={handleContact} data-aos="fade-up">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your cake (flavour, weight, date)"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="cz-btn">Send Message</button>
        </form>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="cz-footer">
        <div className="cz-footer-top">
          <div className="cz-footer-brand" data-aos="fade-up">
            <h1>CakeZone</h1>
            <p>Every slice is a little celebration.</p>

            <div className="cz-social">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <img className="cz-footer-img" src={ckpg} alt="Cake" data-aos="zoom-in" />
        </div>

        <div className="cz-footer-columns">
          <div className="cz-footer-col">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="cz-footer-col">
            <h3>Services</h3>
            <a href="#shop">Custom Cakes</a>
            <a href="#shop">Wedding Cakes</a>
            <a href="#shop">Birthday Cakes</a>
            <a href="#shop">Home Delivery</a>
          </div>

          <div className="cz-footer-col">
            <h3>Get Sweet Offers</h3>
            <form className="cz-subscribe" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <p className="cz-copy">© 2026 CakeZone. All rights reserved.</p>
      </footer>

      {/* ---------- Image zoom ---------- */}
      {zoomImg && (
        <div className="cz-zoom" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Zoomed cake" />
        </div>
      )}

      {/* ---------- Message ---------- */}
      {toast && <div className="cz-toast">{toast}</div>}
    </div>
  );
}

export default Home;