import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import UserService from 'src/services/UserService';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function UserListView() {
  const classes = useStyles();
  const [users, setUsers] = useState(null);

  const getUsers = useCallback(() => {
    UserService.getAllVendors().then(res => {
      console.log('RES: ', res);
      setUsers(res.data);
    });
  }, []);

  const updateUser = (users) => {
    console.log('users updates', users);
    setUsers(users)
  }

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (!users) {
    return null;
  }

  return (
    <Page className={classes.root} title="No Left Over Ever - Vendors">
      <Container maxWidth={false}>
        <Header />
        {users && (
          <Box mt={3}>
            <Results customers={users} updateUser={updateUser} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default UserListView;
