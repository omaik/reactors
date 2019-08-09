import  { get }  from '../../api/request'

export const HellosService = () => {
  return get('/api/v1/hello')
};
