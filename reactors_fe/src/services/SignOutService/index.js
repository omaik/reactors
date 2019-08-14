import  { delete_with_header }  from '../../api/request'

export const SignOutService = (header) => {
  return delete_with_header('/api/v1/logout', header)
};