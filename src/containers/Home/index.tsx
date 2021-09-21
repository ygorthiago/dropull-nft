import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AssetCard } from "../../components/AssetCard";
import { AssetDetailsModal } from "../../components/AssetDetailsModal";
import { Loading } from "../../components/Loading";
import SearchInput from "../../components/SearchInput";
import { SearchUserModal } from "../../components/SearchModal";
import { IState } from "../../store";
import { IAssetReducer } from "../../store/modules/assets/types";
import { useDropull } from "../../hooks/dropullHook";
import { HomePageContainer, TrendingAssetsContainer, TrendingAssetsList } from "./styles";

export function HomePage() {
  const { assetsList, isLoading } = useSelector<IState, IAssetReducer>(state => state.assets)
  const { 
    getTrendingAssets,
    isAssetOpen,
    setIsAssetOpen,
    isSearchOpen,
    selectedAsset, 
    openAssetModal,
    closeSearchModal,
  } = useDropull()

  useEffect(() => {
    getTrendingAssets({
      order_by: 'sale_count',
      order_direction: 'desc',
      offset: 0,
      limit: 20,
    })
  }, [getTrendingAssets])

  return (
    <HomePageContainer>
      <h1>Dropull</h1>
      <SearchInput 
        placeholder="Seach users by address" 
        onClick={() => closeSearchModal()} 
      />
      <TrendingAssetsContainer>
        <h2>Trending NFTs</h2>
        <TrendingAssetsList isLoading={isLoading}>
          {isLoading && <Loading />}
          {assetsList && assetsList.map(asset => {
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

      <AssetDetailsModal
        isOpen={isAssetOpen}
        setIsOpen={setIsAssetOpen}
        asset={selectedAsset}
      />
      <SearchUserModal isOpen={isSearchOpen} setIsOpen={closeSearchModal} />
    </HomePageContainer>
  )
}