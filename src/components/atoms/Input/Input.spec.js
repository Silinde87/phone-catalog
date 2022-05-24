import Input from './Input';
import { Colors } from '../../../globals/colors';
import { renderComponent } from '../../../utils/testUtils';
import { fireEvent } from '@testing-library/react';
import { InputVariant } from './Input.types';

describe('Input Component', () => {
  test('should be rendered with right style', () => {
    const { queryByTestId } = renderComponent(
      <Input data-testid="input-component" variant={InputVariant.SEARCH} />
    );
    const inputComponent = queryByTestId('input-component');

    expect(inputComponent).toBeInTheDocument();
    expect(inputComponent).toHaveStyle(`
        padding: 16px 24px;
        border-radius: 25px;
        border: none;
        outline: 1px solid ${Colors.gray600};
        color: ${Colors.gray900};
    `);
  });

  test('should allow to type any character', () => {
    const { queryByTestId } = renderComponent(
      <Input data-testid="input-component" onChange={() => {}} />
    );
    const inputComponent = queryByTestId('input-component');

    fireEvent.change(inputComponent, { target: { value: '123' } });
    expect(inputComponent.value).toBe('123');

    fireEvent.change(inputComponent, { target: { value: 'abcd@' } });
    expect(inputComponent.value).toBe('abcd@');
  });
});
