import React, { useCallback, useEffect, useState } from 'react';
import { 
  UserProfileContainer, 
  UserProfileCardContainer,
  UserProfileCardInfos,
  CollectionContainer,
  CollectionList
} from './styles';
import { AssetCard } from '../../components/AssetCard';
import api from '../../service/api';
import { AssetDetailsModal } from '../../components/AssetDetailsModal';
import { IAssets, IUserCollection, IUserData } from '../../models/types'
import { useParams } from 'react-router-dom';

interface IParams {
  address: string
}

export function UserProfile() {
  const [userData, setUserData] = useState<IUserData | undefined>();
  const [userCollection, setUserCollection] = useState<IUserCollection | undefined>()
  const [selectedAsset, setSelectedAsset] = useState<IAssets | undefined>()

  const [isOpen, setIsOpen] = useState(false)
  const { address } = useParams<IParams>();

  const openAssetModal = useCallback((asset: IAssets) => {
    setIsOpen(true)
    setSelectedAsset(asset)
  }, [])

  useEffect(() => {
    api.get(`/asset_contract/${address}`)
      .then((response)  => {
        setUserData(response.data)
        api.get('/assets', {
          params: {
            collection: response.data.collection.slug,
          }
        }).then(response => {
            setUserCollection(response.data)
          })
      })
  }, [address])

  return (
    <UserProfileContainer>
      {userData && (
      <>
        <UserProfileCardContainer>
          <div>
            <img src={userData.collection.banner_image_url} alt="" />
          </div>
          <UserProfileCardInfos>
            <img src={userData.collection.large_image_url} alt="" />
            <h2>{userData.name}</h2>
            <legend>{userData.description}</legend>
          </UserProfileCardInfos>
        </UserProfileCardContainer>
        <CollectionContainer>
          <h2>Collection</h2>
          <CollectionList>
            {userCollection && userCollection.assets.map((asset) => {
              return (
                asset.name &&
                <AssetCard 
                  key={asset.id}
                  assetImage={asset.image_url}
                  assetName={asset.name}
                  ownerImage={asset.asset_contract.image_url}
                  ownerName={asset.asset_contract.name} 
                  clickFunction={() => openAssetModal(asset)}
                />
              )
            })}
          </CollectionList>
        </CollectionContainer>
      </>
      )}
      <AssetDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} asset={selectedAsset} />
    </UserProfileContainer>
  )
}