import { object } from 'prop-types';
import { TextAlignements, TextTypes } from '../../atoms/Text';
import { Text, PhoneSpec } from './../../atoms';
import {
  PhoneDetailsContainer,
  PhoneDetailsCard,
  PhoneDetailsTitleWrapper,
  PhoneDetailsSpecWrapper,
  PhoneDetailsWrapper,
  PhoneDetailsImage,
  PhoneDetailsDescription,
} from './PhoneDetails.styled';

function PhoneDetails({ selectedPhone }) {
  return (
    <PhoneDetailsContainer>
      <Text as={TextTypes.H1}>The Phone Catalog</Text>
      <PhoneDetailsCard>
        <PhoneDetailsTitleWrapper>
          <Text textAlign={TextAlignements.LEFT} as={TextTypes.H3}>
            {selectedPhone?.name || ''}
          </Text>
        </PhoneDetailsTitleWrapper>
        <PhoneDetailsWrapper>
          <PhoneDetailsImage src={selectedPhone?.imageFileName}></PhoneDetailsImage>
          <div>
            <PhoneDetailsDescription textAlign={TextAlignements.LEFT}>
              {selectedPhone?.description}
            </PhoneDetailsDescription>
            <PhoneDetailsSpecWrapper>
              <PhoneSpec
                src="/images/screen.svg"
                mainText={selectedPhone?.screen}
                secondaryText={selectedPhone?.screenResolution}
              />
              <PhoneSpec
                src="/images/processor.svg"
                mainText={`${selectedPhone?.ram} RAM`}
                secondaryText={selectedPhone?.processor}
              />
              <PhoneSpec
                src="/images/battery.svg"
                mainText={selectedPhone?.battery}
                secondaryText="Li-Po"
              />
              <PhoneSpec src="/images/camera.svg" mainText={selectedPhone?.camera} />
              <PhoneSpec src="/images/money.svg" mainText={`${selectedPhone?.price} €`} />
              <PhoneSpec src="/images/palette.svg" mainText={selectedPhone?.color} />
            </PhoneDetailsSpecWrapper>
          </div>
        </PhoneDetailsWrapper>
      </PhoneDetailsCard>
    </PhoneDetailsContainer>
  );
}

PhoneDetails.propTypes = {
  selectedPhone: object,
};
export default PhoneDetails;
