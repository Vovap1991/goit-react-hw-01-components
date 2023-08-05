import {
  FriendListWrapper,
  FriendListItem,
  FriendStatus,
  FriendImage,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
          <FriendStatus
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></FriendStatus>
          <FriendImage src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendListItem>
      ))}
    </FriendListWrapper>
  );
};
