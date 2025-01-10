export const getDate = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export type ContactType = { [key: string]: boolean };

export const initContact: ContactType = {
  WatsApp: false,
  Telegram: false,
};
