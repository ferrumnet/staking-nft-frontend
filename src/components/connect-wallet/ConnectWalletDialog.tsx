import React from "react";
import IconMetaMask from "../../assets/img/icon-metamask.svg";
import IconWalletConnect from "../../assets/img/icon-wallet-connect.svg";
import { FList, FListItem } from "ferrum-design-system";
import "./ConnectWalletDialog-styles.scss";
import { FDialog } from "../../global/Fdialog/Fdialog";

export const ConnectWalletDialog = ({
  show,
  onHide,
  metaMaskClickEvent,
  walletConnectClickEvent,
}: any) => {

  return (
    <FDialog
      show={show}
      onHide={onHide}
      size="medium"
      showClose={true}
      variant={"new-wallet-popup"}
      className="dialog-connect-wallet text-center"
      style={{ width: 414, height: 317 }}
    >
      {/* custom-padding-11 */}
      <FList display="block" type="number" variant="connect-wallet">
        <p className={'text_left custom-font-size-20 c-mb-24 font-400'}>Select Wallet</p>
        <FListItem display="flex" onClick={metaMaskClickEvent} className={'whiteLabeledListItem c-mb-20'}>
          <p className={'text_left custom-font-size-24 primaryColor font-700'}>MetaMask</p>
          <span className="icon-wrap">
            <img src={IconMetaMask} alt={IconMetaMask}></img>
          </span>
        </FListItem>
        <FListItem display="flex" onClick={walletConnectClickEvent} className={'whiteLabeledListItem c-mb-50'}>
          <p className={'text_left custom-font-size-24 primaryColor font-700'}>WalletConnect</p>
          <span className="icon-wrap">
            <img src={IconWalletConnect} alt={IconWalletConnect}></img>
          </span>
        </FListItem>
      </FList>
    </FDialog>
  );
};
