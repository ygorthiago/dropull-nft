import { IAssetModal, IEventsHistory } from '../../models/types';
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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { useDropull } from '../../hooks/dropullHook';

export function AssetDetailsModal ({
  isOpen,
  setIsOpen,
  asset
}: IAssetModal) {
  const { asset_events } = useSelector<IState, IEventsHistory>(state => state.assetEvents)
  const { getLastSales } = useDropull()

  useEffect(() => {
    if (asset) {
      getLastSales(asset.asset_contract.address)
    }
  }, [asset, getLastSales])

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

          {asset_events && 
            <LastSalesContainer>
              {!!asset_events.length && <h3>Last sales</h3>}
              {asset_events.map((sale, index) => {
                const sellerUsername = (sale.seller.user && sale.seller.user?.username) && sale.seller.user.username
                const buyerUsername = (sale.winner_account.user && sale.winner_account.user?.username) && sale.winner_account.user.username

                return (
                <AssetPrice key={index}>
                  <div>
                    <SiEthereum />
                    <p>{+sale.payment_token.eth_price}</p>
                  </div>
                  <p>{`${sellerUsername ?? 'Unnamed'} selled ${sale.quantity}x to ${buyerUsername ?? 'Unnamed'}`}</p>
                </AssetPrice>
                )}
              )}
            </LastSalesContainer>
          }
        </AssetDetailsInfos>
      </AssetDetailsContainer>
      )}
      
    </Modal>
  );
};