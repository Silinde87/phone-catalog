import { Colors } from '../../../globals/colors';
import { renderComponent } from '../../../utils/testUtils';
import Text from './Text';
import { TextAlignements, TextTypes } from './Text.types';

describe('Text Component', () => {
  test('should render a text passed as children', () => {
    const { queryByTestId } = renderComponent(<Text data-testid="text-component">text</Text>);
    const textComponent = queryByTestId('text-component');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.innerHTML).toBe('text');
  });

  test('should render a p element with default style', () => {
    const { queryByTestId } = renderComponent(<Text data-testid="text-component">text</Text>);
    const textComponent = queryByTestId('text-component');

    expect(textComponent.tagName).toBe('P');
    expect(textComponent).toHaveStyle(`
        text-transform: none;
        font-style: normal;
        text-align: center;
        color: ${Colors.gray900};
    `);
  });

  test('should render a h1 element with different color if passed as prop', () => {
    const { queryByTestId } = renderComponent(
      <Text data-testid="text-component" as={TextTypes.H1} color={Colors.gray600}>
        text
      </Text>
    );
    const textComponent = queryByTestId('text-component');

    expect(textComponent.tagName).toBe('H1');
    expect(textComponent).toHaveStyle(`
        color: ${Colors.gray600};
    `);
  });

  test('should render a h3 uppercased if passed as prop', () => {
    const { queryByTestId } = renderComponent(
      <Text data-testid="text-component" as={TextTypes.H3} uppercase>
        text
      </Text>
    );
    const textComponent = queryByTestId('text-component');

    expect(textComponent.tagName).toBe('H3');
    expect(textComponent).toHaveStyle(`
        text-transform: uppercase;
    `);
  });

  test('should render a h2 aligned to left if passed as prop', () => {
    const { queryByTestId } = renderComponent(
      <Text data-testid="text-component" as={TextTypes.H2} textAlign={TextAlignements.LEFT}>
        text
      </Text>
    );
    const textComponent = queryByTestId('text-component');

    expect(textComponent.tagName).toBe('H2');
    expect(textComponent).toHaveStyle(`
        text-align: left;
    `);
  });
});
