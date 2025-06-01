import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Courses from '../components/Courses';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Courses />
      <InquiryForm />
      <Footer />
    </>
  );
};

export default Home;
