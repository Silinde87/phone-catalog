import { object } from 'prop-types';
import { TextAlignements, TextTypes } from '../../atoms/Text';
import { Text } from './../../atoms';
import {
  PhoneDetailsContainer,
  PhoneDetailsCard,
  PhoneDetailsTitleWrapper,
  PhoneDetailsBox,
  PhoneDetailsBoxWrapper,
  PhoneDetailsWrapper,
  PhoneDetailsImage,
  PhoneDetailsIcon,
  BoxMainText,
  BoxSecondaryText,
  PhoneDetailsDescription,
} from './PhoneDetails.styled';

function PhoneDetails({ selectedPhone }) {
  return (
    <PhoneDetailsContainer>
      <Text as={TextTypes.H1}>The Phone Catalog</Text>
      <PhoneDetailsCard>
        <PhoneDetailsTitleWrapper>
          <Text textAlign={TextAlignements.LEFT} as={TextTypes.H3}>
            {selectedPhone?.name}
          </Text>
        </PhoneDetailsTitleWrapper>
        <PhoneDetailsWrapper>
          <PhoneDetailsImage src={selectedPhone?.imageFileName}></PhoneDetailsImage>
          <div>
            <PhoneDetailsDescription textAlign={TextAlignements.LEFT}>
              {selectedPhone?.description}
            </PhoneDetailsDescription>
            <PhoneDetailsBoxWrapper>
              <PhoneDetailsBox>
                <PhoneDetailsIcon src="/images/screen.svg" />
                <BoxMainText textAlign={TextAlignements.LEFT}>{selectedPhone?.screen}</BoxMainText>
                <BoxSecondaryText textAlign={TextAlignements.LEFT}>
                  {selectedPhone?.screenResolution}
                </BoxSecondaryText>
              </PhoneDetailsBox>
              <PhoneDetailsBox>
                <PhoneDetailsIcon src="/images/processor.svg" />
                <BoxMainText
                  textAlign={TextAlignements.LEFT}
                >{`${selectedPhone?.ram} RAM`}</BoxMainText>
                <BoxSecondaryText textAlign={TextAlignements.LEFT}>
                  {selectedPhone?.processor}
                </BoxSecondaryText>
              </PhoneDetailsBox>
              <PhoneDetailsBox>
                <PhoneDetailsIcon src="/images/battery.svg" />
                <BoxMainText textAlign={TextAlignements.LEFT}>{selectedPhone?.battery}</BoxMainText>
                <BoxSecondaryText textAlign={TextAlignements.LEFT}>Li-Po</BoxSecondaryText>
              </PhoneDetailsBox>
              <PhoneDetailsBox>
                <PhoneDetailsIcon src="/images/camera.svg" />
                <BoxMainText textAlign={TextAlignements.LEFT}>{selectedPhone?.camera}</BoxMainText>
              </PhoneDetailsBox>
              <PhoneDetailsBox>
                <PhoneDetailsIcon src="/images/money.svg" />
                <BoxMainText
                  textAlign={TextAlignements.LEFT}
                >{`${selectedPhone?.price} €`}</BoxMainText>
              </PhoneDetailsBox>
              <PhoneDetailsBox>
                <PhoneDetailsIcon src="/images/palette.svg" />
                <BoxMainText textAlign={TextAlignements.LEFT}>{selectedPhone?.color}</BoxMainText>
              </PhoneDetailsBox>
            </PhoneDetailsBoxWrapper>
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

/*

{
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "color": "Silver",
    "storage": "80MB 64MB RAM 128MB ROM storage, microSD slot",

}
*/
