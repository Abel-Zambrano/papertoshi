import SearchAppBar from "../components/header/SearchAppBar";
import Button from "@material-ui/core/Button";
import Page from "../components/Page";

export default function Home() {
  return (
    <>
      <Page>
        <h1>Papertoshi</h1>

        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Page>
    </>
  );
}
