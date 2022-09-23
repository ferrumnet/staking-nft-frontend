import React from "react";
import { FButton, FGrid, FGridItem, FTypo } from "ferrum-design-system";
import { WalletConnector } from "foundry";
import { ConnectWalletDialog } from "../components/connect-wallet/ConnectWalletDialog";
import ferrumIcon from '../assets/img/ferrum-logo.svg';
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
interface Props {
    isConnected: any;
}
export const Header = ({ isConnected }: Props) => {

    const { walletAddress } = useSelector((state: RootState) => state.walletConnector);

    return (
        <FGrid className={'w-100 bg_header d_flex justify_between align_center header_layout'}>
            <FGridItem alignX="left" size={[4, 4, 4]}>
                <img src={ferrumIcon} alt={ferrumIcon} height="44px" width="344px"></img>
            </FGridItem>
            <FGridItem alignX="end" alignY="center" size={[8, 8, 8]}>
                {isConnected &&
                    <>
                        <div className={'f-mr-1 d_flex align_center justify_start'}>
                        </div>
                        <div className={'wallet_address_card d_flex align_center justify_start'}>
                            <div style={{ width: 28, height: 28, backgroundColor: '#fff' }}>f</div>
                            <FTypo size={12} width={145} weight={700} color="white" className={"f-pl--2"} truncate={{ truncateLength: 7, truncatePosition: "center" }}>
                                {walletAddress}
                            </FTypo>
                        </div>
                    </>
                }
                <WalletConnector.WalletConnector
                    WalletConnectView={FButton}
                    WalletConnectModal={ConnectWalletDialog}
                    WalletConnectViewProps={{
                        className: "custom-font-size-18 font-700 primary-btn-text-clr font-face-mod",
                        variant: "primary"
                    }}
                />
            </FGridItem>
        </FGrid>
    );
};

