import Request from '../../utils/request';
 
export const cart = (data) => {
  return Request({
    url: '/cart',
    method: 'POST',
    data,
  });
};
