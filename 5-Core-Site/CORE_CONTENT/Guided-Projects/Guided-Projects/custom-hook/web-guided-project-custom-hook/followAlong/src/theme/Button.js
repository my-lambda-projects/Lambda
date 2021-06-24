import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MaterialButton from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: props =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: props =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: props => (props.size === 'sm' ? 36 : 48),
    padding: '0 30px',
    margin: 8
  }
});

const Button = props => {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <MaterialButton className={classes.root} {...other} />;
};

export default Button;
