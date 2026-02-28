export const encodeUrl = (text: string) => {
  return encodeURI(
    text.replaceAll(" ", "-").replaceAll("&", "and").toLowerCase()
  );
};

export const decodeUrl = (text: string) => {
  return decodeURI(
    text.replaceAll("-", " ").replaceAll("and", "&").toLowerCase()
  );
};