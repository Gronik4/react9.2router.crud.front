import React, { useContext } from 'react';
import { PostContext } from '../App';
import { Link } from 'react-router-dom';
import pig from './afterC.png';

export const CreatCard = (props) => {
  const {id, created, content} = props.data;
  const time = `${Math.round((Date.now() - created)/1000/60)}мин.`;
  const { setGetdata } = useContext(PostContext);
  function setData() {
    const dataVcard = {
      created,
      content
    }
    setGetdata(dataVcard);
  }
  return (
    <Link to={`/post/${id}`}>
      <div className='card card_post' id={id} onClick={setData}>
        <div className='card_head'>
          <div className='img'>Фото</div>
          <div className='info'>
            <h4 className='info_name'>Кто-то Какойтов</h4>
            <p className='info_status'>статус Какойтова . {time}</p>
          </div>
        </div>
        <h2 className='content'>{content}</h2>
        <img className='img_after' src={pig} alt='after'/>
      </div>
    </Link>
  )
}

