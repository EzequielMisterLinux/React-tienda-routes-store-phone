import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const SlideImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const PhoneName = styled.h3`
  margin-top: 10px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SliderContainerStyle = styled.div`
  position: relative;
  background-color: aliceblue;
  z-index: 1;
`;
