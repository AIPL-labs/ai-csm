import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { AiplComponentProvider } from "../../provider/AiplComponentProvider";
import { CSM_CONVERSATION_TYPE_INFO } from "./CSM_CONVERSATION_TYPE_INFO";

import { CustomerPage } from "./CustomerPage";

import { StartPage, type Page } from "./StartPage";
import { DashboardPage } from "./DashboardPage";
import { AiProcessPage } from "./ai-proccess/AiProcessPage";
import { AiProcessPage2 } from "./ai-proccess/AiProcessPage2";
import { ProcessMockupPage } from "./ai-proccess/ProcessMockupPage";

interface CsmAppProps {
  children?: React.ReactNode[];
}

export const CsmMain: React.FC<CsmAppProps> = ({ children = [] }) => {
  const [state, setState] = useState({
    page: "ai-process" as Page,
  });

  return (
    <>
      <AiplComponentProvider config={{ typeInfo: CSM_CONVERSATION_TYPE_INFO }}>
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
          }}
        >
          <AnimatePresence>
            {state.page === "start" && (
              <StartPage
                onStart={(page) => setState((s) => ({ ...s, page }))}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {state.page === "dashboard" && <DashboardPage />}
          </AnimatePresence>
          <AnimatePresence>
            {state.page === "customer" && (
              <CustomerPage>{children}</CustomerPage>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {state.page === "ai-process" && <ProcessMockupPage/>}
          </AnimatePresence>
        </div>
      </AiplComponentProvider>
    </>
  );
};
