import Request from '../../utils/request';
 
export const category = (data) => {
  return Request({
    url: '/category',
    method: 'POST',
    data,
  });
};
