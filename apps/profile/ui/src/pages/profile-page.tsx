import styled from 'styled-components';
import { useStore } from '@super-rad-poc/common/hooks';
import themeGet from '@styled-system/theme-get';
const StyledProfilePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.background')};
  overflow-x: hidden;
`;

export const ProfilePage = () => {
  const { user } = useStore();
  return (
    <StyledProfilePage>
      <h1>Profile Page</h1>
      <p>{user?.name}</p>
      <img src={user?.picture} alt="profile" />
    </StyledProfilePage>
  );
};
