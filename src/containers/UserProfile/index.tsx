import { useEffect} from 'react';
import { 
  UserProfileContainer, 
  UserProfileCardContainer,
  UserProfileCardInfos,
  CollectionContainer,
  CollectionList,
  GoBackContainer
} from './styles';
import { AssetCard } from '../../components/AssetCard';
import { AssetDetailsModal } from '../../components/AssetDetailsModal';
import { Link, useParams } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5'
import { Loading } from '../../components/Loading';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { useDropull } from '../../hooks/dropullHook';
import { IAssetReducer } from '../../store/modules/assets/types';
import { IProfileReducer } from '../../store/modules/profile/types';

interface IParams {
  address: string
}

export function UserProfile() {
  const { address } = useParams<IParams>();
  const { profile } = useSelector<IState, IProfileReducer>(state => state.profile)
  const { assetsList, isLoading } = useSelector<IState, IAssetReducer>(state => state.assets)

  const { 
    getProfileData,
    isAssetOpen,
    setIsAssetOpen,
    selectedAsset, 
    openAssetModal,
  } = useDropull()

  useEffect(() => {
    const queryParams = {
      order_by: 'sale_price',
      order_direction: 'desc',
      offset: 0,
      limit: 20,
    }

    getProfileData({ address, getAssetParams: queryParams })
  }, [address, getProfileData])

  return (
    <UserProfileContainer>
      {profile.collection && (
      <>
        <UserProfileCardContainer>
          <img src={profile.collection.banner_image_url} alt="" />
          <GoBackContainer>
            <Link to='/'>
              <IoChevronBack />
              Back
            </Link>
          </GoBackContainer>
          <UserProfileCardInfos>
              <img
                src={profile.collection.large_image_url 
                  ? profile.collection.large_image_url 
                  : profile.collection.image_url
                }
                alt="" 
              />
            <h2>{profile.name}</h2>
            <legend>{profile.description}</legend>
          </UserProfileCardInfos>
        </UserProfileCardContainer>
        <CollectionContainer>
          <h2>Main NFTs</h2>
          <CollectionList isLoading={isLoading}>
          {isLoading && <Loading />}
            {!!assetsList.length && assetsList.map((asset) => {
              return (
                asset.name &&
                <AssetCard 
                  key={asset.id}
                  asset={asset} 
                  clickFunction={() => openAssetModal(asset)}
                />
              )
            })}
            {!assetsList.length && !isLoading && <h2>Nothing to see here</h2>}
          </CollectionList>
        </CollectionContainer>
      </>
      )}
      <AssetDetailsModal isOpen={isAssetOpen} setIsOpen={setIsAssetOpen} asset={selectedAsset} />
    </UserProfileContainer>
  )
}