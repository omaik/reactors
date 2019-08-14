import  { post }  from '../../api/request'

export const SignUpService = (params) => {
  return post('/api/v1/signup', params)
};