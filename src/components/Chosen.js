import React, { useContext } from 'react';
import { PostContext } from '../App';
import { Link, useParams } from 'react-router-dom';
import sendRequest from '../utils/sendRequest';

export const Chosen = ({ blank }) => {
  const {getdata, setGetdata} = useContext(PostContext);
  const {id} = useParams();
  const time = `${Math.round((Date.now() - getdata.created)/1000/60)}мин.`

  function postDelete() {
    setGetdata(0);
    const url = `${blank}posts/${id}`;
    sendRequest(url, { method: 'DELETE' });
  }

  return (
    <div className='card card_post' id={id}>
      <div className='card_head'>
        <div className='img'>Фото</div>
        <div className='info'>
          <h4 className='info_name'>Кто-то Какойтов. Id поста={id}</h4>
          <p className='info_status'>статус Какойтова . {time}</p>
        </div>
      </div>
      <h2 className='content'>{getdata.content}</h2>
      <div className='btn_block'>
        <Link to={`/posts/edit/${id}`}><button className='btn'>Изменить</button></Link>
        <Link to={'/'}><button className='btn btn_red' onClick={ postDelete }>Удалить</button></Link>
      </div>
    </div>
  )
}

