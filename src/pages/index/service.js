import Request from '../../utils/request';

export const load = (data) => Request({
  url: '/v1/public',
  method: 'GET',
  data,
});

export const coupon = (data) => Request({
  url: '/v1/coupon',
  method: 'GET',
  data,
});
