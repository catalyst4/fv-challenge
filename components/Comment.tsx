import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { IComment } from '../types';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
      marginBottom={'1rem'}
    >
      <Avatar
        sx={{
          marginRight: '1rem',
        }}
      >
        {comment.name[0].toUpperCase()}
      </Avatar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant='body1'>{comment.name}</Typography>
        <Typography variant='body1' fontSize={12}>
          {comment.email}
        </Typography>
        <Typography
          variant='body1'
          component='p'
          fontSize={14}
          marginTop={'.5rem'}
        >
          {comment.body}
        </Typography>
      </Box>
    </Box>
  );
};

export default Comment;
