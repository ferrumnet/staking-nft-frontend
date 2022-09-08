import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storageSession from "redux-persist/lib/storage/session";
import localStorage from "redux-persist/es/storage";
import { WalletConnector, WalletApplicationWrapper, WalletApproverWrapper, WalletSwap } from "foundry";
import { applicationConfigSlice } from "./application-config/applicationConfigSlice";

const walletConnectorPersistConfig = {
  key: "walletConnector",
  storage: storageSession,
  blacklist: ["error", "isConnecting", "networkClient", "isWeb3Initialized"],
};

const walletApplicationWrapperPersistConfig = {
  key: "walletApplicationWrapper",
  storage: localStorage,
  whitelist: ["tokenList"],
  timeout: 172800,
};

const rootReducer = combineReducers({
  walletConnector: persistReducer(
    walletConnectorPersistConfig,
    WalletConnector.walletConnectorSlice.reducer
  ),
  applicationConfig: applicationConfigSlice.reducer,

  walletApplicationWrapper: persistReducer(
    walletApplicationWrapperPersistConfig,
    WalletApplicationWrapper.applicationWrapperSlice.reducer
  ),
  walletApprovalWrapper: WalletApproverWrapper.walletApproverWrapperSlice.reducer,
  walletSwapWrapper: WalletSwap.walletSwapperSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
