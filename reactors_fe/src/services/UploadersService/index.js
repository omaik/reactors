import  { post }  from '../../api/request'

export const FileUpload = (file) =>{
  const formData = new FormData();
  formData.append('file',file)
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return post('/api/v1/upload', formData, config)
};
