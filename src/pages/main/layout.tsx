import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export const MainLayout = () => {
  return (
    <Container component={"main"}>
      <Outlet />
    </Container>
  );
};
