import React, { useState } from 'react';
import { NftMaturityCard } from '../nft-connected/nft-maturity-card';
import { NftStakingTitleCard } from '../nft-connected/nft-staking-title-card';
import { StakeYourNftCard } from '../nft-connected/stake-nft-card';
import { DialogTransitionStatus } from '../transaction-status-modal';

export const NftConnectedContainer = () => {
    const [stakeNft, setStakeNft] = useState(false);
    const [unStakeNftFlow, setUnStakeNftFlow] = useState(false);
    const [unStakeNftFlowOpened, setUnStakeNftFlowOpened] = useState(false);
    const [transactionPopup, setTransactionPopup] = useState(false);
    const [isProcessing, setIsProcessing] = useState(true);
    const [isProcessed, setIsProcessed] = useState(false);
    const [isApproved, setIsApproved] = useState(false);

    return (
        <div className='d_flex justify_center align_start f-mb-2'>
            <div>
                <NftStakingTitleCard
                    stakeNft={stakeNft}
                    setStakeNft={setStakeNft}
                    unStakeNftFlow={unStakeNftFlow}
                    unStakeNftFlowOpened={unStakeNftFlowOpened}
                    setUnStakeNftFlowOpened={setUnStakeNftFlowOpened}
                    setUnStakeNftFlow={setUnStakeNftFlow}
                />
                {stakeNft &&
                    <StakeYourNftCard setTransactionPopup={setTransactionPopup} />
                }
            </div>
            <div>
                <NftMaturityCard unStakeNftFlowOpened={unStakeNftFlowOpened} />
            </div>

            {transactionPopup &&
                <DialogTransitionStatus
                    transactionPopup={transactionPopup}
                    setTransactionPopup={setTransactionPopup}
                    isProcessing={isProcessing}
                    setIsProcessing={setIsProcessing}
                    isProcessed={isProcessed}
                    setIsProcessed={setIsProcessed}
                    isApproved={isApproved}
                    setIsApproved={setIsApproved}
                    setUnStakeNftFlow={setUnStakeNftFlow}
                    setStakeNft={setStakeNft}
                />
            }

        </div>
    );
};