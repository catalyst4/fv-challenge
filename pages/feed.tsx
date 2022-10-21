import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import Post from '../components/Post';
import { IPost } from '../types';

interface IFeedProps {
  posts: [IPost] | [];
}

const Feed = ({ posts }: IFeedProps) => {
  return (
    <div>
      <Head>
        <title>Fanvue Feed</title>
        <link rel='icon' href='/public/favicon.ico' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Container
        maxWidth='sm'
        sx={{
          marginTop: '5rem',
        }}
      >
        {posts?.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)}
        {!posts ||
          (posts.length === 0 && (
            <Typography variant='h1'>No posts</Typography>
          ))}
      </Container>
    </div>
  );
};

export default Feed;

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: [IPost] | [] = await res.json();

  return { props: { posts } };
}
