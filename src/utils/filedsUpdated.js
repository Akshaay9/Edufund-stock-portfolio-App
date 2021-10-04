export const fieldsUpdated = (data1, data2) => {
  for (let key in data1) {
    if (data1[key] !== data2[key]) {
      return true;
    }
  }
  return false;
};
