/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import React from 'react';
import { IPhoto } from '../types';

interface IVaultItemProps {
  photo: IPhoto;
  setSelectedImage: (photo: IPhoto) => void;
  toggleFullScreen: (open: boolean) => void;
}

const VaultItem = ({
  photo,
  setSelectedImage,
  toggleFullScreen,
}: IVaultItemProps) => {
  return (
    <Box
      component='img'
      onClick={() => {
        setSelectedImage(photo);
        toggleFullScreen(true);
      }}
      src={photo.thumbnailUrl}
      alt={photo.title}
      loading='lazy'
    />
  );
};

export default VaultItem;
