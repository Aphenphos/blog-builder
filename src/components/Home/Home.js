import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('comforter');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */   
      }
      <Preview title={title} subtitle={subtitle} font={font}/>   
      <Editor 
        title={title} setTitle={setTitle}
        subtitle={subtitle} setSubtitle={setSubtitle}
        setFont={setFont}/>

    </main>
  );
}
