import InputSearch from './InputSearch';
import { Colors } from '../../../globals/colors';
import { renderComponent } from '../../../utils/testUtils';
import { fireEvent } from '@testing-library/react';

describe('InputSearch Component', () => {
  test('should be rendered with right style', () => {
    const { queryByTestId } = renderComponent(
      <InputSearch data-testid="search-component" onChange={() => {}} />
    );
    const searchComponent = queryByTestId('search-component');

    expect(searchComponent).toBeInTheDocument();
    expect(searchComponent).toHaveStyle(`
        padding: 16px 24px;
        border-radius: 25px;
        border: none;
        outline: 1px solid ${Colors.gray600};
        color: ${Colors.gray900};
    `);
  });

  test('should allow to type any character', () => {
    const { queryByTestId } = renderComponent(
      <InputSearch data-testid="search-component" onChange={() => {}} />
    );
    const searchComponent = queryByTestId('search-component');

    fireEvent.change(searchComponent, { target: { value: '123' } });
    expect(searchComponent.value).toBe('123');

    fireEvent.change(searchComponent, { target: { value: 'abcd@' } });
    expect(searchComponent.value).toBe('abcd@');
  });
});
