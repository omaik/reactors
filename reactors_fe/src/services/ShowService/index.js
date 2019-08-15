import React from 'react'
import  { get }  from '../../api/request'

export const IndexService = () => {
  return get('/api/v1/uploads')
};
export const ShowService = (id) => {
  return get('/api/v1/uploads/${id}')
};

export const Image = ({video_url}) => (
  <img src={video_url} alt="cover"></img>
)
