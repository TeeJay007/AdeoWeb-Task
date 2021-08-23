import { render, screen } from '@testing-library/react';
import { WeatherIcon } from '../components/Weather';

test('Check empty WeatherIcon', () => {
  render(<WeatherIcon />);
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/sunglasses.svg');
  expect(Icon).toHaveAttribute('alt', 'sunglasses');
});

test('Check clear weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'clear',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/sunglasses.svg');
  expect(Icon).toHaveAttribute('alt', 'sunglasses');
});

test('Check isolated-clouds weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'isolated-clouds',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/sunglasses.svg');
  expect(Icon).toHaveAttribute('alt', 'sunglasses');
});

test('Check scattered-clouds weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'scattered-clouds',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/sunglasses.svg');
  expect(Icon).toHaveAttribute('alt', 'sunglasses');
});

test('Check n/a weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'na',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/sunglasses.svg');
  expect(Icon).toHaveAttribute('alt', 'sunglasses');
});

test('Check overcast weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'overcast',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/umbrella.svg');
  expect(Icon).toHaveAttribute('alt', 'umbrella');
});

test('Check light-rain weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'light-rain',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/umbrella.svg');
  expect(Icon).toHaveAttribute('alt', 'umbrella');
});

test('Check moderate-rain weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'moderate-rain',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/umbrella.svg');
  expect(Icon).toHaveAttribute('alt', 'umbrella');
});

test('Check heavy-rain weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'heavy-rain',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/umbrella.svg');
  expect(Icon).toHaveAttribute('alt', 'umbrella');
});

test('Check fog weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'fog',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/umbrella.svg');
  expect(Icon).toHaveAttribute('alt', 'umbrella');
});

test('Check sleet weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'sleet',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/snowflake.svg');
  expect(Icon).toHaveAttribute('alt', 'snowflake');
});

test('Check light-snow weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'light-snow',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/snowflake.svg');
  expect(Icon).toHaveAttribute('alt', 'snowflake');
});

test('Check moderate-snow weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'moderate-snow',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/snowflake.svg');
  expect(Icon).toHaveAttribute('alt', 'snowflake');
});

test('Check heavy-snow weather', () => {
  render(
    <WeatherIcon
      weatherData={{
        conditionCode: 'heavy-snow',
      }}
    />
  );
  const Icon = screen.getByRole('img');
  expect(Icon).toHaveAttribute('src', '/snowflake.svg');
  expect(Icon).toHaveAttribute('alt', 'snowflake');
});
