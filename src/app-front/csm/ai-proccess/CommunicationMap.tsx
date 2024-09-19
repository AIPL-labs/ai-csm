import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Email, Phone, Sms, Public } from '@mui/icons-material';
import styled from 'styled-components';

// Styled components for the section
const SectionContainer = styled(Box)`
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const HighlightCard = styled(Card)`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CommunicationMap: React.FC = () => {
  return (
    <SectionContainer>
      {/* Section Header */}
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
        AI-Driven Communication Strategy
      </Typography>

      {/* Introduction */}
      <Typography variant="body1" paragraph style={{ color: '#555' }}>
        Our intelligent Agent crafts personalized communication strategies for each client. 
        It analyzes preferences, engagement patterns, and context to select the best channels and timing for maximum impact.
      </Typography>

      {/* Strategy Highlights */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <HighlightCard>
            <CardContent>
              <Email style={{ fontSize: 40, color: '#FF6347' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                Email
              </Typography>
              <Typography variant="body2" style={{ color: '#777' }}>
                Tailored for formal, detailed communications. Automated follow-ups ensure timely responses.
              </Typography>
            </CardContent>
          </HighlightCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <HighlightCard>
            <CardContent>
              <Phone style={{ fontSize: 40, color: '#32CD32' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                Phone
              </Typography>
              <Typography variant="body2" style={{ color: '#777' }}>
                Perfect for urgent issues and real-time support, providing a human touch when needed.
              </Typography>
            </CardContent>
          </HighlightCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <HighlightCard>
            <CardContent>
              <Sms style={{ fontSize: 40, color: '#FFD700' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                Text
              </Typography>
              <Typography variant="body2" style={{ color: '#777' }}>
                Quick updates and reminders sent directly to the customer’s mobile device for immediate attention.
              </Typography>
            </CardContent>
          </HighlightCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <HighlightCard>
            <CardContent>
              <Public style={{ fontSize: 40, color: '#1E90FF' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                Social Media
              </Typography>
              <Typography variant="body2" style={{ color: '#777' }}>
                Engaging, broad-reach strategies tailored to the client’s social media presence.
              </Typography>
            </CardContent>
          </HighlightCard>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

