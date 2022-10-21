import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import FullScreenImage from '../components/FullScreenImage';
import VaultItem from '../components/VaultItem';
import { IPhoto } from '../types';

interface IVaultProps {
  photos: [IPhoto] | [];
}

const Vault = ({ photos }: IVaultProps) => {
  const [selectedImage, setSelectedImage] = useState<IPhoto | null>(null);
  const [isFullScreenOpen, toggleFullScreen] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Fanvue Vault</title>
        <link rel='icon' href='/public/favicon.ico' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Container
        maxWidth='lg'
        sx={{
          marginTop: '5rem',
        }}
      >
        <Grid container spacing={2}>
          {photos.map((photo) => (
            <VaultItem
              key={photo.id}
              photo={photo}
              setSelectedImage={setSelectedImage}
              toggleFullScreen={toggleFullScreen}
            />
          ))}
        </Grid>
      </Container>
      <FullScreenImage
        selectedImage={selectedImage}
        open={isFullScreenOpen}
        handleClose={() => toggleFullScreen(false)}
      />
    </div>
  );
};

export default Vault;

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos: [IPhoto] | [] = await res.json();

  return { props: { photos } };
}
