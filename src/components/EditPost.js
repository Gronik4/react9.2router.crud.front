import React, { useContext } from 'react';
import { PostContext } from '../App';
import { Link, useParams } from 'react-router-dom';
import sendRequest from '../utils/sendRequest';

export const EditPost = ({ blank }) => {
  const {getdata, setGetdata} = useContext(PostContext);
  const {id} = useParams();
  function saveChange() {
    const text = document.getElementById('newP').value;
    const url = `${blank}posts`;
    if(getdata.content === text){
      setGetdata(0);
      console.log('Текст не изменился.');
      return;
    }
    if(text) {
      const data = {
        method: 'POST',
        id,
        content: `${text}`
      }
      sendRequest(url, data);
    } else {console.log('text post is emty!'); return;} 
  }
  function hendlClose() {setGetdata(0); return;}
  return (
    <div className='card'>
      <div className='card_new_header'>
        <h3>Редактировать пост с id={id}</h3>
        <Link to={'/'}><p className='close' onClick={hendlClose}>X</p></Link>
      </div>
      <div className='new_content'>
        <div className='img'>Фото</div>
        <label>
          <p className='editP'>Текст поста: "{getdata.content}"</p>
          <textarea id='newP' className='content' placeholder="Текст измененного поста" autoFocus cols='80'/> 
        </label>
        
      </div>
      <Link to={'/'} className='link_new'><button className='btn' onClick={saveChange}>Сохранить</button></Link>
    </div>
  )
}
