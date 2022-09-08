import { FButton, FTypo } from 'ferrum-design-system';
import React from 'react';
import iconNever from '../../assets/img/icon-never.svg'

interface Props {
    setTransactionPopup: any;
}
export const StakeYourNftCard = ({ setTransactionPopup }: Props) => {

    return (
        <div className='stake-your-nft-card staking-cards'>
            <FTypo size={20} weight={700} color='#D9B373'>
                STAKE NFT
            </FTypo>
            <FTypo size={13} weight={400} color='#FFFFFF' className={'f-mt-2'}>
                YOUR NFT ADDRESS
            </FTypo>
            <div className='address-box f-mt--5'>
                <FTypo size={14} weight={400} color='#FFFFFF'>
                    0x071ef1A1f8B92A2d4E48b35705481c92E64b3d08
                </FTypo>
            </div>
            <FTypo size={13} weight={400} color='#FFFFFF' className={'f-mt-1'}>
                CONTRACT ADDRESS
            </FTypo>
            <div className='address-box f-mt--5'>
                <FTypo size={14} weight={400} color='#FFFFFF'>
                    0x071ef1A1f8B92A2d4E48b35705481c92E64b3d08
                </FTypo>
            </div>
            <div className='f-mt-1 f-mb-1 d_flex justify_between align_center'>
                <div className='d_flex justify_center align_center'>
                    <img src={iconNever} alt={iconNever} style={{ width: 21, height: 19, marginRight: 15 }} />
                    <FTypo size={12} weight={700} color='#FFFFFF'>
                        NEVER SEND NFT/TOKEN TO THE CONTRACT, THEY WILL BE LOCKED FOREVER. ONLY USE THIS UI TO STAKE.
                    </FTypo>
                </div>
                <div className='d_flex justify_end align_end'>
                    <FButton
                        title={"STAKE YOUR NFT NOW"}
                        style={{ width: 220, height: 42 }}
                        className={'primary-btn-text-clr custom-font-size-16 font-700 font-face-mod'}
                        onClick={() => { setTransactionPopup(true) }} />
                </div>

            </div>
        </div>

    );
};