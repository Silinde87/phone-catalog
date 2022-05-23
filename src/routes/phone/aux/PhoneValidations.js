export const isAnyFieldEmpty = (data) => {
  if (
    !data.manufacturer ||
    !data.name ||
    !data.color ||
    !data.price ||
    !data.screen ||
    !data.screenResolution ||
    !data.processor ||
    !data.ram ||
    !data.camera ||
    !data.battery ||
    !data.storage ||
    !data.description
  ) {
    return true;
  }
  return false;
};

export const isPriceValid = (price) => {
  if (typeof price !== 'number' || price <= 0) {
    return false;
  }
  return true;
};
