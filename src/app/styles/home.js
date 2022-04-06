import styled from '@emotion/styled';
import { css } from '@emotion/react'
import { blue } from './colors';

const ubuntu = "'Ubuntu', Helvetica, Arial, Verdana, sans-serif";
const mont = "'Montserrat', Helvetica, Arial, Verdana, sans-serif";

export const global = css`
  @import url(https://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,700,700italic,500italic,500);
  @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(30px);
    }
  }

  * {
    &:focus {
      outline: 0;
    }
  }
  html {
    height: auto;
  }
  body {
    background: black;
    color: black;
    font-family: ${ubuntu};
    height: auto;
  }
`;

export const Nav = styled.nav`
  padding: calc(100vh - 500px) 0 0 0;
  @media only screen and (max-width: 600px) {
    padding-top: calc(100vh - 350px);
  }
`;

export const NavLink = styled.nav`
  background: ${props => props.color ? props.color : blue};
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: block;
  font-family: ${mont};
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  padding: 35px 2%;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 20px 5%;
  }
  &:last-of-type {
    border: none;
  }
`;

export const Main = styled.main`
  height: calc(100vh - 500px);
  left: 0;
  overflow: hidden;
  position: fixed;
  scroll-snap-type: y mandatory;
  top: 0;
  width: 100%;
  @media only screen and (max-width: 600px) {
    height: calc(100vh - 350px);
  }
`;

export const Section = styled.section`
  background: ${props => props.color ? props.color : 'white'};
  box-sizing: border-box;
  display: block;
  height: calc(100vh - 500px);
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 600px) {
    height: calc(100vh - 350px);
  }
`;

export const Article = styled.article`
  bottom: 15%;
  display: block;
  left: 2%;
  position: absolute;
  width: 65%;
  z-index: 100;
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 600px) {
    bottom: 10%;
    left: 5%;
  }
  h1,
  h2 {
    font-family: ${mont};
    font-size: 90px;
    font-weight: 600;
    line-height: 110px;
    text-transform: uppercase;
    @media only screen and (max-width: 600px) {
      font-size: 40px;
      line-height: 50px;
    }
    a {
      transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
      color: black;
      text-decoration: none;
      &:hover {
        color: black;
        i {
          margin: 0 0 0 10px;
        }
      }
      i {
        font-size: 20px;
        line-height: 20px;
        position: relative;
        top: -3px;
        transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
        vertical-align: middle;
      }
    }
  }
  h3 {
    font-size: 24px;
    line-height: 32px;
    margin: 10px 0 0 0;
    @media only screen and (max-width: 600px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  p {
    font-size: 20px;
    line-height: 30px;
    margin: 10px 0 0 0;
    @media only screen and (max-width: 600px) {
        font-size: 18px;
        line-height: 28px;
      }
    a {
      color: black;
    }
  }
`;

export const Footer = styled.footer`
  background: ${blue};
  height: 500px;
  padding: 0 2%;
  position: relative;
  @media only screen and (max-width: 600px) {
    height: calc(350px + (env(safe-area-inset-bottom, 0) * 2));
    padding: 0 5%;
  }
  .container {
    bottom: 15%;
    display: block;
    left: 2%;
    position: absolute;
    width: 65%;
    z-index: 100;
    p {
      font-family: ${mont};
      font-size: 16px;
      line-height: 24px;
      @media only screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
      }
      a {
        color: white;
        text-underline-position: under;
      }
    }
    nav {
      font-size: 0;
      margin: 0 0 30px 0;
      a {
        background: white;
        border-radius: 50%;
        color: black;
        display: inline-block;
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        margin: 0 15px 0 0;
        text-align: center;
        width: 50px;
        @media only screen and (max-width: 600px) {
          font-size: 18px;
          height: 40px;
          line-height: 40px;
          width: 40px;
        }
      }
    }
  }
`;