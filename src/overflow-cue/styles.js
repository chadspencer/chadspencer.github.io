import styled from '@emotion/styled';
import { yellow } from '../app/styles/colors';

export const Example = styled.nav`
  background: white;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  left: 50%;
  margin: 0 auto 40px auto;
  position: relative;
  text-align: right;
  transform: translateX(-50%);
  width: 100vw;
  nav {
    display: flex;
    overflow: auto;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    position: relative;
    scrollbar-width: none;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
    a {
      color: black;
      display: block;
      font-size: 16px;
      line-height: 20px;
      padding: 20px 15px;
      text-align: center;
      text-decoration: none;        
      white-space: nowrap;
    }
  }
`;