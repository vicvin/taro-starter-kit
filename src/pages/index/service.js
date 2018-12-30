import Request from '../../utils/request'
 
export const demo = (data) => {
  return Request({
    url: '/home',
    method: 'POST',
    data,
  });
};
