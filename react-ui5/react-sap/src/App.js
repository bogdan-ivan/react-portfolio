import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ThemeProvider
} from '@ui5/webcomponents-react';

import React, { useState } from 'react';
import './App.css';
import AppAnalyticalTable from './components/AppAnalyticalTable';
import AppShellBar from './components/AppShellBar';
import ProgressList from './components/ProgressList';
import StockPrices from './components/StockPrices';
import { spacing } from '@ui5/webcomponents-react-base';

import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';

function App() {

  return (
    <HashRouter>
      <ThemeProvider>

        <AppShellBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>

      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
