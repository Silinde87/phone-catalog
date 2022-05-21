import PhoneSpec from './PhoneSpec';
import { renderComponent } from '../../../utils/testUtils';

describe('PhoneSpec Component', () => {
  test('should be rendered with right style', () => {
    const { queryByTestId } = renderComponent(
      <PhoneSpec data-testid="phone-spec" src="" mainText="main-text" />
    );
    const phoneSpecComponent = queryByTestId('phone-spec');

    expect(phoneSpecComponent).toBeInTheDocument();
    expect(phoneSpecComponent.tagName).toBe('ARTICLE');
    expect(phoneSpecComponent).toHaveStyle(`
        height: 135px;
        width: 135px;
        padding: 8px;
    `);
  });

  test('should render only a main text passed as prop', () => {
    const { queryByTestId } = renderComponent(
      <PhoneSpec data-testid="phone-spec" src="" mainText="main-text" />
    );
    const phoneSpecComponent = queryByTestId('phone-spec');
    const textElements = phoneSpecComponent.querySelectorAll('P');
    expect(textElements.length).toBe(1);
    expect(textElements[0].innerHTML).toBe('main-text');
  });

  test('should render a main text and a secondary text if prassed as prop', () => {
    const { queryByTestId } = renderComponent(
      <PhoneSpec
        data-testid="phone-spec"
        src=""
        mainText="main-text"
        secondaryText="secondary-text"
      />
    );
    const phoneSpecComponent = queryByTestId('phone-spec');
    const textElements = phoneSpecComponent.querySelectorAll('P');
    expect(textElements.length).toBe(2);

    expect(textElements[0].innerHTML).toBe('main-text');
    expect(textElements[1].innerHTML).toBe('secondary-text');
  });
});
