import { FTypo } from 'ferrum-design-system';
import React from 'react';
import iconPolygon from '../../assets/img/iconPolygon.svg'

interface Props {
    unStakeNftFlowOpened: any;
}
export const NftMaturityCard = ({ unStakeNftFlowOpened }: Props) => {

    return (
        <div className='nft-maturity-card staking-cards' style={{ width: 450, height: 410 }}>
            <FTypo size={20} weight={700} color='#ffffff' align={'center'}>
                MATURITY AT
            </FTypo>
            <FTypo size={18} weight={400} color='#D9B373' align={'center'} className={'f-mt--5'}>
                15 December 2022, 15:00:00
            </FTypo>
            <div className='d_flex justify_center align_center f-mt-2'>
                <div className='time-box f-mr-1'>
                    <FTypo size={30} weight={400} color='#D9B373' align={'center'}>
                        7
                    </FTypo>
                    <FTypo size={14} weight={700} color='#ffffff' align={'center'} className={'f-mt-1'}>
                        Months
                    </FTypo>
                </div>
                <div className='time-box f-mr-1'>
                    <FTypo size={30} weight={400} color='#D9B373' align={'center'}>
                        21
                    </FTypo>
                    <FTypo size={14} weight={700} color='#ffffff' align={'center'} className={'f-mt-1'}>
                        DAYS
                    </FTypo>
                </div>
                <div className='time-box'>
                    <FTypo size={30} weight={400} color='#D9B373' align={'center'}>
                        3
                    </FTypo>
                    <FTypo size={14} weight={700} color='#ffffff' align={'center'} className={'f-mt-1'}>
                        HOURS
                    </FTypo>
                </div>
            </div>
            <FTypo size={20} weight={700} color='#ffffff' align={'center'} className={'f-mt-2'}>
                EARLY WITHDRAW OPEN
            </FTypo>
            <FTypo size={18} weight={400} color='#D9B373' align={'center'} className={'f-mt--5'}>
                15 December 2022, 15:00:00
            </FTypo>
            {unStakeNftFlowOpened &&
                <div className='f-mt-1 f-pl-2 f-pr-1 w-100'>
                    <div className='d_flex justify_center align_center'>
                        <img src={iconPolygon} alt={iconPolygon} style={{ height: 20, width: 20, marginRight: 12 }} />
                        <div className='w-100 d_flex justify_between align_center'>
                            <span className={'custom-font-size-16 font-700'}>REWARDS AT MATURITY</span>
                            <span className={'primaryColor custom-font-size-16 font-700 '}>45 Token</span>
                        </div>
                    </div>
                    <div className='f-mt-1 d_flex justify_center align_center'>
                        <img src={iconPolygon} alt={iconPolygon} style={{ height: 20, width: 20, marginRight: 12 }} />
                        <div className='w-100 d_flex justify_between align_center'>
                            <span className={'custom-font-size-16 font-700'}>REWARDS IF UN-STAKED NOW</span>
                            <span className={'primaryColor custom-font-size-16 font-700 '}>45 Token</span>
                        </div>
                    </div>
                </div>

            }
        </div>

    );
};