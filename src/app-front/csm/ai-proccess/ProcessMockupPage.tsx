// ProcessMockupPage.tsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemText,
  Avatar,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepIconProps,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";
import { motion } from "framer-motion";
import { stepConnectorClasses } from "@mui/material/StepConnector";
import { CommunicationMap } from "./CommunicationMap";
// import { CommunicationMap } from "./InteractiveMap";

export const ProcessMockupPage = (): JSX.Element => {
  const [selectedClient, setSelectedClient] = useState<string>("Client A");

  const handleClientChange = (event: SelectChangeEvent<string>) => {
    setSelectedClient(event.target.value as string);
  };

  return (
    <DashboardContainer>
      <Header>
        <Typography variant="h4">AI Customer Success Dashboard</Typography>
        <FormControl variant="outlined" size="small">
          <InputLabel>Client</InputLabel>
          <Select
            value={selectedClient}
            onChange={handleClientChange}
            label="Client"
          >
            <MenuItem value="Client A">Client A</MenuItem>
            <MenuItem value="Client B">Client B</MenuItem>
            <MenuItem value="Client C">Client C</MenuItem>
          </Select>
        </FormControl>
      </Header>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <AIOverview />
          <CustomerJourney selectedClient={selectedClient} />
          <AnalyticsMetrics selectedClient={selectedClient} />
          <AICreativityFeed selectedClient={selectedClient} />
          <ComplexityManagement />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomerPersonaProfile selectedClient={selectedClient} />

          <CommunicationStrategyMap />
          <EmotionalIntelligence selectedClient={selectedClient} />
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

const DashboardContainer = styled(Box)({
  padding: "16px",
});

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
});

/* AIOverview Component */
const AnimatedCardAI = motion(
  styled(Card)({
    marginBottom: "16px",
  })
);

const AIOverview = (): JSX.Element => {
  return (
    <AnimatedCardAI initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CardContent>
        <Typography variant="h5">AI Agent Overview</Typography>
        <StatusChipAI label="Active" color="success" />
        <Typography variant="body2" gutterBottom>
          Actions Taken Today: 25
        </Typography>
        <Typography variant="body2" gutterBottom>
          Personalized Strategies Deployed: 15
        </Typography>
        <Typography variant="body2">Key Innovations:</Typography>
        <ul>
          <li>Custom engagement plan for high-value clients.</li>
          <li>New communication channel integration.</li>
        </ul>
      </CardContent>
    </AnimatedCardAI>
  );
};

const StatusChipAI = styled(Chip)({
  margin: "8px 0",
});

/* CustomerJourney Component */
interface CustomerJourneyProps {
  selectedClient: string;
}

interface JourneyStage {
  name: string;
  completed: boolean;
  isGenerated?: boolean;
}

const CustomerJourney = ({
  selectedClient,
}: CustomerJourneyProps): JSX.Element => {
  const customerJourneys: Record<string, JourneyStage[]> = {
    "Client A": [
      { name: "Awareness", completed: true },
      { name: "Interest", completed: true },
      { name: "Consideration", completed: true },
      { name: "Purchase", completed: true },
      { name: "Onboarding", completed: false },
      { name: "Adoption", completed: false },
      { name: "Engagement", completed: false },
      { name: "Growth", completed: false },
      { name: "Renewal", completed: false },
      { name: "Advocacy", completed: false },
    ],
    "Client B": [
      { name: "Awareness", completed: true },
      { name: "Interest", completed: true },
      { name: "Consideration", completed: true },
      { name: "Custom Review", completed: false, isGenerated: true },
      { name: "Purchase", completed: false },
      { name: "Onboarding", completed: false },
    ],
    "Client C": [
      { name: "Awareness", completed: true },
      { name: "Custom Demo", completed: true, isGenerated: true },
      { name: "Interest", completed: false },
      { name: "Custom Negotiation", completed: false, isGenerated: true },
      { name: "Consideration", completed: false },
    ],
  };

  const stages = customerJourneys[selectedClient];

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
    [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
      backgroundColor: "#784af4",
    },
    [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
      backgroundColor: "#784af4",
    },
  }));

  const GeneratedStepIcon = styled("div")<{
    completed: boolean;
    active: boolean;
  }>(({ completed }) => ({
    color: completed ? "#784af4" : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    fontSize: "1.2rem",
  }));

  const DefaultStepIcon = styled("div")<{
    completed: boolean;
    active: boolean;
  }>(({ completed }) => ({
    color: completed ? "#3f51b5" : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    fontSize: "1.2rem",
  }));

  const StepIconComponent = (props: StepIconProps) => {
    const { active, completed, icon } = props;
    const stepIndex = Number(icon) - 1;
    const isGenerated = stages[stepIndex]?.isGenerated;

    if (isGenerated) {
      return (
        <GeneratedStepIcon completed={!!completed} active={!!active}>
          {completed ? "★" : "☆"}
        </GeneratedStepIcon>
      );
    } else {
      return (
        <DefaultStepIcon completed={!!completed} active={!!active}>
          {completed ? "●" : "○"}
        </DefaultStepIcon>
      );
    }
  };

  return (
    <CardContainerJourney>
      <CardContent>
        <Typography variant="h6">Customer Journey</Typography>
        <StyledStepper alternativeLabel connector={<ColorlibConnector />}>
          {stages.map((stage, index) => (
            <Step key={index} completed={stage.completed}>
              <StepLabel StepIconComponent={StepIconComponent} icon={index + 1}>
                {stage.name} -{" "}
                <StageTypeLabel isGenerated={stage.isGenerated}>
                  {stage.isGenerated ? "Generated" : "Standard"}
                </StageTypeLabel>
              </StepLabel>
            </Step>
          ))}
        </StyledStepper>
        <LegendContainer>
          <LegendItem>
            <DefaultStepIcon completed={true} active={false} />
            <LegendText>Standard Stage</LegendText>
          </LegendItem>
          <LegendItem>
            <GeneratedStepIcon completed={true} active={false} />
            <LegendText>Generated Stage</LegendText>
          </LegendItem>
        </LegendContainer>
      </CardContent>
    </CardContainerJourney>
  );
};

const CardContainerJourney = styled(Card)({
  marginBottom: "16px",
});

const StyledStepper = styled(Stepper)({
  marginTop: "16px",
});

const StageTypeLabel = styled("span")<{ isGenerated?: boolean }>(
  ({ isGenerated }) => ({
    fontWeight: "bold",
    color: isGenerated ? "#784af4" : "#3f51b5",
    fontSize: "0.8rem",
  })
);

const LegendContainer = styled("div")({
  display: "flex",
  marginTop: "8px",
  alignItems: "center",
});

const LegendItem = styled("div")({
  display: "flex",
  alignItems: "center",
  marginRight: "16px",
});

const LegendText = styled(Typography)({
  marginLeft: "4px",
  fontSize: "0.9rem",
  color: "#666",
});

/* AnalyticsMetrics Component */
interface AnalyticsMetricsProps {
  selectedClient: string;
}

const AnalyticsMetrics = ({
  selectedClient,
}: AnalyticsMetricsProps): JSX.Element => {
  const customerMetricsData: Record<
    string,
    {
      name: string;
      Engagement: number;
      Satisfaction: number;
      ChurnRisk: number;
    }[]
  > = {
    "Client A": [
      { name: "Jan", Engagement: 400, Satisfaction: 80, ChurnRisk: 20 },
      { name: "Feb", Engagement: 460, Satisfaction: 78, ChurnRisk: 22 },
      { name: "Mar", Engagement: 480, Satisfaction: 82, ChurnRisk: 18 },
      { name: "Apr", Engagement: 500, Satisfaction: 85, ChurnRisk: 15 },
      { name: "May", Engagement: 530, Satisfaction: 83, ChurnRisk: 17 },
      { name: "Jun", Engagement: 550, Satisfaction: 88, ChurnRisk: 12 },
      { name: "Jul", Engagement: 570, Satisfaction: 86, ChurnRisk: 14 },
      { name: "Aug", Engagement: 590, Satisfaction: 90, ChurnRisk: 10 },
    ],
    "Client B": [
      { name: "Jan", Engagement: 300, Satisfaction: 70, ChurnRisk: 30 },
      { name: "Feb", Engagement: 310, Satisfaction: 68, ChurnRisk: 32 },
      { name: "Mar", Engagement: 320, Satisfaction: 72, ChurnRisk: 28 },
      { name: "Apr", Engagement: 330, Satisfaction: 70, ChurnRisk: 30 },
      { name: "May", Engagement: 340, Satisfaction: 74, ChurnRisk: 26 },
      { name: "Jun", Engagement: 350, Satisfaction: 75, ChurnRisk: 25 },
      { name: "Jul", Engagement: 360, Satisfaction: 77, ChurnRisk: 23 },
      { name: "Aug", Engagement: 370, Satisfaction: 80, ChurnRisk: 20 },
    ],
    "Client C": [
      { name: "Jan", Engagement: 200, Satisfaction: 60, ChurnRisk: 40 },
      { name: "Feb", Engagement: 210, Satisfaction: 58, ChurnRisk: 42 },
      { name: "Mar", Engagement: 220, Satisfaction: 62, ChurnRisk: 38 },
      { name: "Apr", Engagement: 230, Satisfaction: 60, ChurnRisk: 40 },
      { name: "May", Engagement: 240, Satisfaction: 64, ChurnRisk: 36 },
      { name: "Jun", Engagement: 250, Satisfaction: 66, ChurnRisk: 34 },
      { name: "Jul", Engagement: 260, Satisfaction: 68, ChurnRisk: 32 },
      { name: "Aug", Engagement: 270, Satisfaction: 70, ChurnRisk: 30 },
    ],
  };

  const data = customerMetricsData[selectedClient];

  return (
    <CardContainerAnalytics>
      <CardContent>
        <Typography variant="h6">
          {selectedClient} - Engagement & Metrics
        </Typography>
        <ChartContainerAnalytics>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="colorEngagement"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="colorSatisfaction"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="Engagement"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorEngagement)"
              />
              <Area
                type="monotone"
                dataKey="Satisfaction"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorSatisfaction)"
              />
              <Line
                type="monotone"
                dataKey="ChurnRisk"
                stroke="#ff7300"
                dot={{ r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainerAnalytics>
      </CardContent>
    </CardContainerAnalytics>
  );
};

const CardContainerAnalytics = styled(Card)({
  marginBottom: "16px",
});

const ChartContainerAnalytics = styled("div")({
  marginTop: "16px",
});

/* AICreativityFeed Component */
interface CreativeSolution {
  customerName: string;
  solution: string;
}

interface AICreativityFeedProps {
  selectedClient: string;
}

const AICreativityFeed = ({
  selectedClient,
}: AICreativityFeedProps): JSX.Element => {
  const solutions: CreativeSolution[] = [
    {
      customerName: "Client A",
      solution:
        "Introduced personalized training sessions based on usage patterns.",
    },
    {
      customerName: "Client B",
      solution: "Implemented a custom rewards program to boost engagement.",
    },
    {
      customerName: "Client C",
      solution:
        "Developed multilingual support to cater to international teams.",
    },
  ];

  const filteredSolutions = solutions.filter(
    (item) => item.customerName === selectedClient
  );

  return (
    <CardContainerCreativity>
      <CardContent>
        <Typography variant="h6">AI Creative Solutions</Typography>
        <List>
          {filteredSolutions.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${item.solution}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </CardContainerCreativity>
  );
};

const CardContainerCreativity = styled(Card)({
  marginBottom: "16px",
});

/* ComplexityManagement Component */
const ComplexityManagement = (): JSX.Element => {
  return (
    <CardContainerComplexity>
      <CardContent>
        <Typography variant="h6">Complexity Management Dashboard</Typography>
        <PlaceholderComplexity>
          {/* Placeholder for complexity visualization */}
          <Typography variant="body2">
            [Visualization of AI handling multiple generated strategies]
          </Typography>
        </PlaceholderComplexity>
      </CardContent>
    </CardContainerComplexity>
  );
};

const CardContainerComplexity = styled(Card)({
  marginBottom: "16px",
});

const PlaceholderComplexity = styled("div")({
  marginTop: "16px",
  height: "150px",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

/* CustomerPersonaProfile Component */
interface CustomerProfile {
  name: string;
  sentiment: string;
  purchaseHistory: string[];
  preferences: string[];
  metrics: { label: string; value: number }[];
}

interface CustomerPersonaProfileProps {
  selectedClient: string;
}

const CustomerPersonaProfile = ({
  selectedClient,
}: CustomerPersonaProfileProps): JSX.Element => {
  const customerData: Record<string, CustomerProfile> = {
    "Client A": {
      name: "Client A",
      sentiment: "Positive",
      purchaseHistory: ["Product X", "Service Y", "Addon Z"],
      preferences: [
        "Prefers email communication",
        "Interested in new features",
      ],
      metrics: [
        { label: "Engagement Score", value: 85 },
        { label: "Satisfaction Score", value: 90 },
        { label: "Churn Risk", value: 10 },
        { label: "Net Promoter Score", value: 75 },
      ],
    },
    "Client B": {
      name: "Client B",
      sentiment: "Neutral",
      purchaseHistory: ["Product A", "Product B"],
      preferences: ["Prefers phone calls", "Price-sensitive"],
      metrics: [
        { label: "Engagement Score", value: 65 },
        { label: "Satisfaction Score", value: 70 },
        { label: "Churn Risk", value: 25 },
        { label: "Net Promoter Score", value: 60 },
      ],
    },
    "Client C": {
      name: "Client C",
      sentiment: "Negative",
      purchaseHistory: ["Service D"],
      preferences: ["Requires multilingual support", "High support needs"],
      metrics: [
        { label: "Engagement Score", value: 40 },
        { label: "Satisfaction Score", value: 55 },
        { label: "Churn Risk", value: 45 },
        { label: "Net Promoter Score", value: 50 },
      ],
    },
  };

  const customer = customerData[selectedClient];

  return (
    <CardContainerProfile>
      <CardContent>
        <Avatar>{customer.name.charAt(0)}</Avatar>
        <Typography variant="h6">{customer.name}</Typography>
        <Chip label={`Sentiment: ${customer.sentiment}`} color="primary" />
        <Typography variant="body2" gutterBottom>
          Purchase History:
        </Typography>
        <ul>
          {customer.purchaseHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Typography variant="body2" gutterBottom>
          Preferences:
        </Typography>
        <ul>
          {customer.preferences.map((pref, index) => (
            <li key={index}>{pref}</li>
          ))}
        </ul>
        <Typography variant="body2" gutterBottom>
          Metrics:
        </Typography>
        <ul>
          {customer.metrics.map((metric, index) => (
            <li key={index}>
              {metric.label}: {metric.value}%
            </li>
          ))}
        </ul>
      </CardContent>
    </CardContainerProfile>
  );
};

const CardContainerProfile = styled(Card)({
  marginBottom: "16px",
});

/* CommunicationStrategyMap Component */
const CommunicationStrategyMap = (): JSX.Element => {
  return (
    <CardContainerStrategy>
      <CardContent>
        <Typography variant="h6">Dynamic Communication Strategy</Typography>

        <PlaceholderMap>
          {/* FOO */}
          <CommunicationMap />
          {/* Placeholder for a complex visualization */}
          {/* <Typography variant="body2">
            [Interactive map showing personalized communication strategies]
          </Typography> */}
        </PlaceholderMap>
      </CardContent>
    </CardContainerStrategy>
  );
};

const CardContainerStrategy = styled(Card)({
  marginBottom: "16px",
});

const PlaceholderMap = styled("div")({
  marginTop: "16px",
  // height: "200px",
  backgroundColor: "#e0e0e0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

/* EmotionalIntelligence Component */
interface EmotionalIntelligenceProps {
  selectedClient: string;
}

const EmotionalIntelligence = ({
  selectedClient,
}: EmotionalIntelligenceProps): JSX.Element => {
  const sentimentScores: Record<string, number> = {
    "Client A": 85,
    "Client B": 65,
    "Client C": 45,
  };

  const sentimentScore = sentimentScores[selectedClient];

  const emotionMetrics: { label: string; value: number }[] = [
    {
      label: "Happiness",
      value:
        selectedClient === "Client A"
          ? 80
          : selectedClient === "Client B"
            ? 60
            : 40,
    },
    {
      label: "Frustration",
      value: selectedClient === "Client C" ? 50 : 20,
    },
    {
      label: "Engagement",
      value: sentimentScore,
    },
  ];

  return (
    <CardContainerEmotion>
      <CardContent>
        <Typography variant="h6">Emotional Intelligence Analysis</Typography>
        <ProgressContainer>
          <CircularProgress
            variant="determinate"
            value={sentimentScore}
            size={60}
          />
          <Typography variant="body2" color="textSecondary">
            Sentiment Score: {sentimentScore}%
          </Typography>
        </ProgressContainer>
        <Typography variant="body2" gutterBottom>
          Emotion Metrics:
        </Typography>
        <ul>
          {emotionMetrics.map((metric, index) => (
            <li key={index}>
              {metric.label}: {metric.value}%
            </li>
          ))}
        </ul>
        <Typography variant="body2">
          The AI adjusts communication tone based on emotional cues.
        </Typography>
      </CardContent>
    </CardContainerEmotion>
  );
};

const CardContainerEmotion = styled(Card)({
  marginBottom: "16px",
});

const ProgressContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "16px",
  gap: "16px",
});
