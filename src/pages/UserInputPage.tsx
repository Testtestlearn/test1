import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

type FormFields = {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  country: string;
  bio: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const emptyForm: FormFields = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  country: "",
  bio: "",
};

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (fields.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (fields.phone && !/^\+?[\d\s\-().]{7,15}$/.test(fields.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!fields.age.trim()) {
    errors.age = "Age is required.";
  } else {
    const ageNum = Number(fields.age);
    if (!Number.isInteger(ageNum) || ageNum < 1 || ageNum > 120) {
      errors.age = "Age must be a whole number between 1 and 120.";
    }
  }

  if (!fields.country) {
    errors.country = "Please select a country.";
  }

  if (fields.bio.length > 300) {
    errors.bio = "Bio must be 300 characters or less.";
  }

  return errors;
}

function UserInputPage() {
  const [fields, setFields] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormFields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setFields((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSelectChange =
    (field: keyof FormFields) => (event: { target: { value: string } }) => {
      const value = event.target.value;
      setFields((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = () => {
    const newErrors = validate(fields);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFields(emptyForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "secondary.light",
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          background:
            "linear-gradient(140deg, #fff6d9 0%, #ffd8b5 50%, #ffc9de 100%)",
          boxShadow: "0 18px 50px rgba(126, 68, 34, 0.22)",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            fontWeight: 800,
            letterSpacing: "0.14em",
            color: "primary.main",
          }}
        >
          User Input
        </Typography>
        <Typography
          variant="h2"
          sx={{ mt: 1, fontSize: { xs: "2rem", md: "3.4rem" } }}
        >
          Registration Form
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, maxWidth: "58ch" }}
        >
          Fill in your details below. All required fields are marked and
          validated before submission.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ mt: 3 }}
        >
          <Button variant="outlined" component={RouterLink} to="/">
            Back to Home
          </Button>
        </Stack>
      </Box>

      <Card sx={{ mt: 4 }}>
        <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
          {submitted ? (
            <Stack spacing={2} alignItems="flex-start">
              <Alert severity="success" sx={{ width: "100%" }}>
                Form submitted successfully!
              </Alert>
              <Typography variant="h6">Submitted Details</Typography>
              <Divider sx={{ width: "100%" }} />
              {(Object.entries(fields) as [keyof FormFields, string][]).map(
                ([key, value]) =>
                  value ? (
                    <Typography
                      key={key}
                      variant="body2"
                      color="text.secondary"
                    >
                      <strong style={{ textTransform: "capitalize" }}>
                        {key.replace(/([A-Z])/g, " $1")}:
                      </strong>{" "}
                      {value}
                    </Typography>
                  ) : null,
              )}
              <Button variant="contained" onClick={handleReset} sx={{ mt: 1 }}>
                Submit Another
              </Button>
            </Stack>
          ) : (
            <Stack spacing={3}>
              <Typography variant="h6">Personal Details</Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Full Name"
                    value={fields.fullName}
                    onChange={handleChange("fullName")}
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange("email")}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone (optional)"
                    value={fields.phone}
                    onChange={handleChange("phone")}
                    error={!!errors.phone}
                    helperText={errors.phone ?? "e.g. +1 555-555-5555"}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Age"
                    type="number"
                    value={fields.age}
                    onChange={handleChange("age")}
                    error={!!errors.age}
                    helperText={errors.age}
                    slotProps={{ htmlInput: { min: 1, max: 120 } }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required error={!!errors.country}>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      labelId="country-label"
                      label="Country"
                      value={fields.country}
                      onChange={handleSelectChange("country")}
                    >
                      <MenuItem value="US">United States</MenuItem>
                      <MenuItem value="CA">Canada</MenuItem>
                      <MenuItem value="GB">United Kingdom</MenuItem>
                      <MenuItem value="AU">Australia</MenuItem>
                      <MenuItem value="JP">Japan</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    {errors.country && (
                      <FormHelperText>{errors.country}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Bio (optional)"
                    value={fields.bio}
                    onChange={handleChange("bio")}
                    error={!!errors.bio}
                    helperText={
                      errors.bio ?? `${fields.bio.length}/300 characters`
                    }
                  />
                </Grid>
              </Grid>

              <Stack direction="row" spacing={1.5}>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="outlined" onClick={handleReset}>
                  Reset
                </Button>
              </Stack>
            </Stack>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default UserInputPage;
