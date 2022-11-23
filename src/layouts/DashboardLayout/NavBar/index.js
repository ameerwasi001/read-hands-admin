/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  // Chip,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Users as UsersIcon,
  Settings as SettingIcon,
} from 'react-feather';
import Logo from 'src/components/Logo';
import NavItem from './NavItem';

const navConfig = [
  {
    subheader: 'Management',
    items: [
      {
        title: 'Customers',
        icon: UsersIcon,
        href: '/app/management/customers'
      },
      {
        title: 'Vendors',
        icon: UsersIcon,
        href: '/app/management/vendors'
      },
      {
        title: 'Setting',
        icon: SettingIcon,
        href: '/app/management/account'
      }
    ]
  },
];

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

function NavBar({ openMobile, onMobileClose }) {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useSelector(state => state.account);
  const [userData, setUserData] = useState({})

  useEffect(() => {

    if (openMobile && onMobileClose) {
      onMobileClose();
    }

    if(user.token) {
      const token = user.token
      fetch('https://ready-hand-banckend.herokuapp.com/admin/account/user/me', { headers: { "Authorization": token } })
      .then(data => data.json())
      .then(data => {
        const user = data.data
        setUserData({fullname: user.fullname, profilePicture: user.profilePicture})
      })
    }
    // eslint-disable-next-line
  }, [location.pathname, user]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <RouterLink to="/">
              <Avatar alt={`${userData.fullname}`} className={classes.avatar} src={userData.profilePicture} />
            </RouterLink>
          </Box>
          <Box mt={2} textAlign="center">
            <Link
              component={RouterLink}
              to="/"
              variant="h5"
              color="textPrimary"
              underline="none"
            >
              {`${userData.fullname}`}
            </Link>
            <Typography variant="body2" color="textSecondary">
              {/* {user.bio} */}Admin
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box>
          {
            (navConfig && <Box p={2}>
              {navConfig.map(config => (
                <List
                  key={config.subheader}
                  subheader={
                    <ListSubheader disableGutters disableSticky>
                      {config.subheader}
                    </ListSubheader>
                  }
                >
                  {renderNavItems({
                    items: config.items,
                    pathname: location.pathname
                  })}
                </List>
              ))}
            </Box>)
          }
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
