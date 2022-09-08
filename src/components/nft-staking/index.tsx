import React from 'react';
import { NftConnectedContainer } from './nftConnectedConatiner';
import { NftNotConnectedContainer } from './nftNotConnectedContainer';

interface Props {
    isConnected: any;
}
export const NftContainer = ({ isConnected }: Props) => {
    return (
        <div style={{ paddingBottom: 100 }}>
            {isConnected ?
                <NftConnectedContainer />
                :
                <NftNotConnectedContainer />
            }
        </div>
    );
};