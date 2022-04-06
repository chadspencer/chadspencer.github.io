import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { blue } from '../styles/colors';

const ubuntu = "'Ubuntu', Helvetica, Arial, Verdana, sans-serif";
const mont = "'Montserrat', Helvetica, Arial, Verdana, sans-serif";

export const global = css`
  @import url(https://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,700,700italic,500italic,500);
  @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

  body {
    font-family: ${ubuntu};
    margin: 0;
    padding: 0;
  }
`;

export const Header = styled.nav`
  align-items: center;
  display: flex;
  left: 50%;
  max-width: 1120px;
  padding: 30px 0;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 90%;
  h1 {
    flex-grow: 1;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    margin: 0;
    padding: 0;
  }
  nav {
    display: flex;
    font-size: 36px;
    line-height: 40px;
  }
  a {
    color: black;
    display: block;
    margin-left: 20px;
    &:hover {
      color: white;
    }
  }
`;

export const Section = styled.nav`
  background:  ${props => props.color ? props.color : 'white'};
  padding: 200px 0;
  &.hero {
    padding: 200px 0;
    text-align: center;
  }
  article {
    margin: 0 auto;
    max-width: 820px;
    width: 90%;
    a {
      color: black;
    }
  }
  h2 {
    font-family: ${mont};
    font-size: 40px;
    font-weight: 800;
    line-height: 50px;
    margin: 0 0 40px;
    padding: 0;
  }
  h3 {
    font-family: ${mont};
    font-size: 30px;
    font-weight: 800;
    line-height: 40px;
    margin: 0 0 30px;
    padding: 0;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    margin: 0 0 40px 0;
  }
  .button {
    align-items: center;
    background: white;
    border-radius: 4px;
    color: black;
    display: inline-flex;
    font-size: 30px;
    padding: 8px 16px;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.25);
    }
    span {
      font-size: 16px;
      margin-left: 8px;
    }
  }
`;

export const Code = styled.nav`
  background-color: #272822;
  border-radius: 8px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  margin: 60px 0 -300px 0;
  min-height: 400px;
  padding: 20px;
  position: relative;
  text-align: left;
  z-index: 1;
  .dots {
    align-items: center;
    display: flex;
    div {
      background-color: #e9ecef;
      border-radius: 50%;
      height: 12px;
      margin-right: 8px;
      width: 12px;
      &:nth-of-type(1) {
        background: #ff1744;
      }
      &:nth-of-type(2) {
        background: #f6c343;
      }
      &:nth-of-type(3) {
        background: #5cc72a;
      }
    }
  }
  pre {
    margin: 20px 0 0 0;
    padding: 0;
  }
`;

export const Footer = styled.nav`
  background: ${blue};
  font-size: 14px;
  line-height: 20px;
  padding: 50px 0 100px 0;
  text-align: center;
  nav {
    a {
      color: white;
      display: inline-block;
      font-size: 16px;
      line-height: 20px;
      margin: 0 10px 10px 10px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;