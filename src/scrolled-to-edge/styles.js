import styled from '@emotion/styled';
import { red } from '../app/styles/colors';

export const Toast = styled.nav`
  background: ${red};
  border-radius: 8px;
  bottom: 20px;
  color: white;
  display: block;
  font-size: 16px;
  left: 50%;
  line-height: 20px;
  padding: 15px 20px;
  position: fixed;
  text-align: center;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 10;
`;

export const Example = styled.nav`
  border-radius: 8px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;
  > div {
    padding: 20px;
    text-align: center;
    nav {
      border-top: 1px solid #f8f9fa;
      margin: 20px -20px -20px -20px;
      position: relative;
      &:before {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
        content: '';
        display: block;
        height: 100%;
        left: 0;
        opacity: 1;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 20px;
      }
      &:after {
        background: linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent);
        content: '';
        display: block;
        height: 100%;
        opacity: 1;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
      }
      &.at-left {
        &:before {
          opacity: 0;
        }
      }
      &.at-right {
        &:after {
          opacity: 0;
        }
      }
      span {
        display: flex;
        overflow: auto;
        width: 100%;
      }
      a {
        color: #adb5bd;
        display: block;
        font-size: 16px;
        line-height: 20px;
        padding: 20px;
        text-decoration: none;        
        white-space: nowrap;
      }
    }
    &:nth-of-type(2) {
      background: #f8f9fa;
      height: 600px;
      padding: 0;
      position: relative;
      text-align: left;
      &:before {
        background: linear-gradient(rgba(0, 0, 0, 0.2), transparent);
        content: '';
        display: block;
        height: 20px;
        left: 0;
        opacity: 1;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
      }
      &:after {
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.2));
        bottom: 0;
        content: '';
        display: block;
        height: 20px;
        left: 0;
        opacity: 1;
        pointer-events: none;
        position: absolute;
        width: 100%;
      }
      &.at-top {
        &:before {
          opacity: 0;
        }
      }
      &.at-bottom {
        &:after {
          opacity: 0;
        }
      }
      div {
        box-sizing: border-box;
        height: 100%;
        overflow: auto;
        padding: 20px;
      }
    }
  }
  p {
    font-size: 16px;
    line-height: 30px;
  }
`;