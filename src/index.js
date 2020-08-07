import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#691866"
    },
    secondary: {
      main: "#ddd"
    },
    background: "#efefef"
  },
  typography: {
    fontFamily: `'Noto Serif', serif;`,
  }
})
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

