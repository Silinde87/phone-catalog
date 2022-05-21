import { object } from 'prop-types';
import { PhoneDetails } from '../../../components/molecules';

const Phone = ({ selectedPhone }) => {
  return <PhoneDetails selectedPhone={selectedPhone} />;
};

Phone.propTypes = {
  selectedPhone: object,
};

export default Phone;
