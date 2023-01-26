import {
  AppBar,
  // Button,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

// import { useNavigate, useNavigation } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
// import { useNavigate, useNavigationType } from 'react-router-dom';
// const navigate = useNavigate();
// navigate.push('/');

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

// const about = () => {
//   const navigate = useNavigate();
//   const all = () => {
//     alert("Don't try This..!");
//     navigate.push("/");
//   };
// };

// const s = useStyles();

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency, user } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              // onClick={()=> all()}
              variant="h5"
              className={classes.title}
            >
              Smart Crypto WebApp
            </Typography>

            <Typography
              variant="h6"
              // className={useSelectStyles.Select}
              style={{ style: "margin-top:2px;" }}
            >
              Select Cuurency
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"CNY"}>CNY</MenuItem>
              <MenuItem value={"THB"}>THB</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"GBP"}>GBP</MenuItem>
              <MenuItem value={"CHF"}>CHF</MenuItem>
              {/* <MenuItem value={"DIN"}>Dinar</MenuItem> */}
              {/* <MenuItem value={"THB"}>THB</MenuItem> */}

              {/* Dollar Symbol - $
Euro Symbol - €
Pound Sterling Symbol – £
Yen Symbol – ¥
Franc Symbol – ₣
Rupee Symbol – ₹
Dinar Symbol – د.ك */}
            </Select>
            {/* firebase */}
            {/* {user ? "Log out" : "Log in"} */}
            {user ? "Log Out" : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
