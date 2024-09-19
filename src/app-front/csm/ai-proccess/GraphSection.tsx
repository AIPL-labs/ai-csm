// GraphSection.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const GraphSection = (): JSX.Element => {
  return (
    <GraphContainer>
      <Typography variant="h6">Visionary AI Insights</Typography>
      <PlaceholderGraph
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
      />
    </GraphContainer>
  );
};

const GraphContainer = styled(Box)`
  flex: 1;
  margin: 8px;
  min-width: 300px;
`;

const PlaceholderGraph = styled(motion(Box))`
  height: 200px;
  background: linear-gradient(135deg, #e0e0e0 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, #e0e0e0 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, #e0e0e0 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: #f5f5f5;
  margin-top: 16px;
`;
