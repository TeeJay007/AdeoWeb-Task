import { render, waitFor } from '@testing-library/react';
import Weather from '../components/Weather';
import mockData from './weatherMockResp.json';

// eslint-disable-next-line no-unused-vars
const mockFetch = (data) => (_url) =>
  new Promise((resolve) => {
    resolve({
      json: () => Promise.resolve(data),
    });
  });

afterEach(() => {
  jest.restoreAllMocks();
});

const generateWeatherFetch = (conditionCode) => {
  if (!conditionCode)
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch({}));

  return jest.spyOn(global, 'fetch').mockImplementation(
    mockFetch({
      ...mockData,
      forecastTimestamps: mockData.forecastTimestamps.map((v) => ({
        ...v,
        conditionCode,
      })),
    })
  );
};

test('Check empty response', async () => {
  generateWeatherFetch();
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('sunglasses')).toHaveAttribute('src', '/sunglasses.svg')
  );
});

test('Check clear weather', async () => {
  generateWeatherFetch('clear');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('sunglasses')).toHaveAttribute('src', '/sunglasses.svg')
  );
});

test('Check isolated-clouds weather', async () => {
  generateWeatherFetch('isolated-clouds');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('sunglasses')).toHaveAttribute('src', '/sunglasses.svg')
  );
});

test('Check scattered-clouds weather', async () => {
  generateWeatherFetch('scattered-clouds');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('sunglasses')).toHaveAttribute('src', '/sunglasses.svg')
  );
});

test('Check n/a weather', async () => {
  generateWeatherFetch('na');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('sunglasses')).toHaveAttribute('src', '/sunglasses.svg')
  );
});

test('Check overcast weather', async () => {
  generateWeatherFetch('overcast');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('umbrella')).toHaveAttribute('src', '/umbrella.svg')
  );
});

test('Check light-rain weather', async () => {
  generateWeatherFetch('light-rain');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('umbrella')).toHaveAttribute('src', '/umbrella.svg')
  );
});

test('Check moderate-rain weather', async () => {
  generateWeatherFetch('moderate-rain');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('umbrella')).toHaveAttribute('src', '/umbrella.svg')
  );
});

test('Check heavy-rain weather', async () => {
  generateWeatherFetch('heavy-rain');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('umbrella')).toHaveAttribute('src', '/umbrella.svg')
  );
});

test('Check fog weather', async () => {
  generateWeatherFetch('fog');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('umbrella')).toHaveAttribute('src', '/umbrella.svg')
  );
});

test('Check sleet weather', async () => {
  generateWeatherFetch('sleet');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('snowflake')).toHaveAttribute('src', '/snowflake.svg')
  );
});

test('Check light-snow weather', async () => {
  generateWeatherFetch('light-snow');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('snowflake')).toHaveAttribute('src', '/snowflake.svg')
  );
});

test('Check moderate-snow weather', async () => {
  generateWeatherFetch('moderate-snow');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('snowflake')).toHaveAttribute('src', '/snowflake.svg')
  );
});

test('Check heavy-snow weather', async () => {
  generateWeatherFetch('heavy-snow');
  const { getByAltText } = render(<Weather />);
  await waitFor(() =>
    expect(getByAltText('snowflake')).toHaveAttribute('src', '/snowflake.svg')
  );
});
