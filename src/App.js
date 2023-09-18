import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// componnets
import NavigationBar from './components/layout/nav.bar.comp'
import FooterBar from './components/layout/footer.bar.comp'

import { RoutesWrapper } from './components/wrapper/routes.wrapper'

// pages
import MainPage from './pages/main/main.pages';
import QnaPage from './pages/qnas/qna.pages';
import InterviewPage from './pages/interviews/interviews.pages';

import NotFoundPage from './pages/error/not.found.components'

function App() {
  return (
    <Router>
      <NavigationBar zindex={9999} />

      <RoutesWrapper>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/qnas' element={<QnaPage />} />
          <Route path='/interviews' element={<InterviewPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </RoutesWrapper>

      <FooterBar zindex={9999} />
    </Router>
  );
}

export default App;
