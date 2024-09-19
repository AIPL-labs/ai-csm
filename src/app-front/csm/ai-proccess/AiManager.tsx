// AIManager.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AIManager = (): JSX.Element => {
  return (
    <AnimatedCard
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <CardContent>
        <Typography variant="h5">AI Manager</Typography>
        <Typography variant="body2">
          The central AI managing customer interactions and business processes.
        </Typography>
      </CardContent>
    </AnimatedCard>
  );
};

const AnimatedCard = styled(motion(Card))`
  flex: 1;
  margin: 8px;
  min-width: 300px;
`;
