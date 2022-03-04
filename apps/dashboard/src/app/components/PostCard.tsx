import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem;
    border: 1px solid #3448c5;
    border-radius: 4px;
    font-size: 1rem;
  }

  .user-name-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-top: 1px solid #3448c5;
    padding: 0.5rem;
    .user-name {
      font-size: 1.5rem;
      line-height: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    width: 10%;
  }

  @media (min-width: 1280px) {
    width: 20%;
  }

  @media (min-width: 1440px) {
    width: 30%;
  }

  @media (min-width: 1920px) {
    width: 50%;
  }
`;

interface PostForCard {
  title: string;
  content: string;
  author: {
    name: string;
  };
}
interface IPostReturnData {
  posts: PostForCard[];
}

const GET_POSTS = gql`
  query GetPosts {
    posts {
      title
      content
      authorId
      author {
        name
      }
    }
  }
`;

export function Posts() {
  const { data, loading, error } = useQuery<IPostReturnData>(GET_POSTS);
  if (error) console.log(JSON.stringify(error, null, 2));
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data &&
        data.posts.map((post) => (
          <StyledCard key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div className="user-name-container">
              <p className="user-name">{post.author.name}</p>
            </div>
          </StyledCard>
        ))}
    </>
  );
}
