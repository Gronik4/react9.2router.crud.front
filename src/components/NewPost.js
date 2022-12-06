import React from 'react';
import { Link } from 'react-router-dom';
import bef from './before.png';
import sendRequest from '../utils/sendRequest';

export const NewPost = ({ blank }) => {
  function sendPost(){
    const text = document.getElementById('newP').value;
    const url = `${blank}posts`;
    if(text) {
      const data = {
        method: 'POST',
        id: 0,
        content: `${text}`
      }
      sendRequest(url, data);
    } else {console.log('text post is emty!'); return;} 
  }
  return (
    <div className='card card_new' id='{id}'>
      <div className='card_new_header'>
        <img className='card_new_p' src={bef} alt='img new post'/>
        <Link to={'/'}><p className='close'>X</p></Link>
      </div>
      <div className='new_content'>
        <div className='img'>Фото</div>
        <textarea id='newP' className='content' placeholder='Ваш пост' autoFocus cols='90'/>
      </div>
      <Link to={'/'} className='link_new'><button className='btn' onClick={sendPost}>Опубликовать</button></Link>
    </div>
  )
}
