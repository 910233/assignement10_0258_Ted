import {Grid} from "@mui/material"
import Nav from "./components/Nav";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item md={1} sx={{ display: {xs:"none", md:"block"}}}/>
      <Grid item md={2} sx={{ display: {xs:"none", md:"block"}}}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={6}>
        <Content />
      </Grid>
      <Grid item md={2} sx={{ display: {xs:"none", md:"block"}}}>
        <Rightbar />
      </Grid>
      <Grid item md={1} sx={{ display: {xs:"none", md:"block"}}}/>
    </Grid>
  )
}

export default App
