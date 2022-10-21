/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { IPhoto } from '../types';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

interface IFullScreenImageProps {
  selectedImage: IPhoto | null;
  open: boolean;
  handleClose: () => void;
}

const FullScreenImage = ({
  selectedImage,
  open,
  handleClose,
}: IFullScreenImageProps) => {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <Container
        maxWidth='md'
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {selectedImage && (
          <img src={selectedImage.url} alt={selectedImage.title} />
        )}
        <Button
          variant='outlined'
          onClick={handleClose}
          sx={{ marginTop: '1rem' }}
        >
          Close Image
        </Button>
      </Container>
    </Dialog>
  );
};

export default FullScreenImage;
