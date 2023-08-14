import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 27rem;
  height: auto;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: 500;
    }
  }

  > button {
    background-color: transparent;
    transition: all 0.3s;
    font-size: 1.2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
`;

export const Description = styled.p`
  font-weight: 600;

  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.02rem;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Contacts = styled.button`
  position: absolute;
  right: 1rem;
  top: 3rem;

  border-radius: 0.5rem;
  padding: 0 1rem;
  height: 2.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 550;
  font-size: 1.05rem;
  display: none;

  &.active {
    display: block;
  }
`;
