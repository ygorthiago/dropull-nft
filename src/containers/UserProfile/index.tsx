import React, { useCallback, useEffect, useState } from 'react';
import { 
  UserProfileContainer, 
  UserProfileCardContainer,
  UserProfileCardInfos,
  CollectionContainer,
  CollectionList,
  GoBackContainer
} from './styles';
import { AssetCard } from '../../components/AssetCard';
import api from '../../service/api';
import { AssetDetailsModal } from '../../components/AssetDetailsModal';
import { IAssets, IUserCollection, IUserData } from '../../models/types'
import { Link, useParams } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5'
import { Loading } from '../../components/Loading';

interface IParams {
  address: string
}

export function UserProfile() {
  const [userData, setUserData] = useState<IUserData | undefined>();
  const [userCollection, setUserCollection] = useState<IUserCollection | undefined>()
  const [selectedAsset, setSelectedAsset] = useState<IAssets | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const { address } = useParams<IParams>();

  const openAssetModal = useCallback((asset: IAssets) => {
    setIsOpen(true)
    setSelectedAsset(asset)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    api.get(`/asset_contract/${address}`)
      .then((response)  => {
        setUserData(response.data)
        api.get('/assets', {
          params: {
            collection: response.data.collection.slug,
            order_by: 'sale_price',
            order_direction: 'desc'
          }
        }).then(response => {
            setUserCollection(response.data)
            setIsLoading(false)
          })
      })
  }, [address])

  return (
    <UserProfileContainer>
      {userData && (
      <>
        <UserProfileCardContainer>
          <img src={userData.collection.banner_image_url} alt="" />
          <GoBackContainer>
            <Link to='/'>
              <IoChevronBack />
              Back
            </Link>
          </GoBackContainer>
          <UserProfileCardInfos>
              <img
                src={userData.collection.large_image_url 
                  ? userData.collection.large_image_url 
                  : userData.collection.image_url
                }
                alt={userData.name} 
              />
            <h2>{userData.name}</h2>
            <legend>{userData.description}</legend>
          </UserProfileCardInfos>
        </UserProfileCardContainer>
        <CollectionContainer>
          <h2>Main NFTs</h2>
          <CollectionList>
          {isLoading && <Loading />}
            {userCollection && userCollection.assets.map((asset) => {
              return (
                asset.name &&
                <AssetCard 
                  key={asset.id}
                  asset={asset} 
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