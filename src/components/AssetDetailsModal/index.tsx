import { IAssetModal } from '../../models/types';
import { IoMdClose } from 'react-icons/io'
import { SiEthereum } from 'react-icons/si'
import { BiDollar } from 'react-icons/bi'
import Modal from '../Modal';

import {
  AssetDetailsContainer,
  AssetDetailsInfos,
  AssetDetailsTitle,
  AssetPrice,
  AssetPriceContainer
} from './styles';
import { AssetOwnerCard } from '../AssetOwnerCard';
export function AssetDetailsModal ({
  isOpen,
  setIsOpen,
  asset
}: IAssetModal) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {asset && (
        <AssetDetailsContainer>
        <IoMdClose onClick={() => setIsOpen(false)} />
        <AssetDetailsTitle>{asset.name}</AssetDetailsTitle>
        {!asset.animation_url 
          ? <img src={!!asset.image_url ? asset.image_url : asset.asset_contract.image_url} alt="" />
          : asset.animation_url.match(/.mp4|avi|wvm/i) ? <video src={asset.animation_url} autoPlay loop /> 
            : <iframe title={asset.name} src={asset.animation_url }></iframe>
        }
      
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
        </AssetDetailsInfos>
      </AssetDetailsContainer>
      )}
      
    </Modal>
  );
};