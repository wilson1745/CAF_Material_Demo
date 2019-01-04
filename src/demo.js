import React from "react";
import Button from "@material-ui/core/Button";
import Draggable from "react-draggable";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Header } from "../layout/Header";
import { Main } from "../layout/Main";
import { Sidebar } from "../layout/Sidebar";
import { Footer } from "../layout/Footer";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Dimensions } from "react-native";
import PropTypes from "prop-types";
import Layout1 from "../dashboard/layouts/layout1/Layout1";
import Layout2 from "../dashboard/layouts/layout2/Layout2";
import Layout3 from "../dashboard/layouts/layout3/Layout3";
import Layout4 from "../dashboard/layouts/layout4/Layout4";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const MAPPING = [
  { value: "A1", label: "申請書" },
  { value: "A2", label: "ID" },
  { value: "A3", label: "財力" },
  { value: "A4", label: "其他" },
  { value: "A5", label: "業務補掃" }
];

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      layouts: [],
      open: false
    };
  }

  /*state = {
    open: false
  };*/

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    //this.setState({ open: false });
    this.setState({ open: false });
  };

  componentDidMount() {
    this.setState({
      layouts: [Layout1, Layout2, Layout3, Layout4]
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        {this.state.open && (
          <Dialog
            open={true}
            onClose={this.handleClose}
            //TransitionComponent={Draggable}
            TransitionComponent={Transition}
            aria-labelledby="form-dialog-title"
            //style={{ width: "800px" }}
            fullScreen={true}
            //backgroundColor={black}
          >
            {/*<DialogTitle id="form-dialog-title">檢視申請書</DialogTitle>*/}
            <DialogTitle id="form-dialog-title">
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <b>&nbsp;檢視申請書</b>
            </DialogTitle>
            <Grid container>
              <Grid item xs={4}>
                <div data-grid="sidebar">
                  {/*<Sidebar />
                  <Sidebar />*/}
                  <h3 align="center">&nbsp;左邊 (上)</h3>
                  <div>
                    <ul>
                      <li>
                        <b>申請書</b>
                      </li>
                      <li>
                        <b>ID</b>
                      </li>
                      <li>
                        <b>財力</b>
                      </li>
                      <li>
                        <b>其他</b>
                      </li>
                    </ul>
                    {/*<hr color="#444444" size="2" width="auto" align="left" />*/}
                    <h3 align="center">&nbsp;左邊 (下)</h3>
                    <div>
                      <ul>
                        <li>
                          <b>申請書1</b>
                        </li>
                        <li>
                          <b>申請書2</b>
                        </li>
                        <li>
                          <b>身分證</b>
                        </li>
                      </ul>
                      {/*<Route path={`/${this.constructor.name}/home`} component={Home} />
        <Route path={`/${this.constructor.name}/about`} component={About} />*/}
                    </div>
                    {/*<Route path={`/${this.constructor.name}/home`} component={Home} />
        <Route path={`/${this.constructor.name}/about`} component={About} />*/}
                  </div>
                </div>
              </Grid>
              <Grid item xs={8}>
                <div data-grid="header">
                  <h3 align="center">&nbsp;右邊</h3>
                  <img
                    src="https://s.yimg.com/ut/api/res/1.2/Dxos8JWjcjnk3jvpZFBPYw--~B/YXBwaWQ9eXR3bWFsbDtjYz0zMTUzNjAwMDtoPTYwMDtxPTgxO3c9NjAw/https://s.yimg.com/fy/0a47/item/p0834145354872-item-aa7fxf4x1200x1200-m.jpg"
                    width="100%"
                  />
                  {/*<Header />*/}
                </div>
              </Grid>
            </Grid>
            {/*<div data-grid="grid">
              <div data-grid="header">
                <Header />
              </div>
              <div data-grid="sidebar">
                <Sidebar />
              </div>
              <div data-grid="sidebar">
                <Sidebar />
              </div>
              <div data-grid="main">
                <Main />
              </div>
              <div data-grid="footer">
                <Footer />
              </div>
            </div>*/}
            <DialogActions>
              {/*<Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Subscribe
              </Button>*/}
            </DialogActions>
          </Dialog>
        )}
      </div>
    );
  }
}

Demo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Demo;
