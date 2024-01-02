import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar } from "@mui/material";
import { IconArrowUpLeft } from "@tabler/icons-react";
import React from "react";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function AnnualDistribution() {
  // Access theme from Material-UI
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = "#ecf2ff";
  const successlight = theme.palette.success.light;

  // Chart options
  const optionscolumnchart = {
    // Add any chart options you want here
  };

  // Chart data
  const seriescolumnchart = [40, 42, 27];

  return (
    <Grid container spacing={3}>
      {/* Left column */}
      <Grid item xs={7} sm={7}>
        <Typography variant="h3" fontWeight="400">
          $10,358
        </Typography>
        <Stack direction="row" spacing={1} mt={1} alignItems="center">
          <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
            <IconArrowUpLeft width={20} color="#39B69A" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="400">
            +9%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            last year
          </Typography>
        </Stack>
        <Stack spacing={3} mt={5} direction="row">
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              sx={{
                width: 9,
                height: 9,
                bgcolor: primary,
                svg: { display: "none" },
              }}
            ></Avatar>
            <Typography variant="subtitle2" color="textSecondary">
              2022
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              sx={{
                width: 9,
                height: 9,
                bgcolor: successlight,
                svg: { display: "none" },
              }}
            ></Avatar>
            <Typography variant="subtitle2" color="textSecondary">
              2023
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      {/* Right column */}
      <Grid item xs={8} sm={8}>
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="donut"
          height="500px"
        />
      </Grid>
    </Grid>
  );
}

export default AnnualDistribution;
