import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { hideLoadingScreen } from "../../ui/hideLoadingScreen";
import { CsmMain } from "./CsmMain";
import { useCsmDataToNodes } from "./CsmState";
import { THEME } from "./THEME";

export const CsmFront = () => {
  const items = useCsmDataToNodes();
  useEffect(() => {
    hideLoadingScreen();
  }, []);
  return (
    <ThemeProvider theme={THEME}>
      <CsmMain>{items}</CsmMain>
    </ThemeProvider>
  );
};
