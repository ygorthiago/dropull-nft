import { IAssets } from "../models/types"

export function handleAssetMediaType(asset: IAssets) {
  if (asset.animation_url) {
    if (asset.animation_url.match(/.mp4|avi|wvm/i)) {
      return <video src={asset.animation_url} autoPlay loop />
    }

    if (asset.animation_url.match(/.gif/i)) {
      return <img src={asset.animation_url} alt={asset.name} />
    }

    if (!asset.animation_url.match(/.mp4|avi|wvm/i)) {
      return <iframe title={asset.name} src={asset.animation_url }></iframe>
    }
  }

  if (!asset.image_url && !asset.animation_url ) {
    return <img src={asset.asset_contract.image_url} alt={asset.name} />
  }

  if (asset.image_url) {
    if (asset.image_url.match(/.mp4|avi|wvm/i)) {
      return <video src={asset.image_url} autoPlay loop />
    }

    return <img src={asset.image_url} alt={asset.name} />
  }
}