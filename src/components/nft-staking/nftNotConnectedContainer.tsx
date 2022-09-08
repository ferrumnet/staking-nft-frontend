import { FButton, FTypo } from 'ferrum-design-system';
import { WalletConnector } from 'foundry';
import React from 'react';
import stakingCapIcon from '../../assets/img/staking-cap-icon.svg'
import { ConnectWalletDialog } from '../connect-wallet/ConnectWalletDialog';

export const NftNotConnectedContainer = () => {
    return (
        <div className='centered_div'>
            <div className='nft-title-card staking-cards'>
                <div className='w-100'>
                    <FTypo size={32} weight={700} color='#ffffff'>
                        TITLE NFT STAKING
                    </FTypo>
                    <FTypo size={22} weight={700} color='#ffffff'>
                        NFT STAKING POOL
                    </FTypo>
                    <div className='d_flex justify_between align_center f-mt-1'>
                        <FTypo size={20} weight={700} color='#D9B373'>
                            MATURITY REWARD
                        </FTypo>
                        <FTypo size={22} weight={700} color='#ffffff' align={'right'}>
                            100% APY
                        </FTypo>
                    </div>
                    <div className='d_flex justify_between align_center f-mt--7'>
                        <FTypo size={20} weight={700} color='#D9B373'>
                            EARLY REWARD
                        </FTypo>
                        <FTypo size={22} weight={700} color='#ffffff' align={'right'}>
                            100% APY
                        </FTypo>
                    </div>
                    <div className='d_flex justify_between align_center f-mt--7'>
                        <FTypo size={20} weight={700} color='#D9B373'>
                            STAKING CAP
                        </FTypo>
                        <FTypo size={22} weight={700} color='#ffffff' align={'right'}>
                            100% APY
                        </FTypo>
                    </div>
                    <div className='w-100 d_flex justify_center align_center f-mt-2 f-mb-2'>

                        <span className='d_flex justify_center align_center'>
                            <img src={stakingCapIcon} alt={stakingCapIcon} style={{ width: 24, height: 24, marginRight: 16 }} />
                            <span className={'custom-font-size-20 font-700 primaryColor'}>Staking Opens in 2 hours</span>
                        </span>
                    </div>
                    <FTypo size={16} weight={700} color='#ffffff' align={'right'}>
                        CONNECTED TO BSC CHAIN NETWORK
                    </FTypo>
                </div>
            </div>
            <div className={'f-mt-2'} style={{ width: 600 }}>
                <WalletConnector.WalletConnector
                    WalletConnectView={FButton}
                    WalletConnectModal={ConnectWalletDialog}
                    WalletConnectViewProps={{
                        className: "custom-font-size-18 font-700 w-100 primary-btn-text-clr font-face-mod",
                        variant: "primary"
                    }}
                />
            </div>
        </div>

    );
};