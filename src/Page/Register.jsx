import { Box, Typography, OutlinedInput, Button, Alert } from "@mui/material"

export default function Register() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Register
      </Typography>
      <Alert severity="warning" sx={{ mb: 4 }}>
        Username and Password required
      </Alert>
      <form>
        <OutlinedInput sx={{ mb: 2 }} fullWidth placeholder="Name" />
        <OutlinedInput sx={{ mb: 2 }} fullWidth placeholder="Username" />
        <OutlinedInput sx={{ mb: 2 }} fullWidth placeholder="Profile" multiline/>
        <OutlinedInput
          sx={{ mb: 2 }}
          fullWidth
          placeholder="Password"
          type="password"
        />
        <Button variant="contained" type="submit" fullWidth>
          Register
        </Button>
      </form>
    </Box>
  );
}
