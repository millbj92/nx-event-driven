import {
  CardToolbar,
  PostButton,
  PostForm,
  FormTextArea,
} from '@super-rad-poc/design/styles';
import React, { useEffect, useState } from 'react';

export default function PostText() {
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
    <PostForm
      width={[1, 3 / 4, 2 / 3]}
      style={{ marginBottom: '4rem' }}
      onSubmit={handleSubmit}
    >
      <FormTextArea
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
