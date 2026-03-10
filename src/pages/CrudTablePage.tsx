import { Box, Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CrudTable from "../components/CrudTable";

function CrudTablePage() {
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
          CRUD Table Page
        </Typography>
        <Typography
          variant="h2"
          sx={{ mt: 1, fontSize: { xs: "2rem", md: "3.4rem" } }}
        >
          Manage Users
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, maxWidth: "58ch" }}
        >
          Create, update, and delete user records using a Material UI table.
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

      <CrudTable />
    </>
  );
}

export default CrudTablePage;
