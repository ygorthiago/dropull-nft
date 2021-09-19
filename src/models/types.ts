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
  description: string;
  id: string;
}

interface ICollection {
  banner_image_url: string;
  large_image_url: string;
}

interface IAssetContract {
  image_url: string;
  name: string;
}

export interface IAssetModal {
  isOpen: boolean; 
  setIsOpen: (isOpen: boolean) => void;
  asset?: IAssets;
}