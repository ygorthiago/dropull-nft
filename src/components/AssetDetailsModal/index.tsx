import { IAssetModal, ISalesHistory } from '../../models/types';
import { IoMdClose } from 'react-icons/io'
import { SiEthereum } from 'react-icons/si'
import { BiDollar } from 'react-icons/bi'
import Modal from '../Modal';

import {
  AssetDetailsContainer,
  AssetDetailsInfos,
  AssetDetailsTitle,
  AssetPrice,
  AssetPriceContainer,
  LastSalesContainer
} from './styles';
import { AssetOwnerCard } from '../AssetOwnerCard';
import { handleAllAssetMediaType } from '../../utils/handleAssetMediaType';
import { useEffect, useState } from 'react';
import api from '../../service/api';

export function AssetDetailsModal ({
  isOpen,
  setIsOpen,
  asset
}: IAssetModal) {
  const [salesHistory, setSalesHistory] = useState<ISalesHistory | undefined>();

  useEffect(() => {
    if (asset) {
      api.get('/events', {
        params: {
          asset_contract_address: asset.asset_contract.address,
          event_type: 'successful',
          limit: 3,
        }
      }).then((response) => {
        setSalesHistory(response.data)
      })
    }
  }, [asset])

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {asset && (
        <AssetDetailsContainer>
        <IoMdClose onClick={() => setIsOpen(false)} />
        <AssetDetailsTitle>{asset.name}</AssetDetailsTitle>
        {handleAllAssetMediaType(asset)}
      
        <AssetDetailsInfos>         
          <legend>{asset.description}</legend>
          <AssetOwnerCard
            imageUrl={asset.asset_contract.image_url}
            name={asset.asset_contract.name}
            address={asset.asset_contract.address}
          />
          {asset.last_sale && (
            <AssetPriceContainer>
              <h3>Price</h3>
              <AssetPrice>
                <div>
                  <SiEthereum />
                  <p>{+asset.last_sale.payment_token.eth_price}</p>
                </div>
                <div>
                  <BiDollar />
                  <p>{new Intl.NumberFormat('en-US', { currency: 'USD' }).format(+asset.last_sale.payment_token.usd_price)}</p>
                </div>
              </AssetPrice>
            </AssetPriceContainer>
          )}

          {salesHistory && 
            <LastSalesContainer>
              {!!salesHistory.asset_events.length && <h3>Last sales</h3>}
              {salesHistory.asset_events.map(sale => 
                <AssetPrice>
                  <div>
                    <SiEthereum />
                    <p>{+sale.payment_token.eth_price}</p>
                  </div>
                  <p>{`${sale.seller.user.username ?? 'Unnamed'} selled ${sale.quantity}x to ${sale.winner_account.user.username ?? 'Unnamed'}`}</p>
                </AssetPrice>
              )}
            </LastSalesContainer>
          }
        </AssetDetailsInfos>
      </AssetDetailsContainer>
      )}
      
    </Modal>
  );
};