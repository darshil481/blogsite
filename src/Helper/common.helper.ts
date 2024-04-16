import { Response } from 'express';
export const generalResponse = (response: Response, data: any = [], message = '', responseType = 'success', toast = false, statusCode = 200) => {
    response.status(statusCode).send({
      data: data,
      message: message,
      toast: toast,
      responseType: responseType,
    });
  };

  export const cleanObj = (obj: { [key: string]: any }) => {
    Object.keys(obj).forEach((key: string) => {
      try {
        if (obj[key] === '') {
          obj[key] = null;
        }
        if (!isNumeric(obj[key])) {
          obj[key] = JSON.parse(obj[key]);
        }
      } catch (err) {
        // do nothing
      }
    });
    return obj;
  };
  export const isNumeric = (n: any) => {
    // eslint-disable-next-line no-restricted-globals
    return n && !isNaN(parseFloat(n)) && isFinite(n);
  };