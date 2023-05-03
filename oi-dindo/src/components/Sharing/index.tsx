import React from 'react';
import { Box, Stack } from '@mui/material';
import { TwitterShareButton, WhatsappShareButton, InstapaperShareButton, TelegramShareButton } from 'react-share';
import { TwitterIcon, WhatsappIcon, InstapaperIcon, TelegramIcon } from 'react-share';

interface SharingComponentProps {
  shareUrl: string;
  title: string;
}

const SharingComponent: React.FC<SharingComponentProps> = ({ shareUrl, title }) => {
  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </Stack>
    </Box>
  );
};

export default SharingComponent;
