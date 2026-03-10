import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { Link as RouterLink } from "react-router-dom";

type SettingsPageProps = {
  darkMode: boolean;
  emailAlerts: boolean;
  fontSize: number;
  density: number;
  language: string;
  timezone: string;
  onDarkModeChange: (value: boolean) => void;
  onEmailAlertsChange: (value: boolean) => void;
  onFontSizeChange: (value: number) => void;
  onDensityChange: (value: number) => void;
  onLanguageChange: (event: SelectChangeEvent) => void;
  onTimezoneChange: (event: SelectChangeEvent) => void;
};

function SettingsPage({
  darkMode,
  emailAlerts,
  fontSize,
  density,
  language,
  timezone,
  onDarkModeChange,
  onEmailAlertsChange,
  onFontSizeChange,
  onDensityChange,
  onLanguageChange,
  onTimezoneChange,
}: SettingsPageProps) {
  return (
    <Card sx={{ mt: 1 }}>
      <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Box>
            <Typography
              variant="overline"
              color="primary.main"
              sx={{ fontWeight: 800 }}
            >
              User Settings Page
            </Typography>
            <Typography variant="h4">Customize your experience</Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Changes update instantly in this settings preview.
            </Typography>
          </Box>
          <Avatar sx={{ bgcolor: "secondary.main", width: 44, height: 44 }}>
            JS
          </Avatar>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ mt: 2 }}
        >
          <Button variant="outlined" component={RouterLink} to="/">
            Back to Home
          </Button>
          <Button variant="contained">Save Settings</Button>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Preferences
                </Typography>
                <Stack sx={{ mt: 1 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={darkMode}
                        onChange={(event) =>
                          onDarkModeChange(event.target.checked)
                        }
                      />
                    }
                    label="Enable dark mode"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={emailAlerts}
                        onChange={(event) =>
                          onEmailAlertsChange(event.target.checked)
                        }
                      />
                    }
                    label="Email notifications"
                  />
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Display
                </Typography>
                <Box sx={{ mt: 1.5 }}>
                  <Typography variant="body2" color="text.secondary">
                    Font size: {fontSize}px
                  </Typography>
                  <Slider
                    value={fontSize}
                    min={12}
                    max={24}
                    step={1}
                    marks
                    valueLabelDisplay="auto"
                    onChange={(_, value) => onFontSizeChange(value as number)}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Content density: {density}%
                  </Typography>
                  <Slider
                    value={density}
                    min={40}
                    max={100}
                    step={5}
                    valueLabelDisplay="auto"
                    onChange={(_, value) => onDensityChange(value as number)}
                  />
                </Box>
              </Box>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel id="language-label">Language</InputLabel>
                    <Select
                      labelId="language-label"
                      label="Language"
                      value={language}
                      onChange={onLanguageChange}
                    >
                      <MenuItem value="English">English</MenuItem>
                      <MenuItem value="Spanish">Spanish</MenuItem>
                      <MenuItem value="Japanese">Japanese</MenuItem>
                      <MenuItem value="French">French</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel id="timezone-label">Timezone</InputLabel>
                    <Select
                      labelId="timezone-label"
                      label="Timezone"
                      value={timezone}
                      onChange={onTimezoneChange}
                    >
                      <MenuItem value="UTC-08:00">UTC-08:00</MenuItem>
                      <MenuItem value="UTC-05:00">UTC-05:00</MenuItem>
                      <MenuItem value="UTC+00:00">UTC+00:00</MenuItem>
                      <MenuItem value="UTC+09:00">UTC+09:00</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              variant="outlined"
              sx={{ backgroundColor: "background.paper" }}
            >
              <CardContent>
                <Typography variant="h6">Current Settings</Typography>
                <Stack spacing={1.2} sx={{ mt: 1.5 }}>
                  <Typography variant="body2" color="text.secondary">
                    Theme mode: {darkMode ? "Dark" : "Light"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email alerts: {emailAlerts ? "On" : "Off"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Font size: {fontSize}px
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Density: {density}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Language: {language}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Timezone: {timezone}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SettingsPage;
