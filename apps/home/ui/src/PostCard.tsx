import { gql, useQuery } from '@apollo/client';
import { LoadingSpinner } from '@super-rad-poc/design/components';
import {
  Card,
  CardBody,
  CardDate,
  CardHeader,
  CardImage,
  CardTitle,
} from '@super-rad-poc/design/styles';
import moment from 'moment';

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
      {loading && <LoadingSpinner />}
      {error && <p>Error: {error.message}</p>}

      {data &&
        data.posts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardImage src="https://picsum.photos/64" alt="author" />
              <CardTitle>{post.author.name}</CardTitle>
              <CardDate>
                {moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}
              </CardDate>
            </CardHeader>
            <CardBody>{post.content}</CardBody>
          </Card>
        ))}
    </>
  );
}
