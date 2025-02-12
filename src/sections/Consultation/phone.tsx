import { PhoneInput } from "react-international-phone";
import { FC, useEffect, useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string | undefined) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error: any) {
    return false;
  }
};

type PhoneType = {
  cb: (phone: string, isValid: boolean) => void;
};

export const PhoneComponent: FC<PhoneType> = ({ cb }) => {
  const [phone, setPhone] = useState<string>();
  const [loadingCountry, setLoadingCountry] = useState(true);
  const [defaultCountry, setDefaultCountry] = useState("");

  const fetchUserCountry = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();

      setDefaultCountry(data.country_code.toLowerCase());
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoadingCountry(false);
    }
  };

  useEffect(() => {
    fetchUserCountry();
  }, []);

  if (loadingCountry) return null;

  const handleChange = (phone: string) => {
    setPhone(phone);
    cb(phone, isPhoneValid(phone));
  };

  return (
    <PhoneInput
      defaultCountry={defaultCountry}
      value={phone}
      onChange={handleChange}
    />
  );
};
