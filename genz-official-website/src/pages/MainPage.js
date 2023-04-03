import React from "react";
import { Stack } from "@mui/material";
import LandingSection from "../components/LandingSection";
import ServicesSection from "../components/ServicesSection";
import TechnologySection from "../components/TechnologySection";
import LetsTalkSection from "../components/LetsTalkSection";

export const MainPage = () => {
  return (
    <Stack direction="column">
      <LandingSection />
      <ServicesSection />
      <TechnologySection />
      <LetsTalkSection />
    </Stack>
  );
};
