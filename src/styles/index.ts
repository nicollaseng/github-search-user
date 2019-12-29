import styled from "styled-components";
import { colors } from "../global/colors";

const Button = styled.button`
  margin: ${props => (props.margin ? props.margin : "0 10px")}
  width: ${props => (props.width ? props.width : "70px")};
  height: ${props => (props.height ? props.height : "35px")};
  background: ${props =>
    props.background ? props.background : colors.grey.grey1};
  padding: ${props => props.padding};
  border: ${props => (props.border ? props.border : "none")};
  border-color: ${props =>
    props["border-color"] ? props["border-color"] : "transparent"};
  border-width: ${props =>
    props["border-width"] ? props["border-width"] : "5px"};
  border-radius: ${props => (props["border-radius"] ? props[""] : "10px")};
  ${props => props}
`;

const Container = styled.div`
  padding: 30px 30px;
  background: ${colors.background.primary};
  ${props => props}
`;

const Input = styled.input`
  ${props => props}
`;

const Text = styled.p`
    font-family: 'Fira Code', monospace;
    color: ${props => (props.color ? props.color : colors.text.primary)}
    margin: ${props => props.margin}
    font-size: ${props => (props["font-size"] ? props["font-size"] : "30px")}
    text-align: ${props =>
      props["text-align"] ? props["text-align"] : "center"}
`;

const Thumb = styled.img`
  margin: ${props => (props.margin ? props.margin : "50px 50px")};
  width: ${props => (props.width ? props.width : "100px")};
  height: ${props => (props.heigth ? props.heigth : "100px")};
  border-radius: ${props =>
    props["border-radius"] ? props["border-radius"] : "50px"};
`;

export { Button, Container, Text, Thumb, Input };
