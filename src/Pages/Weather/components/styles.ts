import styled from '@emotion/styled';
import { WeatherBack } from 'assets';

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${WeatherBack});
`;
export const WeatherHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: rgba(48, 63, 84, 0.5);
  font-size: 24px;
  font-weight: 700;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const WeatherMainContainer = styled.main`
  display: flex;
  margin: 80px;
  width: 709px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const WeatherOutputWrap = styled.div`
 display: flex;
 flex-direction: column;
 gap: 44px;
  width: 709px;
  height: 302px;
  justify-content: center;
 align-self: center;
`;
export const WeatherTodayBlock = styled.div`
background: linear-gradient(45deg, rgba(47, 72, 111, 0.6), rgba(11, 27, 52, 0.6));
  width: 709px;
  height: 129px;
  top: 328px;
  left: 605px;
  border-radius: 18px;
`;

export const FeelsTodayBlock = styled.div`
background: linear-gradient(45deg, rgba(47, 72, 111, 0.6), rgba(11, 27, 52, 0.6));
  width: 223px;
  height: 129px;
  top: 328px;
  left: 605px;
  border-radius: 18px;
`;

export const WeatherTemper = styled.p`
font-size: 57px;
font-weight: 500;
color: white;
margin: 20px 30px 0px 30px;
`
export const WeatherPlace = styled.p`
font-size: 18px;
font-weight: 400;
color: white;
margin-left: 30px;
`
export const TermometrWrap = styled.div`
height: 23px;
width: 31px;

img {
    height: 100%;
    width: 100%;
    object-fit: cover; 
  }
`
export const FeelsWrap = styled.div`
padding-top: 5px;
height: 23px;
`


export const WeatherFeelsLike = styled.div`
display: flex;
flex-direction: row;
font-size: 12px;
font-weight: 500;
color: white;
margin: 15px 0px 10px 15px; 
`

export const WeatherFeels = styled.div`
font-size: 42px;
font-weight: 500;
color: white;
margin: 0px 30px 0px 30px;
`