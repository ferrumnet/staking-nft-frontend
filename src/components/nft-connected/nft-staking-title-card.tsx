import { FButton, FTypo } from 'ferrum-design-system';
import React, { useEffect, useState } from 'react';
import userImg from '../../assets/img/nft-staking-img.svg';
import lockIcon from '../../assets/img/lock-yellow.svg';
import stakeBar from '../../assets/img/stake-bar.svg';
import { DialogTransitionStatus } from '../transaction-status-modal';

interface Props {
    stakeNft: any;
    setStakeNft: any;
    unStakeNftFlow: any;
    unStakeNftFlowOpened: any;
    setUnStakeNftFlow: any;
    setUnStakeNftFlowOpened: any;
}
export const NftStakingTitleCard = ({ stakeNft, setStakeNft, unStakeNftFlow, setUnStakeNftFlow, unStakeNftFlowOpened, setUnStakeNftFlowOpened }: Props) => {
    const [daysCount, setDaysCount] = useState(4);
    const [transactionPopupUnStaking, setTransactionPopupUnStaking] = useState(false);
    const [isProcessingUnStaking, setIsProcessingUnStaking] = useState(true);
    const [isProcessedUnStaking, setIsProcessedUnStaking] = useState(false);
    const [isApprovedUnStaking, setIsApprovedUnStaking] = useState(false);
    useEffect(() => {
        if (unStakeNftFlow) {
            const myTimeout = setTimeout(function () {
                setDaysCount(daysCount - 1);
            }, 1000);
            if (daysCount === 0) {
                setUnStakeNftFlowOpened(true);
                clearTimeout(myTimeout);
            }
        }
    })

    return (
        <div className='nft-staking-title-card staking-cards '>
            <div className={`d_flex justify_start align_start ${stakeNft ? 'f-mb-4' : 'f-mb-1'}`}>
                <div>
                    <img src={userImg} alt={userImg} style={{ width: 250, height: 250 }} />
                    {unStakeNftFlowOpened &&
                        <div>
                            <img src={stakeBar} alt={stakeBar} style={{ width: 250, height: 15, marginTop: 16, marginBottom: 12 }} />
                            <div className={'d_flex justify_between align_center'}>
                                <span className={'primaryColor custom-font-size-14 font-700'}>YOUR STAKED BALANCE</span>
                                <span className={'custom-font-size-14 font-700 '}>5 NFT</span>
                            </div>
                        </div>
                    }

                </div>

                <div className='f-ml-2 w-100'>
                    <FTypo size={30} weight={700} color='#ffffff'>
                        TITLE NFT STAKING
                    </FTypo>
                    <FTypo size={22} weight={700} color='#ffffff'>
                        NFT STAKING POOL
                    </FTypo>
                    <div className='d_flex justify_between align_center f-mt-1 small-maturity-cards staking-cards'>
                        <FTypo size={20} weight={700} color='#D9B373'>
                            MATURITY REWARD
                        </FTypo>
                        <FTypo size={20} weight={700} color='#ffffff' align={'right'}>
                            100% APY
                        </FTypo>
                    </div>
                    <div className='d_flex justify_between align_center small-early-award-card staking-cards'>
                        <FTypo size={20} weight={700} color='#D9B373'>
                            EARLY REWARD
                        </FTypo>
                        <FTypo size={20} weight={700} color='#ffffff' align={'right'}>
                            100% APY
                        </FTypo>
                    </div>
                    <div className='d_flex justify_between align_center small-staking-cap-card staking-cards'>
                        <FTypo size={20} weight={700} color='#D9B373'>
                            STAKING CAP
                        </FTypo>
                        <FTypo size={20} weight={700} color='#ffffff' align={'right'}>
                            100% APY
                        </FTypo>
                    </div>
                </div>
            </div>
            {!stakeNft && !unStakeNftFlow &&
                <div className='w-100 d_flex justify_end align_end'>
                    <FButton
                        title={"STAKE NFT"}
                        style={{ width: 180, height: 42 }}
                        className={'primary-btn-text-clr custom-font-size-16 font-700 f-mt-1 f-mb-1 font-face-mod'}
                        onClick={() => { setStakeNft(true); }} />
                </div>
            }
            <div className='w-100 d_flex justify_end align_center'>
                {!stakeNft && unStakeNftFlow && !unStakeNftFlowOpened ?

                    <span className='d_flex justify_center align_center'>
                        <img src={lockIcon} alt={lockIcon} style={{ width: 30, height: 30, marginRight: 12 }} />
                        <span className={'custom-font-size-20 font-700 clr_white'}>Lock Period</span>
                        <span className={'primaryColor custom-font-size-20 font-700'} style={{ marginLeft: 8 }}>{daysCount} DAYS</span>
                    </span>
                    : unStakeNftFlowOpened &&
                    <FButton
                        title={"Unstake Early Withdrawal Rewards"}
                        style={{ width: 376, height: 42 }}
                        className={'primary-btn-text-clr custom-font-size-16 font-700 f-mt-1 font-face-mod'}
                        onClick={() => { setTransactionPopupUnStaking(true) }} />
                }
            </div>
            {transactionPopupUnStaking &&
                <DialogTransitionStatus
                    status={'unstake'}
                    transactionPopup={transactionPopupUnStaking}
                    setTransactionPopup={setTransactionPopupUnStaking}
                    isProcessing={isProcessingUnStaking}
                    setIsProcessing={setIsProcessingUnStaking}
                    isProcessed={isProcessedUnStaking}
                    setIsProcessed={setIsProcessedUnStaking}
                    isApproved={isApprovedUnStaking}
                    setIsApproved={setIsApprovedUnStaking}
                    setUnStakeNftFlowOpened={setUnStakeNftFlowOpened}
                    setUnStakeNftFlow={setUnStakeNftFlow}
                    setStakeNft={setStakeNft}
                />
            }
        </div>

    );
};