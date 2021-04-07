import React from 'react';
import { SplitThirds } from '../organisms';
import { List } from '../molecules';
import { Image } from '../atoms';

function Options(props) {

  const leftComponent = ( <List list={props.list} /> );
  const rightComponent = ( <Image label={props.imgLabel} url={props.imgUrl}/> );

  return (
    <div className="Options">
      <h1>{props.title}</h1>
      <h2>{props.subtitle || ""}</h2>
      <SplitThirds left={leftComponent} right={rightComponent} />
    </div>
  );
}

export default Options;