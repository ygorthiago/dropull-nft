import { useState } from 'react';
import { IAssetModal, IUserData } from '../../models/types';
import api from '../../service/api';
import Modal from '../Modal';
import { UserProfileCard } from '../UserProfileCard';
import { SeachButton, SearchUserModalContainer } from './styles';
import { IoMdClose } from 'react-icons/io'
import SearchInput from '../SearchInput';
import { Loading } from '../Loading';

export function SearchUserModal ({
  isOpen,
  setIsOpen,
}: IAssetModal) {
  const [address, setAddress] = useState('');
  const [userData, setUserData] = useState<IUserData | undefined>();
  const [hasError, setHasError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false)

  function closeModal() {
    setUserData(undefined)
    setHasError(undefined)
    setIsOpen(!isOpen);
  }

  function handleSubmit() {
    setUserData(undefined)
    setIsLoading(true)
      api.get(`/asset_contract/${address}`)
      .then((response) => {
        setUserData(response.data)
        setHasError(undefined)
        setIsLoading(false)

      }).catch((err) => {
        if ((err as Error).message.includes("404")){
          setHasError('notfound')
        } else {
          setHasError('servererror')
        }

        setUserData(undefined)
        setIsLoading(false)
      })  
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={closeModal}>
      <SearchUserModalContainer>
        <IoMdClose onClick={() => closeModal()} />
        <SearchInput placeholder="Seach users by address" autoFocus onChange={e => setAddress(e.target.value)}/>
        <SeachButton type="button" onClick={() => handleSubmit()}>{isLoading ? <Loading /> : 'Search by address'}</SeachButton>
          {userData && (<UserProfileCard userData={userData} address={address} />)}
          {hasError === 'notfound' && <h3>Address not found</h3>}
          {hasError === 'servererror' && <h3>Some error occurred. Please, try again</h3>}
      </SearchUserModalContainer>
    </Modal>
  );
};