import  { post }  from '../../api/request'

export const SignInService = (params) => {
  return post('/api/v1/login', params)
};
