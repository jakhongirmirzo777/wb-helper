import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "@/store/store";
import "@/assets/styles/vars.css";
import "@/assets/styles/base.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/layout/Header/";
import { Login } from "@/components/layout/Login/";

const AppContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px 100px;

  header {
    margin-bottom: 40px;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Login>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
        </AppContainer>
      </Login>
    </Provider>
  );
}
