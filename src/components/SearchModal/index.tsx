import { useState } from 'react';
import { ISearchModal } from '../../models/types';
import Modal from '../Modal';
import { UserProfileCard } from '../UserProfileCard';
import { SeachButton, SearchUserModalContainer } from './styles';
import { IoMdClose } from 'react-icons/io'
import SearchInput from '../SearchInput';
import { Loading } from '../Loading';
import { useDropull } from '../../hooks/dropullHook';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IProfileReducer } from '../../store/modules/profile/types';

export function SearchUserModal ({
  isOpen,
  setIsOpen,
}: ISearchModal) {
  const [address, setAddress] = useState('');
  const userProfile = useSelector<IState, IProfileReducer>(state => state.profile)

  const { getProfileByAddress } = useDropull()

  function handleSubmit() {
    getProfileByAddress(address);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <SearchUserModalContainer>
        <IoMdClose onClick={() => setIsOpen()} />
        <SearchInput 
          placeholder="Seach users by address" 
          data-testid="searchmodal-input" 
          autoFocus 
          onChange={e => setAddress(e.target.value)}
        />
        <SeachButton type="button" onClick={() => handleSubmit()}>{userProfile.isLoading ? <Loading /> : 'Search by address'}</SeachButton>
          {userProfile.profile.name && (<UserProfileCard userData={userProfile.profile} address={address} />)}
          {userProfile.errorMessage === 'notfound' && <h3>Address not found</h3>}
          {userProfile.errorMessage === 'servererror' && <h3>Some error occurred. Please, try again</h3>}
      </SearchUserModalContainer>
    </Modal>
  );
};