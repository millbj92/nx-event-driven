import { CardToolbar, PostButton, PostForm, PostTextArea } from '@super-rad-poc/ui/styles';
import React, { ChangeEvent, useEffect, useState } from 'react';

type Props = {};

export default function PostText({}: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, content);
  };

  useEffect(() => {
    setTitle('');
    setContent('');
  }, []);
  return (
    <PostForm style={{ marginBottom: '4rem' }} onSubmit={handleSubmit}>
      <PostTextArea
        name="postText"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <CardToolbar>
        <PostButton rounded inverted />
      </CardToolbar>
    </PostForm>
  );
}
