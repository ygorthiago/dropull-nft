import React from 'react';
import { useHistory } from 'react-router';
import { IUserData } from '../../models/types';
import { UserProfileCardContainer, UserProfileCardInfos } from './styles';

interface IUserProfileCard {
  userData: IUserData;
  address: string;
}

export function UserProfileCard({ userData, address }: IUserProfileCard) {
  const history = useHistory();

  return (
    <UserProfileCardContainer onClick={() => history.push(`/user/${address}`)}>
      <img src={userData.collection.banner_image_url} alt="" />
      <UserProfileCardInfos>
        <img src={userData.collection.large_image_url} alt="" />
        <h2>{userData.name}</h2>
        <legend>{userData.description}</legend>
      </UserProfileCardInfos>
    </UserProfileCardContainer>
  )
}