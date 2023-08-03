export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id}>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};
