import React from 'react';
import "./trendcontent.css";
import { img_300, unavailable } from './../../config/config';
import Badge from '@material-ui/core/Badge';

const TrendContent = ({id , poster , title , date ,  media_type ,  vote_average}) => {
  return (
    <div className='media'>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} overlap="rectangular" />
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt="" />
        <b className='title'>{title}</b>
        <span className='subTitle'>
            {media_type === 'tv' ? "TV Series" : "Movie"}
            <span className='subTitle'>{date}</span>
        </span>
    </div>
  )
}

export default TrendContent

