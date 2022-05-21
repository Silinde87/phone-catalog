import { string, func } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import {
  PhoneCardImage,
  PhoneCardSpinner,
  PhoneCardText,
  PhoneCardWrapper,
} from './PhoneCard.styled';

const PhoneCard = ({ src = '', name = '', onClick = () => {}, ...otherProps }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef(null);

  const onImageLoaded = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    if (imageRef.current) {
      if (document.readyState === 'complete') {
        // Callback for Safari. addEventListener('load') doesn't works well
        // https://github.com/vercel/next.js/discussions/13929
        onImageLoaded();
      } else {
        imageRef.current?.addEventListener('load', onImageLoaded);
        return () => imageRef.current?.removeEventListener('load', onImageLoaded);
      }
    }
  }, [imageRef]);

  const handleClick = () => {
    onClick(name);
  };

  return (
    <PhoneCardWrapper onClick={handleClick} value={name} {...otherProps}>
      <PhoneCardSpinner isImageLoaded={isImageLoaded} size={'10'} />
      <PhoneCardImage src={src} alt={name} ref={imageRef} isImageLoaded={isImageLoaded} />
      <PhoneCardText isImageLoaded={isImageLoaded}>{name}</PhoneCardText>
    </PhoneCardWrapper>
  );
};

PhoneCard.propTypes = {
  src: string.isRequired,
  name: string.isRequired,
  onClick: func.isRequired,
};

export default PhoneCard;
