import { useReactContext } from '../../../context/Context';
import { TextAlignements, TextTypes } from '../../atoms/Text';
import { Text, PhoneSpec } from './../../atoms';
import {
  PhoneDetailsCard,
  PhoneDetailsTitleWrapper,
  PhoneDetailsSpecWrapper,
  PhoneDetailsWrapper,
  PhoneDetailsImage,
  PhoneDetailsDescription,
} from './PhoneDetails.styled';

function PhoneDetails() {
  const { phonesState } = useReactContext();
  const { selectedPhone } = phonesState;

  return (
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
              alt="screen icon"
              mainText={selectedPhone?.screen}
              secondaryText={selectedPhone?.screenResolution}
            />
            <PhoneSpec
              src="/images/processor.svg"
              alt="processor icon"
              mainText={`${selectedPhone?.ram} RAM`}
              secondaryText={selectedPhone?.processor}
            />
            <PhoneSpec
              src="/images/battery.svg"
              alt="battery icon"
              mainText={selectedPhone?.battery}
              secondaryText="Li-Po"
            />
            <PhoneSpec
              src="/images/camera.svg"
              alt="camera icon"
              mainText={selectedPhone?.camera}
            />
            <PhoneSpec
              src="/images/money.svg"
              alt="money icon"
              mainText={`${selectedPhone?.price} €`}
            />
            <PhoneSpec
              src="/images/palette.svg"
              alt="palette icon"
              mainText={selectedPhone?.color}
            />
          </PhoneDetailsSpecWrapper>
        </div>
      </PhoneDetailsWrapper>
    </PhoneDetailsCard>
  );
}

export default PhoneDetails;
