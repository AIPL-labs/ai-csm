import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { CSM_CONVERSATION_TYPE_INFO } from "./CSM_CONVERSATION_TYPE_INFO";
import { CsmChatWindow } from "./CsmChatWindow";
import { csmConvDataToSolutions } from "./dynamic/csmConvDataToSolutions";

export const CustomerPage = ({
  children = [],
}: {
  children?: React.ReactNode[];
}) => {
  // Distribute children into top, right, bottom, and left areas
  const topChildren = children.filter((_, index) => index % 4 === 0);
  const rightChildren = children.filter((_, index) => index % 4 === 1);
  const bottomChildren = children.filter((_, index) => index % 4 === 2);
  const leftChildren = children.filter((_, index) => index % 4 === 3);
  return (
    <motion.div
      key="chatWindow"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        {/* Centered Chat Window */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <CsmChatWindow
            style={{
              width: "50vw",
              height: "50vh",
              minHeight: 0,
              border: "0.3em solid grey",
              borderRadius: "1em",
              pointerEvents: "auto",
            }}
            onUpdate={(data) => {
              console.log("COMPONENT STATE", data);
              csmConvDataToSolutions(
                data as typeof CSM_CONVERSATION_TYPE_INFO.type
              );
            }}
          />
        </Box>

        {/* Top Area */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          {topChildren.map((child, index) => (
            <Box key={index} sx={{ margin: 1 }}>
              {child}
            </Box>
          ))}
        </Box>

        {/* Right Area */}
        <Box
          sx={{
            position: "absolute",
            top: "15vh",
            bottom: "15vh",
            right: 0,
            width: "15vw",
            display: "flex",
            height: "70vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          {rightChildren.map((child, index) => (
            <Box key={index} sx={{ margin: 1 }}>
              {child}
            </Box>
          ))}
        </Box>

        {/* Bottom Area */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          {bottomChildren.map((child, index) => (
            <Box key={index} sx={{ margin: 1 }}>
              {child}
            </Box>
          ))}
        </Box>

        {/* Left Area */}
        <Box
          sx={{
            position: "absolute",
            top: "15vh",
            bottom: "15vh",
            left: 0,
            width: "15vw",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          {leftChildren.map((child, index) => (
            <Box key={index} sx={{ margin: 1 }}>
              {child}
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};
