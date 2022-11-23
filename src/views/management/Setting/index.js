import React, { useState, useEffect } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import AdminService from 'src/services/AdminService'
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },

  textDiv: {
    color: theme.palette.text.primary
  }
}));

function UserListView() {
  const classes = useStyles();
  const [staff, setStaff] = useState(null)
  const { enqueueSnackbar } = useSnackbar();
  const admin = useSelector(state => state.account.user);


  useEffect(() => {
    if(admin.role === 'Admin'){
      AdminService.getStaff().then(res => {
        setStaff(res.data)
      })
    }
  }, [admin])

  const updateStaff = () => {
    AdminService.getStaff().then(res => {
      setStaff(res.data)
    })
  }

  const deleteStaff = (staffId) => {
    AdminService.deleteStaff({staffId: staffId}).then(res => {
      enqueueSnackbar('Deleted Successfully', {
        variant: 'success'
      });
      setStaff(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  

  return (
    <Page className={classes.root} title="MI - Settings">
      <Container maxWidth={false}>
        <Header />
        {
          admin['role'] === 'Admin' ?
          <Box>
            {(admin && staff) && (
              <Box mt={3}>
                <Results admin={admin} updateStaff={updateStaff} staff={staff} deleteStaff={deleteStaff} />
              </Box>
            )}
          </Box> : 
          <Box display='flex' justifyContent='center' alignItems='center' minWidth={700} minHeight={700} mt={3}>
            <Typography className={classes.textDiv} variant='h3'>
              Staff Account do not have access to this page
            </Typography>
          </Box>
        }
        
      </Container>
    </Page>
  );
}

export default UserListView;
