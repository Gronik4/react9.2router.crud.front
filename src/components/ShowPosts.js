import React, { useEffect, useState } from 'react';
import { CreatCard } from './CreatCard';
import sendRequest from '../utils/sendRequest';

export const ShowPosts = ({ blank }) => {
  const url = `${blank}posts`;
  const [response, setResponse] = useState([]);
  useEffect(() => {
    sendRequest(url).then((res) => {
      setResponse(res);
    }).catch((err) => console.log(err))
  }, [url])
  return (
    <>
     {response.map((el) => {
      return(<CreatCard key={el.id} data={el}/>)
     })}
    </>
  )
}

