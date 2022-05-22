import Button from './Button';
import { renderComponent } from '../../../utils/testUtils';
import { Colors } from '../../../globals/colors';
import { ButtonVariant } from './Button.types';
import { fireEvent } from '@testing-library/react';

describe('Button Component', () => {
  test('should be rendered with default style', () => {
    const { queryByTestId } = renderComponent(<Button data-testid="button-component" />);
    const buttonComponent = queryByTestId('button-component');

    expect(buttonComponent).toBeInTheDocument();
    expect(buttonComponent).toHaveStyle(`
        width: 120px;
        height: 48px;
        border: 1px solid ${Colors.green500};
        background-color: ${Colors.green500};
        border-radius: 8px;
    `);
  });

  test('should be rendered with outline variant style passed as prop', () => {
    const { queryByTestId } = renderComponent(
      <Button data-testid="button-component" variant={ButtonVariant.OUTLINE} />
    );
    const buttonComponent = queryByTestId('button-component');

    expect(buttonComponent).toHaveStyle(`
        width: 120px;
        height: 48px;
        border: 1px solid ${Colors.green500};
        background-color: ${Colors.gray200};
        transition: all 0.2s;
        border-radius: 8px;
    `);
  });

  test('should be rendered with text passed as children', () => {
    const { queryByTestId } = renderComponent(<Button data-testid="button-component">text</Button>);
    const buttonComponent = queryByTestId('button-component');
    const text = buttonComponent.querySelector('P');

    expect(buttonComponent.children.length).toBe(1);
    expect(text).toBeInTheDocument();
    expect(text.innerHTML).toBe('text');
  });

  test('should exec an onClick function', () => {
    const onClick = jest.fn();
    const { queryByTestId } = renderComponent(
      <Button data-testid="button-component" onClick={onClick} />
    );
    const buttonComponent = queryByTestId('button-component');

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(buttonComponent);

    expect(onClick).toHaveBeenCalled();
  });
});
