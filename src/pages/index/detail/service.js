import Request from '../../../utils/request';
 
export const detail = (data) => {
  return Request({
    url: '/detail',
    method: 'POST',
    data,
  });
};
