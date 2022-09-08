import { FContainer, FLayout, FMain } from 'ferrum-design-system';
import { WalletApplicationWrapper } from 'foundry';
import { Toaster } from "react-hot-toast";

import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import { ApplicationUIProvider } from './ApplicationUiContext';
import { defaultApplcationContext } from "./interfaces/ApplicationContext";
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from "./redux/rootReducer";
import { Route, Switch } from 'react-router';
import { NftContainer } from './components/nft-staking';
import { Header } from './layouts/header';

function App() {
  const [applicationContext, setApplicationContext] = useState(defaultApplcationContext);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const { isConnected, isConnecting } = useSelector((state: RootState) => state.walletConnector);
  const { isConfigLoading, isConfigLoaded, applicationLocale } = useSelector(
    ({ applicationConfig }: RootState) => ({
      isConfigLoaded: applicationConfig.isConfigLoaded,
      applicationLocale: applicationConfig.applicationLocale,
      isConfigLoading: applicationConfig.isConfigLoading,
    }),
    shallowEqual
  );

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isConfigLoaded === true && applicationLocale !== undefined) {
      setApplicationContext({
        ...applicationContext,
        locale: applicationLocale,
        openConnectWalletDialog: () => {
          // setConnectWalletDialog(true);
        },
      });
    }
    // eslint-disable-next-line
  }, [isConfigLoaded, applicationLocale]);
  useEffect(() => {
    if (windowDimensions) {
      setApplicationContext({
        ...applicationContext,
        isMobile: windowDimensions.width <= 991,
      });
    }
    // eslint-disable-next-line
  }, [windowDimensions]);
  return (
    <WalletApplicationWrapper.ApplicationWrapper shouldInitializeCCTBProfile={false} >

      <ApplicationUIProvider ApplicationUIContents={applicationContext}>
        {/* <FLayout themeBuilder={false}> */}
        <Toaster position="top-right" reverseOrder={false} />
        {/* side menu will come here */}
        <Header isConnected={isConnected} />
        <FMain>
          <FContainer type="fluid" className={'bg_black h-100 container'}>
            <Switch>
              <Route exact={true} path={'/'} component={() => <NftContainer isConnected={true} />} />
            </Switch>
          </FContainer>
        </FMain>
        {/* </FLayout> */}
      </ApplicationUIProvider>

    </WalletApplicationWrapper.ApplicationWrapper>
  );
}

export default App;
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
