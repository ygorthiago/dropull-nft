import { AssetOwnerCardContainer } from "./styles";

interface IAssetOwnerCard {
  imageUrl?: string;
  name: string;
  address: string;
}
export function AssetOwnerCard({
  imageUrl,
  name,
  address
}: IAssetOwnerCard) {
  return (
    <AssetOwnerCardContainer to={`/user/${address}`}>
      {imageUrl && <img src={imageUrl} alt={name} />}
      <h4>{name}</h4>
    </AssetOwnerCardContainer>
  )
}