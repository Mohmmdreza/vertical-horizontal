// Built-in import
import * as React from "react";
// External import
import { t } from "i18next";
import { Stack } from "@mui/material";
//Internal Import
import Products from "@/components/pages/products";

export default function Home() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Products />
    </Stack>
  );
}
