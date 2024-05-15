import { ChangeEvent } from 'react';
import WeatherButton from './WeatherButton/WeatherButton';
import WeatherSearchField from './WeatherSearchField/WeatherSearchField';
import {
  FeelsTodayBlock,
  FeelsWrap,
  TermometrWrap,
  WeatherFeels,
  WeatherFeelsLike,
  WeatherHeaderContainer,
  WeatherMainContainer,
  WeatherOutputWrap,
  WeatherPlace,
  WeatherTemper,
  WeatherTodayBlock,
  WeatherWrapper,
} from './styles';
import { Termometr } from 'assets';

function Weather() {
  return (
    <WeatherWrapper>
      <WeatherHeaderContainer>Weather App</WeatherHeaderContainer>
      <WeatherMainContainer>
        <WeatherSearchField
          name={''}
          placeholder={''}
          onInputChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
          }}
          value={''}
        />
        <WeatherButton name={'Search'} />
      </WeatherMainContainer>
      <WeatherOutputWrap>
          <WeatherTodayBlock>
            <WeatherTemper>68F</WeatherTemper>
            <WeatherPlace>Colrado</WeatherPlace>

          </WeatherTodayBlock>
          <FeelsTodayBlock>
            
              
              <WeatherFeelsLike>
                <TermometrWrap>
              <img src={Termometr} />
              </TermometrWrap>
              <FeelsWrap>
              FEELS LIKE
              </FeelsWrap>
              </WeatherFeelsLike>
              <WeatherFeels>
              68F
            </WeatherFeels>
          </FeelsTodayBlock>
        </WeatherOutputWrap>
    </WeatherWrapper>
  );
}

export default Weather;
