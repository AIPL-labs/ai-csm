// Import necessary modules
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Grid,
  Paper,
  Box,
  Avatar,
  Tooltip,
  Fab,
  Divider,
  ListItemButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Chat as ChatIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Insights as InsightsIcon,
  HelpOutline as HelpIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Define styled components
const DashboardContainer = styled('div')({
  display: 'flex',
});

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#fff',
  color: '#000',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
}));

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: 260,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 260,
    boxSizing: 'border-box',
    backgroundColor: '#1f2937',
    color: '#fff',
  },
}));

const Content = styled('main')({
  flexGrow: 1,
  padding: '24px',
  backgroundColor: '#f9fafb',
  minHeight: '100vh',
});

const CardStyled = styled(Paper)({
  padding: '24px',
  borderRadius: '12px',
  backgroundColor: '#fff',
});

const FabStyled = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '32px',
  right: '32px',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
}));

const ToolbarSpacer = styled('div')(({ theme }) => theme.mixins.toolbar);

const ModalStyled = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  maxWidth: '600px',
  width: '100%',
}));

const AgentAvatar = styled(Avatar)(({ theme, isAi }: { theme?: any; isAi: boolean }) => ({
  backgroundColor: isAi ? theme.palette.primary.main : theme.palette.secondary.main,
}));

// Mock data for the leaderboard
const leaderboardData = [
  {
    name: 'AI Agent Alpha',
    isAi: true,
    avatar: '/ai-agent-alpha.png',
    ticketsResolved: 10000,
    onboardings: 5000,
    escalationsAvoided: 8000,
    customerAdvancements: 6000,
    strategies: ['Proactive Outreach', 'Predictive Analysis', 'Automated Follow-ups'],
    interactionModalities: [
      { channel: 'Email', percentage: 50 },
      { channel: 'Social Media', percentage: 30 },
      { channel: 'Phone', percentage: 15 },
      { channel: 'Chat', percentage: 5 },
    ],
    subAgents: [
      { name: 'Email Bot', task: 'Send follow-up emails' },
      { name: 'Social Media Bot', task: 'Monitor and respond on social platforms' },
      { name: 'Call Scheduler', task: 'Arrange phone calls' },
    ],
  },
  {
    name: 'John Doe',
    isAi: false,
    avatar: '/john-doe.png',
    ticketsResolved: 100,
    onboardings: 50,
    escalationsAvoided: 80,
    customerAdvancements: 60,
    strategies: ['Personalized Support', 'Relationship Building'],
    interactionModalities: [
      { channel: 'Email', percentage: 40 },
      { channel: 'Phone', percentage: 60 },
    ],
    subAgents: [],
  },
  // Add more agents
];

// Exported DashboardPage component
export function DashboardPage(props: {}): JSX.Element {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  const handleAgentClick = (agent: any) => {
    setSelectedAgent(agent);
  };

  const handleAgentClose = () => {
    setSelectedAgent(null);
  };

  return (
    <DashboardContainer>
      {/* AppBar */}
      <AppBarStyled position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            AI Agents Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Tooltip title="Help">
            <IconButton color="inherit">
              <HelpIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton color="inherit">
              <Avatar alt="User Profile" src="/placeholder-profile.png" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBarStyled>

      {/* Drawer */}
      <DrawerStyled variant="permanent">
        <ToolbarSpacer />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InsightsIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider style={{ backgroundColor: '#374151' }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HelpIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="Support" />
            </ListItemButton>
          </ListItem>
        </List>
      </DrawerStyled>

      {/* Main Content */}
      <Content>
        <ToolbarSpacer />
        <Grid container spacing={4}>
          {/* Leaderboard */}
          <Grid item xs={12}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <CardStyled elevation={1}>
                <Typography variant="h5" gutterBottom>
                  Agent Performance Leaderboard
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Comparative performance metrics of AI and human agents.
                </Typography>
                <Box mt={2}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Agent</TableCell>
                          <TableCell align="right">Tickets Resolved</TableCell>
                          <TableCell align="right">Onboardings Complete</TableCell>
                          <TableCell align="right">Escalations Avoided</TableCell>
                          <TableCell align="right">Customer Stage Advances</TableCell>
                          <TableCell align="center">Details</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {leaderboardData.map((agent, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              <Box display="flex" alignItems="center">
                                <AgentAvatar
                                  src={agent.avatar}
                                  alt={agent.name}
                                  isAi={agent.isAi}
                                  sx={{ mr: 2 }}
                                >
                                  {agent.name.charAt(0)}
                                </AgentAvatar>
                                <Box>
                                  <Typography variant="subtitle1">{agent.name}</Typography>
                                  <Typography variant="caption" color="textSecondary">
                                    {agent.isAi ? 'AI Agent' : 'Human Agent'}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell align="right">{agent.ticketsResolved}</TableCell>
                            <TableCell align="right">{agent.onboardings}</TableCell>
                            <TableCell align="right">{agent.escalationsAvoided}</TableCell>
                            <TableCell align="right">{agent.customerAdvancements}</TableCell>
                            <TableCell align="center">
                              <IconButton onClick={() => handleAgentClick(agent)}>
                                <ExpandMoreIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </CardStyled>
            </motion.div>
          </Grid>

          {/* Interaction Modalities */}
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <CardStyled elevation={1}>
                <Typography variant="h5" gutterBottom>
                  Interaction Modalities
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  How AI agents are interacting with customers via different channels.
                </Typography>
                <Box mt={2}>
                  {/* Placeholder for modalities chart */}
                  <Box
                    sx={{
                      height: '300px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body1">Modalities Chart Placeholder</Typography>
                  </Box>
                </Box>
              </CardStyled>
            </motion.div>
          </Grid>

          {/* Sub-Agent Management */}
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <CardStyled elevation={1}>
                <Typography variant="h5" gutterBottom>
                  Sub-Agent Management
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  How AI agents manage sub-agents to perform tasks.
                </Typography>
                <Box mt={2}>
                  {/* Placeholder for sub-agent network visualization */}
                  <Box
                    sx={{
                      height: '300px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body1">Sub-Agent Network Placeholder</Typography>
                  </Box>
                </Box>
              </CardStyled>
            </motion.div>
          </Grid>

          {/* Active Agents */}
          <Grid item xs={12}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <CardStyled elevation={1}>
                <Typography variant="h5" gutterBottom>
                  Active Agents
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Overview of currently active AI and human agents.
                </Typography>
                {/* Placeholder for active agents visualization */}
                <Box mt={2}>
                  <Typography variant="body1">
                    Placeholder for active agents components.
                  </Typography>
                </Box>
              </CardStyled>
            </motion.div>
          </Grid>
        </Grid>
      </Content>

      {/* Floating Action Button for AI Assistant */}
      <FabStyled aria-label="AI Assistant" onClick={handleChatOpen}>
        <ChatIcon />
      </FabStyled>

      {/* AI Assistant Chat Interface */}
      <ModalStyled
        open={isChatOpen}
        onClose={handleChatClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isChatOpen}>
          <ModalContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">AI Assistant</Typography>
              <IconButton onClick={handleChatClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <Box mt={2}>
              {/* Placeholder for chat messages */}
              <Typography variant="body1">Chat interface placeholder.</Typography>
            </Box>
          </ModalContent>
        </Fade>
      </ModalStyled>

      {/* Agent Details Modal */}
      <ModalStyled
        open={Boolean(selectedAgent)}
        onClose={handleAgentClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Boolean(selectedAgent)}>
          <ModalContent>
            {selectedAgent && (
              <>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">{selectedAgent.name} Details</Typography>
                  <IconButton onClick={handleAgentClose}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Divider />
                <Box mt={2}>
                  <Typography variant="subtitle1">Strategies Used:</Typography>
                  <ul>
                    {selectedAgent.strategies.map((strategy: string, index: number) => (
                      <li key={index}>
                        <Typography variant="body1">{strategy}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Typography variant="subtitle1" mt={2}>
                    Interaction Modalities:
                  </Typography>
                  <ul>
                    {selectedAgent.interactionModalities.map(
                      (modality: any, index: number) => (
                        <li key={index}>
                          <Typography variant="body1">
                            {modality.channel}: {modality.percentage}%
                          </Typography>
                        </li>
                      )
                    )}
                  </ul>
                  {selectedAgent.subAgents && selectedAgent.subAgents.length > 0 && (
                    <>
                      <Typography variant="subtitle1" mt={2}>
                        Managed Sub-Agents:
                      </Typography>
                      <ul>
                        {selectedAgent.subAgents.map((subAgent: any, index: number) => (
                          <li key={index}>
                            <Typography variant="body1">
                              {subAgent.name} - {subAgent.task}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </Box>
              </>
            )}
          </ModalContent>
        </Fade>
      </ModalStyled>
    </DashboardContainer>
  );
}
