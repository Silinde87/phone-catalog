import { string } from 'prop-types';
import { SpinnerWrapper } from './Spinner.styled';

const Spinner = ({ size = '22.4', ...otherProps }) => {
  return <SpinnerWrapper size={size} {...otherProps} />;
};

Spinner.propTypes = {
  size: string,
};

export default Spinner;
