import  { post }  from '../../api/request'

export const FileUpload = (file) =>{
  const formData = new FormData();
  formData.append('video',file)
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return post('/api/v1/uploads', formData, config)
};
