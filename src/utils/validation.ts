export const isPhoneNumber = (phoneNumber: string): boolean => {
  const regex = new RegExp('^[0-9-+]{9,15}$');
  return regex.test(phoneNumber);
};

export const isEmail = (email: string): boolean => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  return regex.test(email.toLowerCase());
};

export const isIDNumber = (idNumber: string): boolean => {
  const regex = new RegExp('^[0-9]{9,12}$');
  return regex.test(idNumber);
};
