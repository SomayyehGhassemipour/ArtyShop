import React from 'react';

interface Props {
  classname: string,
  title: string,
  imgUrl: string,
  clickHandler: React.MouseEventHandler<HTMLDivElement>;

}
export const Card: React.FC <Props> = ({classname , title, imgUrl, clickHandler}) => {
  return (
    <div className={classname} style={{ backgroundImage : 'url(' + imgUrl + ')' }} onClick={clickHandler}>
      <h3> {title} </h3>
    </div>
  );
}
