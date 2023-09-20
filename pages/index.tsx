import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "@/components/layout";
import { EntryList } from "@/components/ui";

export default function HomePage() {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={2} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pending" />
            <CardContent>
              <EntryList/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completed" />
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
