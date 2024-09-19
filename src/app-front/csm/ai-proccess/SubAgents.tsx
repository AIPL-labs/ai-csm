// SubAgents.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Agent {
  name: string;
  role: string;
}

export const SubAgents = (): JSX.Element => {
  const agents: Agent[] = [
    { name: 'Agent Alpha', role: 'Data Processing' },
    { name: 'Agent Beta', role: 'Customer Interaction' },
    { name: 'Agent Gamma', role: 'API Integration' },
    { name: 'Agent Delta', role: 'Human Specialist' },
  ];

  return (
    <AgentsGrid container spacing={2}>
      {agents.map((agent, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <AnimatedCard whileHover={{ scale: 1.05 }}>
            <CardContent>
              <Avatar>{agent.name.charAt(0)}</Avatar>
              <Typography variant="h6">{agent.name}</Typography>
              <Typography variant="body2">{agent.role}</Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
      ))}
    </AgentsGrid>
  );
};

const AgentsGrid = styled(Grid)`
  flex: 2;
`;

const AnimatedCard = styled(motion(Card))`
  min-width: 200px;
`;
