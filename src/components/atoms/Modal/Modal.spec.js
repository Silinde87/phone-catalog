import { renderComponent } from '../../../utils/testUtils';
import Modal from './Modal';
import { Colors } from '../../../globals/colors';

describe('Modal Component', () => {
  test('should be rendered with default style', () => {
    const { queryByTestId } = renderComponent(<Modal />);
    const modalComponent = queryByTestId('modal-component');

    expect(modalComponent).toBeInTheDocument();
    expect(modalComponent).toHaveStyle(`
        border-radius: 8px;
        padding: 24px;
        background-color: ${Colors.gray200};
    `);
  });

  test('should be rendered with children', () => {
    const { queryByTestId } = renderComponent(
      <Modal>
        <h1>children</h1>
      </Modal>
    );
    const modalComponent = queryByTestId('modal-component');
    const h1Children = modalComponent.querySelector('H1');

    expect(h1Children).toBeInTheDocument();
    expect(h1Children.innerHTML).toBe('children');
  });
});
