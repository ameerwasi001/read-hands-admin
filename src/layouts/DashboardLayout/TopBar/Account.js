import React, { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles
} from '@material-ui/core';
import { logout } from 'src/actions/accountActions';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200
  }
}));

function Account() {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const account = useSelector(state => state.account);
  const [userData, setUserData] = useState({ fullname: null })
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if(account.user.token) {
      const token = account.user.token
      fetch('https://ready-hand-banckend.herokuapp.com/admin/account/user/me', { headers: { "Authorization": token } })
      .then(data => data.json())
      .then(data => {
        const user = data.data
        setUserData({fullname: user.fullname, profilePicture: user.profilePicture})
      })
    }
  }, [])
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await dispatch(logout());
      history.push('/');
    } catch (error) {
      enqueueSnackbar('Unable to logout', {
        variant: 'error'
      });
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar
          alt={`${userData.fullname}`}
          className={classes.avatar}
          src={userData.profilePicture}
        />
        <Hidden smDown>
          <Typography variant="h6" color="inherit">
            {`${userData.fullname}`}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        {/* <MenuItem
          component={RouterLink}
          to="/app/social/profile"
        >
          Profile
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/app/account"
        >
          Account
        </MenuItem> */}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Account;
