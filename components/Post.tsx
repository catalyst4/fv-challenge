import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { IComment, IPost } from '../types';
import Comment from './Comment';

interface IPostProps {
  post: IPost;
}

const Post = ({ post }: IPostProps) => {
  const [comments, setComments] = useState<[IComment] | []>([]);
  const [isCommentsVisible, toggleCommentsVisible] = useState(false);

  const getCommentsByPostId = async (postId: number) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    );
    const data: [IComment] | [] = await res.json();
    return setComments(data);
  };

  useEffect(() => {
    getCommentsByPostId(post.id);
  }, [post.id]);

  return (
    <Box
      sx={{
        marginX: 'auto',
      }}
      boxShadow={5}
      marginBottom={'2rem'}
    >
      <Box component='header' bgcolor='white' padding={2}>
        <Typography variant='h6' fontWeight={600} marginBottom='1rem'>
          {post.title}
        </Typography>
        <Typography variant='body1'>{post.body}</Typography>
      </Box>
      <Box padding={2}>
        {comments?.length > 0 && (
          <Button
            onClick={() => toggleCommentsVisible(!isCommentsVisible)}
            variant='text'
          >
            {comments.length} comments
          </Button>
        )}
      </Box>
      {isCommentsVisible && (
        <Box padding={2}>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Post;
