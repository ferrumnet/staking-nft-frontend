import React, { useEffect } from "react";
import { FButton, FItem, FTypo } from "ferrum-design-system";
import { FDialog } from "../../global/Fdialog/Fdialog";
import IconSubmitted from '../../assets/img/transaction-processed.svg';
import underLine from '../../assets/img/icon-under-line.svg';
import transactionIsconfirmed from '../../assets/img/transaction-isConfirm.svg';

interface Props {
    status?: any;
    transactionPopup: any;
    setTransactionPopup: any;
    isProcessing: any;
    setIsProcessing: any;
    isProcessed: any;
    setIsProcessed: any;
    isApproved: any;
    setIsApproved: any;
    setUnStakeNftFlow?: any;
    setStakeNft?: any;
    setUnStakeNftFlowOpened?: any;
}
export const DialogTransitionStatus = ({
    status,
    transactionPopup,
    setTransactionPopup,
    isProcessing,
    setIsProcessing,
    isProcessed,
    setIsProcessed,
    isApproved,
    setIsApproved,
    setUnStakeNftFlow,
    setStakeNft,
    setUnStakeNftFlowOpened,
}: Props) => {

    const onclose = () => {
        setTransactionPopup(false);
    };

    //for now controlling the flow by useEffect
    useEffect(() => {
        if (isProcessing) {
            setTimeout(function () {
                setIsProcessing(false);
                setIsProcessed(true);
            }, 3000);
        }
    })
    useEffect(() => {
        if (isProcessed) {
            const myTimeout = setTimeout(function () {
                setIsProcessed(false);
                setIsApproved(true);
                clearTimeout(myTimeout);
            }, 3000);
        }
    }, [isProcessed])

    return (
        <FDialog size={"medium"} variant={"new-popup"} show={transactionPopup} onHide={() => onclose()} className="transaction-status text-center" showClose={true}>
            {isProcessing ? (
                <React.Fragment>
                    <FItem align="center">
                        <img src={transactionIsconfirmed} alt={''} style={{ width: 100, height: 100 }} />
                        <FTypo size={20} weight={700} className="f-mt-1 f-pb-3">Confirm This Transaction in your Wallet.</FTypo>
                    </FItem>
                </React.Fragment>
            ) : isProcessed === true ? (
                <React.Fragment>
                    <FItem align="center">
                        <img src={transactionIsconfirmed} style={{ width: 100, height: 100 }} alt="" />

                        <FTypo color="#FFFFFF" size={20} weight={700} className="f-mt-1">
                            The transaction was successfully sent!
                        </FTypo>
                        <FTypo size={14} weight={400} className="f-mt-1">
                            View on Explorer
                        </FTypo>
                        <FTypo size={12} weight={400} color={'#D9B373'} className={'f-mt-1'}>
                            Tx Processing - Please Wait
                        </FTypo>
                        <img src={underLine} alt="" className={'f-mb-2 f-mt-1'} />
                    </FItem>
                </React.Fragment>
            ) : isApproved ? (
                <React.Fragment>
                    <FItem align="center">
                        <img src={IconSubmitted} style={{ width: 100, height: 100 }} alt="" />
                        <FTypo color="#D9B373" size={20} weight={700} className="f-mt-1">
                            Transaction Processed
                        </FTypo>
                        {status && status === 'unstake' &&
                            <FTypo size={14} weight={400} className="f-mt-1">
                                You hace un-staked NFT plus 21 TOKEN rewards
                            </FTypo>
                        }
                        <FTypo size={14} weight={400} className="f-mt-1 cursor-pointer">
                            <span>View on Explorer</span>
                        </FTypo>
                        <FItem>
                            <FButton
                                title={"CONTINUE"}
                                className="f-mt-1 f-mb-2 custom-font-size-16 font-700 clr_black_new font-face-mod"
                                style={{ width: 200, height: 42 }}
                                onClick={() => {
                                    if (status && status === 'unstake') {
                                        setStakeNft(false); //hide the stake nft now card
                                        setUnStakeNftFlow(false);
                                        setTransactionPopup(false);
                                        setUnStakeNftFlowOpened(false);
                                    } else {
                                        setUnStakeNftFlow(true); //unstake flow is starting
                                        setStakeNft(false); //hide the stake nft now card
                                        setTransactionPopup(false);
                                    }

                                }} />
                        </FItem>
                    </FItem>
                </React.Fragment>
            )
                :
                null}
        </FDialog>
    );
};
