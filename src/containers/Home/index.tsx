import { useCallback, useEffect, useState } from "react";
import { AssetCard } from "../../components/AssetCard";
import { AssetDetailsModal } from "../../components/AssetDetailsModal";
import SearchInput from "../../components/SearchInput";
import { SearchUserModal } from "../../components/SearchModal";
import { IAssets, IUserCollection } from "../../models/types";
import api from "../../service/api";
import { HomePageContainer, TrendingAssetsContainer, TrendingAssetsList } from "./styles";

export function HomePage() {
  const [trendingAssets, setTrendingAssets] = useState<IUserCollection | undefined>();
  const [isAssetOpen, setIsAssetOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState<IAssets | undefined>()

  const openAssetModal = useCallback((asset: IAssets) => {
    setIsAssetOpen(true)
    setSelectedAsset(asset)
  }, [])

  useEffect(() => {
    api.get('/assets', {
      params: {
        order_by: 'sale_date',
        order_direction: 'desc',
        offset: 0,
        limit: 20,
      }
    }).then((response) => {
        setTrendingAssets(response.data)
    })
  }, [])

  return (
    <HomePageContainer>
      <SearchInput placeholder="Seach users by address" onClick={() => setIsSearchOpen(true)} />
      <TrendingAssetsContainer>
        <h2>Trending NTFs</h2>
        <TrendingAssetsList>
          {trendingAssets && trendingAssets.assets.map(asset => {
            return (
              asset.name &&
              <AssetCard 
                key={asset.id}
                asset={asset}
                clickFunction={() => openAssetModal(asset)}
              />
            )
          })}
        </TrendingAssetsList>
      </TrendingAssetsContainer>
      <AssetDetailsModal isOpen={isAssetOpen} setIsOpen={setIsAssetOpen} asset={selectedAsset} />
      <SearchUserModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </HomePageContainer>
  )
}