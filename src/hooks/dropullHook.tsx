import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { IAssets } from "../models/types";
import api from "../services/api";
import { getAssetEvents } from "../store/modules/assetEvents/actions";
import { getAssets } from "../store/modules/assets/actions";
import { getProfile } from "../store/modules/profile/actions";

interface IGetAssetParams {
  order_by: string,
  collection?: string,
  order_direction: string,
  offset: number,
  limit: number,
}

interface IGetProfile {
  address: string,
  getAssetParams: IGetAssetParams
}

interface IUseDropull {
  isAssetOpen: boolean;
  setIsAssetOpen: (isOpen: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  selectedAsset: IAssets | undefined;
  setSelectedAsset: (asset: IAssets) => void;
  openAssetModal: (asset: IAssets) => void;
  getTrendingAssets: (params: IGetAssetParams) => void;
  getProfileData: ({address, getAssetParams}: IGetProfile) => void;
  getLastSales: (assetContractAddress: string) => void;
  getProfileByAddress: (address: string) => void;
  closeSearchModal: () => void
}

interface IGetAssetParams {
  order_by: string,
  collection?: string,
  order_direction: string,
  offset: number,
  limit: number,
}

export function useDropull(): IUseDropull {
  const dispatch = useDispatch();
  const [isAssetOpen, setIsAssetOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState<IAssets | undefined>()

  const getTrendingAssets = useCallback((
    getAssetParams: IGetAssetParams
  ) => {
    dispatch(getAssets({  assetsList: [], isLoading: true }))

    api.get('/assets', {
      params: getAssetParams,
    }).then((response) => {
        dispatch(getAssets({ 
          assetsList: response.data.assets, 
          isLoading: false 
        }))
    })
  }, [dispatch])

  const getProfileByAddress = useCallback((address: string) => {
    const profileInitialState = {
      collection: {
        banner_image_url: "",
        large_image_url: "",
        image_url: "",
      },
      name: "",
      description: "",
    }

    dispatch(getProfile({
      profile: profileInitialState,
      isLoading: true,
    }))

    api.get(`/asset_contract/${address}`)
      .then((response)  => {
        dispatch(getProfile({ 
          profile: response.data, 
          isLoading: false, 
          errorMessage: undefined 
        }))
      }).catch((err) => {
        if ((err as Error).message.includes('404')){
          dispatch(getProfile({ 
            profile: profileInitialState, 
            isLoading: false, 
            errorMessage: 'notfound' 
          }))
          console.log('notfound')
        } else {
          dispatch(getProfile({ 
            profile: profileInitialState, 
            isLoading: false, 
            errorMessage: 'servererror' 
          }))
        }
      })
  }, [dispatch])

  const getProfileData = useCallback(({address, getAssetParams}: IGetProfile) => {
    dispatch(getProfile({
      profile: {
        collection: {
          banner_image_url: "",
          large_image_url: "",
          image_url: "",
        },
        name: "",
        description: "",
      }
    }))

    api.get(`/asset_contract/${address}`)
      .then((response)  => {
        dispatch(getProfile({ profile: response.data }))

        const queryParams: IGetAssetParams = {
          ...getAssetParams,
          collection: response.data.collection.slug as string
        }

        getTrendingAssets(queryParams)
      })
  }, [getTrendingAssets, dispatch])

  const getLastSales = useCallback((
    assetContractAddress: string
  ) => {
    dispatch(getAssetEvents({ asset_events: [] }))

    api.get('/events', {
      params: {
        asset_contract_address: assetContractAddress,
        event_type: 'successful',
        limit: 3,
      }
    }).then((response) => {
      dispatch(getAssetEvents({ asset_events: response.data.asset_events }))
    })
  }, [dispatch])

  const openAssetModal = useCallback((asset: IAssets) => {
    setIsAssetOpen(true)
    setSelectedAsset(asset)
  }, [])

  const closeSearchModal = useCallback(() => {
    dispatch(getProfile({
      profile: {
        collection: {
          banner_image_url: "",
          large_image_url: "",
          image_url: "",
        },
        name: "",
        description: "",
      },
      isLoading: false,
      errorMessage: undefined,
    }))

    setIsSearchOpen(!isSearchOpen)
  }, [dispatch, isSearchOpen])

  return {
    isAssetOpen,
    setIsAssetOpen,
    isSearchOpen,
    setIsSearchOpen,
    selectedAsset, 
    setSelectedAsset,
    openAssetModal,
    getTrendingAssets,
    getProfileData,
    getLastSales,
    getProfileByAddress,
    closeSearchModal,
  }
}