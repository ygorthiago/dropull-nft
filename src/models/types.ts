export interface IUserData {
  collection: ICollection;
  name: string;
  description: string;
}

export interface IUserCollection {
  assets: IAssets[]
}

export interface IAssets {
  asset_contract: IAssetContract
  name: string;
  image_url: string;
  animation_url: string;
  description: string;
  id: string;
  last_sale: {
    payment_token: {
      eth_price: string
      usd_price: string
    }
  }
}

interface ICollection {
  banner_image_url: string;
  large_image_url: string;
  image_url: string;
}

interface IAssetContract {
  image_url: string;
  name: string;
  address: string;
}

export interface IEventsHistory {
  asset_events: IAssetEvents[]
}

export interface IAssetEvents {
  payment_token: {
    eth_price: string
  };
  quantity: string;
  seller: {
    user: {
      username: string | null
    } | null
  };
  winner_account: {
    user: {
      username: string | null
    } | null
  };
}

export interface IAssetModal {
  isOpen: boolean; 
  setIsOpen: (isOpen: boolean) => void;
  asset?: IAssets;
}

export interface ISearchModal {
  isOpen: boolean; 
  setIsOpen: () => void;
  asset?: IAssets;
}