import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export type Page = "customer" | "dashboard" | "start" | "ai-process";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  color: "#fff",
  textAlign: "center",
  overflow: "auto",
});
export const StartPage = ({
  onStart: onStart,
}: {
  onStart: (page: Page) => void;
}) => {
  return (
    <StyledContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Stack alignItems={"center"}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to a New Era of Customer Service
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Experience the Future Today
          </Typography>
          <Stack>
            <Stack gap="2ch" direction="row">
              <Button
                style={{ color: "white" }}
                onClick={() => {
                  onStart("customer");
                }}
                variant="contained"
                color="secondary"
              >
                Customer
              </Button>
              <Button
                style={{ color: "white" }}
                onClick={() => {
                  onStart("dashboard");
                }}
                variant="contained"
                color="secondary"
              >
                Dashboard
              </Button>
              <Button
                style={{ color: "white" }}
                onClick={() => {
                  onStart("ai-process");
                }}
                variant="contained"
                color="secondary"
              >
                Process
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </StyledContainer>
  );
};
