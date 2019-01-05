import Request from '../../../utils/request';
 
export const album = (data) => {
  return Request({
    url: '/album',
    method: 'POST',
    data,
  });
};
