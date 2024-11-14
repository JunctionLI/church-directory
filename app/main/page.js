import React from 'react';
import Navigation from '../main/menu';
import Content from '../main/content';
import Footer from './footer';

function MainPage() {
  return (
    <main>
      <div>
        <Navigation />
        <Content /> 
      </div>
      <footer>
        <Footer />
        </footer>
    </main>
   
    
  );
}

export default MainPage;
