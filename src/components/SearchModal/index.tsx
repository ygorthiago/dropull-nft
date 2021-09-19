import { useState } from 'react';
import { SearchInput } from '../../containers/Home/styles';
import { IAssetModal, IUserData } from '../../models/types';
import api from '../../service/api';
import Modal from '../Modal';
import { UserProfileCard } from '../UserProfileCard';
import { SeachButton, SearchUserModalContainer } from './styles';
import { IoMdClose } from 'react-icons/io'

export function SearchUserModal ({
  isOpen,
  setIsOpen,
}: IAssetModal) {
  const [address, setAddress] = useState('');
  const [userData, setUserData] = useState<IUserData | undefined>();
  const [hasError, setHasError] = useState<string | undefined>();

  function closeModal() {
    setUserData(undefined)
    setIsOpen(!isOpen);
  }

  function handleSubmit() {
    setUserData(undefined)
      api.get(`/asset_contract/${address}`)
      .then((response) => {
        setUserData(response.data)
        setHasError(undefined)
      }).catch((err) => {
        if ((err as Error).message.includes("404")){
          setHasError('notfound')
        } else {
          setHasError('servererror')
        }

        setUserData(undefined)
      })  
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={closeModal}>
      <SearchUserModalContainer>
        <IoMdClose onClick={() => closeModal()} />
        <SearchInput placeholder="Seach users by address" autoFocus onChange={e => setAddress(e.target.value)}/>
        <SeachButton type="button" onClick={() => handleSubmit()}>Search address</SeachButton>
          {userData && (<UserProfileCard userData={userData} address={address} />)}
          {hasError === 'notfound' && <h3>Address not found</h3>}
          {hasError === 'servererror' && <h3>Some error occurred. Please, try again</h3>}
      </SearchUserModalContainer>
    </Modal>
  );
};