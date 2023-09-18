import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}
export const Layout = ({ children, title }: Props) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
