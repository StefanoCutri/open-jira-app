import { Box } from "@mui/material";
import Head from "next/head";
import { Sidebar, Navbar} from "../ui";

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
      <Sidebar/>
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
