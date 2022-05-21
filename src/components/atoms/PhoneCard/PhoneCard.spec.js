import { fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Colors } from '../../../globals/colors';
import { renderComponent } from '../../../utils/testUtils';
import PhoneCard from './PhoneCard';

describe('PhoneCard Component', () => {
  test('should be rendered with right style', () => {
    const { queryByTestId } = renderComponent(
      <PhoneCard data-testid="phone-card" src="" name="" onClick={() => {}} />
    );
    const phoneCard = queryByTestId('phone-card');
    expect(phoneCard).toBeInTheDocument();

    expect(phoneCard).toHaveStyle(`
      width: 225px;
      height: 280px;
      border-radius: 8px;
      border: 1px solid ${Colors.gray600};
      box-shadow: 0px 4px 8px 0px ${Colors.gray600};
    `);
  });

  test('should have an image and a text as a children', () => {
    const { queryByTestId } = renderComponent(
      <PhoneCard data-testid="phone-card" src="" name="" onClick={() => {}} />
    );
    const phoneCard = queryByTestId('phone-card');
    const imageElement = phoneCard.querySelector('img');
    const textElement = phoneCard.querySelector('p');

    expect(imageElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test('should render an image with right style', () => {
    const { queryByTestId } = renderComponent(
      <PhoneCard data-testid="phone-card" src="" name="" onClick={() => {}} />
    );
    const phoneCard = queryByTestId('phone-card');
    const imageElement = phoneCard.querySelector('img');

    expect(imageElement).toHaveStyle(`
      height: 184px;
      width: 139px;
      object-fit: cover;
      margin-bottom: 16px;
    `);
  });

  test('should render a text with right style', () => {
    const { queryByTestId } = renderComponent(
      <PhoneCard data-testid="phone-card" src="" name="text" onClick={() => {}} />
    );
    const phoneCard = queryByTestId('phone-card');
    const textElement = phoneCard.querySelector('p');
    expect(textElement.innerHTML).toBe('text');

    expect(textElement).toHaveStyle(`
      color: ${Colors.gray900};
    `);
  });

  test('should change scale on hover', () => {
    const { queryByTestId } = renderComponent(
      <PhoneCard data-testid="phone-card" src="" name="text" onClick={() => {}} />
    );
    const phoneCard = queryByTestId('phone-card');

    userEvent.tab();
    expect(phoneCard).toHaveFocus();
    waitFor(() =>
      expect(phoneCard).toHaveStyle(`
        transform: scale(1.1);
      `)
    );
  });

  test('should exec an onClick function', () => {
    const onClick = jest.fn();
    const { queryByTestId } = renderComponent(
      <PhoneCard data-testid="phone-card" src="" name="text" onClick={onClick} />
    );
    const phoneCard = queryByTestId('phone-card');

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(phoneCard);

    expect(onClick).toHaveBeenCalled();
  });
});
