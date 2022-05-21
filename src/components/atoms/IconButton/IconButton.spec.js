import { fireEvent } from '@testing-library/react';
import { Colors } from '../../../globals/colors';
import { renderComponent } from '../../../utils/testUtils';
import IconButton from './IconButton';

describe('IconButton Component', () => {
  test('should be rendered with right style', () => {
    const { queryByTestId } = renderComponent(<IconButton data-testid="iconbutton-component" />);
    const iconButtonComponent = queryByTestId('iconbutton-component');

    expect(iconButtonComponent).toBeInTheDocument();
    expect(iconButtonComponent.tagName).toBe('BUTTON');
    expect(iconButtonComponent).toHaveStyle(`
        background-color: ${Colors.green500};
        border: none;
        border-radius: 8px;
        width: 150px;
        padding: 16px;
    `);
  });

  test('should render an icon and text passed as prop', () => {
    const { queryByTestId } = renderComponent(
      <IconButton data-testid="iconbutton-component" src="" text="text" />
    );
    const iconButtonComponent = queryByTestId('iconbutton-component');

    const iconElement = iconButtonComponent.querySelector('IMG');
    const textElement = iconButtonComponent.querySelector('P');

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(textElement.innerHTML).toBe('text');
  });

  test('should exec an onClick function', () => {
    const onClick = jest.fn();
    const { queryByTestId } = renderComponent(
      <IconButton data-testid="iconbutton-component" src="" name="text" id="" onClick={onClick} />
    );
    const iconButtonComponent = queryByTestId('iconbutton-component');

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(iconButtonComponent);

    expect(onClick).toHaveBeenCalled();
  });
});
