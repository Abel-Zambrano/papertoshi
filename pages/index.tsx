import SearchAppBar from "../components/SearchAppBar";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <>
      <SearchAppBar />
      <h1>Papertoshi</h1>

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  );
}
