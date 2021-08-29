import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    flex: 1,
    height: 40,
    margin: 0,
    borderWidth: 5,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  headerContainer: {
    position: "fixed",
    backgroundColor: "#3a3a3a",
    height: 100,
    paddingBottom: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
  },
  Image_container: {
    paddingTop: 150,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  Image_card: {
    cursor: "pointer",
    padding: 10,
    margin: 10,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  Loader_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 200,
  },
}));
