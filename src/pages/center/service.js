import Request from '../../utils/request';
 
export const center = (data) => {
  return Request({
    url: '/center',
    method: 'POST',
    data,
  });
};
