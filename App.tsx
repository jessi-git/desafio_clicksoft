import React, {useState} from "react";
import Home from './src/pages/Home';

import { ThemeProvider } from "styled-components/native";
import { AppRoutes } from './src/routes';


 export default function App () {
    return (
      <AppRoutes />
    )
 }