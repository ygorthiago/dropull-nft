import { IAssets } from '../../models/types';
import { AssetOwnerCard } from '../AssetOwnerCard';
import {
  AssetCardContainer,
  AssetCardInfos,
  AssetCardTitle
} from './styles';

interface IAssetCard {
  asset: IAssets;
  clickFunction: () => void;
}

export function AssetCard({
  asset,
  clickFunction
}: IAssetCard) {
  return (
    <AssetCardContainer onClick={clickFunction}>
      <img src={!!asset.image_url ? asset.image_url : asset.asset_contract.image_url} alt={asset.name} />
      <AssetCardInfos>
        <AssetCardTitle>{asset.name}</AssetCardTitle>
        <AssetOwnerCard
          imageUrl={asset.asset_contract.image_url}
          name={asset.asset_contract.name}
          address={asset.asset_contract.address}
        />
      </AssetCardInfos>
    </AssetCardContainer>
  )
}