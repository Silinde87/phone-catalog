import { object } from 'prop-types';
import { PhoneDetails } from '../../../components/molecules';

function Phone({ selectedPhone }) {
  return <PhoneDetails selectedPhone={selectedPhone} />;
}

Phone.propTypes = {
  selectedPhone: object,
};

export default Phone;
