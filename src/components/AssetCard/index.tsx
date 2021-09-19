import {
  AssetCardContainer,
  AssetCardCreatorContainer,
  AssetCardInfos,
  AssetCardTitle
} from './styles';

interface IAssetCard {
  assetImage: string;
  assetName: string;
  ownerImage: string;
  ownerName: string;
  clickFunction: () => void;
}

export function AssetCard({
  assetImage,
  assetName,
  ownerImage,
  ownerName,
  clickFunction
}: IAssetCard) {
  return (
    <AssetCardContainer onClick={clickFunction}>
      <img src={assetImage} alt={assetName} />
      <AssetCardInfos>
        <AssetCardTitle>{assetName}</AssetCardTitle>
        <AssetCardCreatorContainer>
          <img src={ownerImage} alt={ownerName} />
          <h4>{ownerName}</h4>
        </AssetCardCreatorContainer>
      </AssetCardInfos>
    </AssetCardContainer>
  )
}