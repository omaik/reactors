import  { get }  from '../../api/request'

export const ShowService = () => {
  return get('/api/v1/uploads')
};
