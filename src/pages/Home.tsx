import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Values from '../components/sections/Values';
import Products from '../components/sections/Products';
import Experience from '../components/sections/Experience';
import Vision from '../components/sections/Vision';
import Contact from '../components/sections/Contact';
import { generateSEO } from '../utils/seo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const HomePage: React.FC = () => {
  useScrollAnimation();
  const seoData = generateSEO({
    title: "Noliē | Floristería Boutique - Transformamos Flores en Emociones",
    description: "Noliē crea arreglos florales únicos que transmiten emociones auténticas. Más que flores, creamos experiencias memorables desde 2022.",
    keywords: "floristería boutique, arreglos florales personalizados, flores elegantes, regalos especiales, Noliē floristería",
    image: "/images/seo-preview.jpg",
    url: "https://noliee.com",
    type: "website"
  });
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />

        <meta property="og:type" content={seoData.type} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoData.url} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
      </Helmet>

      <Layout>
        <Hero />
        <About />
        <Values />
        <Products />
        <Experience />
        <Vision />
        <Contact />
      </Layout>
    </>
  );
};
export default HomePage;
