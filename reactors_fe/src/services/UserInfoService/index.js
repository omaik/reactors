import { get_with_header } from '../../api/request'

export const UserInfoService = (header) => {
  return get_with_header('/api/v1/users', header)
};