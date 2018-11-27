import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.scss';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class App extends Component {
  state = {
    age: '',
    open: false,
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (


      <Grid container className="test-grid-container" spacing={16}>
        <Grid item xs={12}>
          <Grid container className="flexible-item">
            <TextField
              id="standard-name"
              className="text-input"
              margin="normal"
            />
          </Grid>
          <Grid container className="flexible-item">
            <FormControl className="select-item" >
              <InputLabel className="select-label" htmlFor="demo-controlled-open-select">Age</InputLabel>
              <Select
                className="select"
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container className="fecha-item">
            <TextField
              id="standard-name"
              className="text-input"
              margin="normal"
            />
          </Grid>
        </Grid>
      </Grid>

    );
  }
}

export default App;