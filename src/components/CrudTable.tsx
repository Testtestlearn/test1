import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type UserRecord = {
  id: number;
  name: string;
  role: string;
  active: boolean;
};

const initialRecords: UserRecord[] = [
  { id: 1, name: "Jimmy", role: "Admin", active: true },
  { id: 2, name: "Alex", role: "Editor", active: true },
  { id: 3, name: "Rin", role: "Viewer", active: false },
];

function CrudTable() {
  const [records, setRecords] = useState<UserRecord[]>(initialRecords);
  const [nameInput, setNameInput] = useState("");
  const [roleInput, setRoleInput] = useState("Viewer");
  const [activeInput, setActiveInput] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);

  const resetForm = () => {
    setNameInput("");
    setRoleInput("Viewer");
    setActiveInput(true);
    setEditingId(null);
  };

  const handleSave = () => {
    const trimmedName = nameInput.trim();
    if (!trimmedName) return;

    if (editingId !== null) {
      setRecords((current) =>
        current.map((record) =>
          record.id === editingId
            ? {
                ...record,
                name: trimmedName,
                role: roleInput,
                active: activeInput,
              }
            : record,
        ),
      );
      resetForm();
      return;
    }

    const nextId = records.length
      ? Math.max(...records.map((r) => r.id)) + 1
      : 1;

    setRecords((current) => [
      ...current,
      { id: nextId, name: trimmedName, role: roleInput, active: activeInput },
    ]);
    resetForm();
  };

  const handleEdit = (record: UserRecord) => {
    setEditingId(record.id);
    setNameInput(record.name);
    setRoleInput(record.role);
    setActiveInput(record.active);
  };

  const handleDelete = (id: number) => {
    setRecords((current) => current.filter((record) => record.id !== id));
    if (editingId === id) resetForm();
  };

  return (
    <Card id="crud" sx={{ mt: 4 }}>
      <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
        <Typography
          variant="overline"
          color="primary.main"
          sx={{ fontWeight: 800 }}
        >
          Simple CRUD Page
        </Typography>
        <Typography variant="h4">Manage Users</Typography>
        <Typography color="text.secondary" sx={{ mt: 0.5 }}>
          Create, update, and delete rows in a Material UI table.
        </Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Name"
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                label="Role"
                value={roleInput}
                onChange={(event) => setRoleInput(event.target.value)}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Editor">Editor</MenuItem>
                <MenuItem value="Viewer">Viewer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 2.5 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={activeInput}
                  onChange={(event) => setActiveInput(event.target.checked)}
                />
              }
              label="Active"
              sx={{ mt: 0.5 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 2.5 }}>
            <Stack
              direction="row"
              spacing={1}
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <Button variant="contained" onClick={handleSave}>
                {editingId !== null ? "Update" : "Add"}
              </Button>
              <Button variant="outlined" onClick={resetForm}>
                Reset
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <TableContainer
          sx={{
            mt: 2,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No records yet. Add your first user.
                  </TableCell>
                </TableRow>
              ) : (
                records.map((record) => (
                  <TableRow key={record.id} hover>
                    <TableCell>{record.id}</TableCell>
                    <TableCell>{record.name}</TableCell>
                    <TableCell>{record.role}</TableCell>
                    <TableCell>
                      {record.active ? "Active" : "Inactive"}
                    </TableCell>
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="flex-end"
                      >
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleEdit(record)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          onClick={() => handleDelete(record.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default CrudTable;
