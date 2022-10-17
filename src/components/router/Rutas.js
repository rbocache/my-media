import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Documentales } from "../Documentales";
import { Mediateca } from "../Mediateca";
import { Footer } from "../layout/Footer";
import { HeaderNav } from "../layout/HeaderNav";
import { Musica } from "../Musica";
import { Peliculas } from "../Peliculas";
import { Series } from "../Series";

export const Rutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGAVION */}
      <HeaderNav />

      {/* CONTENIDO CENTRAL*/}
      <section className="content">
        <Routes>
          <Route path="/" element={<Mediateca />} />
          <Route path="/mediateca" element={<Mediateca />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/documentales" element={<Documentales />} />
        </Routes>
      </section>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
};
