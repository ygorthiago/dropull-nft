import { IAssetModal } from '../../models/types';

import Modal from '../Modal';

import {
  AssetDetailsContainer,
  AssetDetailsInfos,
  AssetDetailsOwner,
  AssetDetailsTitle
} from './styles';
export function AssetDetailsModal ({
  isOpen,
  setIsOpen,
  asset
}: IAssetModal) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {asset && (
        <AssetDetailsContainer>
        <p onClick={() => setIsOpen(false)}>X</p>
        <AssetDetailsTitle>{asset.name}</AssetDetailsTitle>

        <img src={asset.image_url} alt="" />
        <AssetDetailsInfos>
         
          <legend>{asset.description}</legend>
          <AssetDetailsOwner>
            <img src={asset.asset_contract.image_url} alt={asset.asset_contract.name} />
            <h4>{asset.asset_contract.name}</h4>
          </AssetDetailsOwner>
        </AssetDetailsInfos>
      </AssetDetailsContainer>
      )}
      
    </Modal>
  );
};