"use server";

export const sendMail = async <T, E = Error>(info: any) => {
  const API = process.env.GMAIL_SCRIPT;

  let response: T | null = null;
  let error: E | null = null;

  const sendToEmail = "locbilla@gmail.com";
  //  const sendToEmail = "subrata.ash@gmail.com";
//   const sendToEmail = "ommdeb2011@gmail.com";
  const emailSubject = `Somone Want To Contact With You`;

  let htmlEmailBody = "";

  for (let key in info) {
    if (info.hasOwnProperty(key)) {
      const value = info[key];
      htmlEmailBody += `<h4>${key} : ${value}</h4>`;
    }
  }

  const emailBody = `<h5>Query From grillex.in</h5>${htmlEmailBody}`;
  const GET_URL = `${API}?toEmail=${sendToEmail}&subject=${emailSubject}&body=${emailBody}`;
  try {
    await fetch(GET_URL);
    response = "Successfully Submitted" as T;
  } catch (error) {
    const err = error as Error;
    response = err.message as T;
    error = err;
  }

  return { response, error };
};
