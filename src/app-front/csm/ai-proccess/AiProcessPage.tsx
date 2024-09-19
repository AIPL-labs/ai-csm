// App.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { AIManager } from "./AiManager";
import { GraphSection } from "./GraphSection";
import { SubAgents } from "./SubAgents";

export const AiProcessPage = (): JSX.Element => {
  return (
    <MainContainer>
      <Header>
        <Typography variant="h4">AI Customer Success Manager</Typography>
      </Header>
      <Content>
        <AIManager />
        <SubAgents />
        <GraphSection />
      </Content>
    </MainContainer>
  );
};

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled(Box)`
  background-color: #1976d2;
  color: white;
  padding: 16px;
`;

const Content = styled(Box)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
`;
