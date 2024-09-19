// App.tsx
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AiProcessPage2 = (): JSX.Element => {
  return (
    <DashboardContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <AIOverview />
          <CustomerJourney />
          <AnalyticsMetrics />
        </Grid>
        <Grid item xs={12} md={4}>
          <TaskManagement />
          <CustomerInsights />
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

const DashboardContainer = styled(Box)`
  padding: 16px;
`;

/* AIOverview Component */
const AIOverview = (): JSX.Element => {
  return (
    <AnimatedCardAI initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CardContent>
        <Typography variant="h5">AI Agent Overview</Typography>
        <StatusChipAI label="Active" color="success" />
        <Typography variant="body2" gutterBottom>
          Actions Taken Today: 25
        </Typography>
        <Typography variant="body2">Key Recommendations:</Typography>
        <ul>
          <li>Reach out to customers in 'Churn' stage.</li>
          <li>Schedule onboarding sessions for new clients.</li>
        </ul>
      </CardContent>
    </AnimatedCardAI>
  );
};

const AnimatedCardAI = styled(motion(Card))`
  margin-bottom: 16px;
`;

const StatusChipAI = styled(Chip)`
  margin: 8px 0;
`;

/* CustomerJourney Component */
const stages = [
  "Awareness",
  "Interest",
  "Consideration",
  "Purchase",
  "Onboarding",
  "Adoption",
  "Engagement",
  "Growth",
  "Renewal",
  "Advocacy",
];

const CustomerJourney = (): JSX.Element => {
  return (
    <CardContainerJourney>
      <CardContent>
        <Typography variant="h6">Customer Journey</Typography>
        <StyledStepperJourney alternativeLabel>
          {stages.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </StyledStepperJourney>
      </CardContent>
    </CardContainerJourney>
  );
};

const CardContainerJourney = styled(Card)`
  margin-bottom: 16px;
`;

const StyledStepperJourney = styled(Stepper)`
  margin-top: 16px;
  .MuiStepLabel-label {
    font-size: 0.8rem;
  }
`;

/* TaskManagement Component */
interface Task {
  title: string;
  status: "Pending" | "In Progress" | "Completed";
}

const TaskManagement = (): JSX.Element => {
  const tasks: Task[] = [
    { title: "Schedule onboarding for Client X", status: "Pending" },
    { title: "Follow up with Client Y", status: "In Progress" },
    { title: "Prepare QBR for Client Z", status: "Completed" },
  ];

  return (
    <AnimatedCardTask
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <CardContent>
        <Typography variant="h6">AI Task Management</Typography>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemText primary={task.title} />
              <StatusChipTask
                label={task.status}
                color={getStatusColor(task.status)}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </AnimatedCardTask>
  );
};

const AnimatedCardTask = styled(motion(Card))`
  margin-bottom: 16px;
`;

const StatusChipTask = styled(Chip)`
  margin-left: 8px;
`;

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "default";
    case "In Progress":
      return "primary";
    case "Completed":
      return "success";
    default:
      return "default";
  }
};

/* CustomerInsights Component */
interface Customer {
  name: string;
  stage: string;
  insight: string;
}

const CustomerInsights = (): JSX.Element => {
  const customer: Customer = {
    name: "Client A",
    stage: "Adoption",
    insight: "High usage of feature X; consider introducing feature Y.",
  };

  return (
    <CardContainerInsights>
      <CardContent>
        <Avatar>{customer.name.charAt(0)}</Avatar>
        <Typography variant="h6">{customer.name}</Typography>
        <Typography variant="body2">Current Stage: {customer.stage}</Typography>
        <Typography variant="body2">AI Insight:</Typography>
        <Typography variant="body2" color="textSecondary">
          {customer.insight}
        </Typography>
        <ButtonContainerInsights>
          <Button variant="contained" color="primary">
            View Profile
          </Button>
          <Button variant="outlined" color="secondary">
            Next Action
          </Button>
        </ButtonContainerInsights>
      </CardContent>
    </CardContainerInsights>
  );
};

const CardContainerInsights = styled(Card)`
  margin-bottom: 16px;
`;

const ButtonContainerInsights = styled(Box)`
  margin-top: 16px;
  display: flex;
  gap: 8px;
`;

/* AnalyticsMetrics Component */
const data = [
  { name: "Jan", Engagement: 400 },
  { name: "Feb", Engagement: 300 },
  { name: "Mar", Engagement: 500 },
  { name: "Apr", Engagement: 700 },
  { name: "May", Engagement: 600 },
];

const AnalyticsMetrics = (): JSX.Element => {
  return (
    <CardContainerAnalytics>
      <CardContent>
        <Typography variant="h6">Engagement Metrics</Typography>
        <ChartContainerAnalytics>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Engagement" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainerAnalytics>
      </CardContent>
    </CardContainerAnalytics>
  );
};

const CardContainerAnalytics = styled(Card)`
  margin-bottom: 16px;
`;

const ChartContainerAnalytics = styled.div`
  margin-top: 16px;
`;
