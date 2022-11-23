/* eslint-disable max-len */
import React,{useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Divider,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  TextField,
  FormHelperText,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  SvgIcon,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Clipboard as ClipboardIcon,
  Trash2 as DeleteIcon,
} from 'react-feather';
import AdminService from 'src/services/AdminService';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import aws from 'aws-sdk';
import { promisify } from 'util';
import crypto from 'crypto';

const useStyles = makeStyles(theme => ({
  root: {},
  queryField: {
    width: 500
  },
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  mailColor:{
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  appBar: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    display: 'none',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const config = {
  region: 'eu-west-2',
  accessKeyId: 'AKIAZOQGZVMVLILZ5JHS',
  secretAccessKey: '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',
  signatureVersion: 'v4',
}


function Results({ className, admin, staff, updateStaff, deleteStaff, ...rest }) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [GeneratedAccount, setGeneratedAccount] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [imageUpload, setImageUpload] = useState(null)
  const randomBytes = promisify(crypto.randomBytes)
  const s3 = new aws.S3(config)

  const handleChange = (event, newValue) => {
    setImageUpload(null)
    setValue(newValue);
  };

  const GenerateAccount = async () => {

    if(imageUpload){

      const rawBytes = await randomBytes(16)
      const imageName = rawBytes.toString('hex')

      const params = ({
        Bucket: 'myfyapbucket',
        Key: imageName,
        Expires: 60
      }) 

      const uploadUrl = await s3.getSignedUrlPromise('putObject', params)

      await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: imageUpload
      })

      const imageUrl = uploadUrl.split('?')[0]

      AdminService.generateAccount({profilePicture: imageUrl}).then(res => {
        // console.log(res)
        setGeneratedAccount(res.data)
        updateStaff()
      }).catch(err => {
        console.log(err)
      })
    }else{
      enqueueSnackbar('Kindly Select a Profile Picture for the account', {
        variant: 'error'
      });
    }
  }
  
  
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Divider />

      <Box p={2} minHeight={56} display="flex" alignItems="center">
        <Box flexGrow={1} />
      </Box>

      <PerfectScrollbar>
        <Box className={classes.appBar} minWidth={700}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Admin Info" {...a11yProps(0)} />
              <Tab label="Generate Account" {...a11yProps(1)} />
              <Tab label="Staff Accounts" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Formik
              initialValues={{
                username: admin?.username,
                email: admin?.email,
                firstName: admin?.firstName,
                lastName: admin?.lastName,
                password: ''
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string().required(),
                email: Yup.string().required(),
                firstName: Yup.string().required(),
                lastName: Yup.string().required(),
              })}
              onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                  // Do api call
                  setSubmitting(true);
                  // console.log('Submitted Data: ', values);
                  let imageUrl = '';

                  if(imageUpload){

                    let filename = admin.profilePicture.split('/').pop()

                    if(filename !== ''){
                      await s3.deleteObject({Bucket: 'myfyapbucket', Key: filename}).promise()
                    }

                    const rawBytes = await randomBytes(16)
                    const imageName = rawBytes.toString('hex')

                    const params = ({
                      Bucket: 'myfyapbucket',
                      Key: imageName,
                      Expires: 60
                    }) 

                    const uploadUrl = await s3.getSignedUrlPromise('putObject', params)

                    await fetch(uploadUrl, {
                      method: 'PUT',
                      headers: {
                        "Content-Type": "multipart/form-data"
                      },
                      body: imageUpload
                    })

                    imageUrl = uploadUrl.split('?')[0]
                  }

                  const newObject = {
                    adminId: admin.id,
                    username: values.username,
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    password: values.password,
                    profilePicture: imageUrl
                  }

                  if( values.username !== admin.username || values.email !== admin.email ||
                      values.firstName !== admin.firstName || values.lastName !== admin.lastName ||
                      values.password !== '' || imageUpload){
                        
                        AdminService.updateAdmin(newObject).then(res => {
                          enqueueSnackbar('Profile Updated Successfully', {
                            variant: 'success'
                          });
                          window.location.reload()
                        }).catch(err => {
                          console.log(err)
                          enqueueSnackbar('Error While Updating Profile', {
                            variant: 'error'
                          });
                        })
                  }else{
                    enqueueSnackbar('No Change Detected!', {
                      variant: 'error'
                    });
                  }

                  
                } catch (err) {
                  console.log(err)
                  setSubmitting(false)
                }
              }}

              
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className={clsx(classes.root, className)}
                  {...rest}
                >
                  <Box minWidth={600}  display="flex">
                    <Box minWidth={600} p={2}>
                      <input accept="image/*" onChange={(event) => { setImageUpload(event.target.files[0])}} className={classes.input} id="networkIcon" type="file" />
                      <label htmlFor="networkIcon">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                          <PhotoCamera />
                        </IconButton>
                        {(imageUpload && imageUpload.name) || admin.profilePicture}
                      </label>
                    </Box>
                  </Box>

                  <Box minWidth={400}  display="flex">
                    <Box minWidth={400} p={2}>
                      <TextField
                        error={Boolean(
                          touched.username && errors.username
                        )}
                        helperText={touched.username && errors.username}
                        fullWidth
                        label="Username"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        variant="outlined"
                      />
                    </Box>

                    <Box minWidth={400} p={2}>
                      <TextField
                        error={Boolean(
                          touched.email && errors.email
                        )}
                        helperText={touched.email && errors.email}
                        fullWidth
                        label="Email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        variant="outlined"
                      />
                    </Box>
                  </Box>

                  <Box minWidth={400}  display="flex">
                    <Box minWidth={400} p={2}>
                      <TextField
                        error={Boolean(
                          touched.firstName && errors.firstName
                        )}
                        helperText={touched.firstName && errors.firstName}
                        fullWidth
                        label="First Name"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        variant="outlined"
                      />
                    </Box>

                    <Box minWidth={400} p={2}>
                      <TextField
                        error={Boolean(
                          touched.lastName && errors.lastName
                        )}
                        helperText={touched.lastName && errors.lastName}
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        variant="outlined"
                      />
                    </Box>
                  </Box>

                  <Box minWidth={400}  display="flex">
                    <Box minWidth={400} p={2}>
                      <TextField
                        error={Boolean(
                          touched.password && errors.password
                        )}
                        helperText={touched.password && errors.password}
                        fullWidth
                        label="Password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        variant="outlined"
                        placeholder='Your New Password'
                      />
                    </Box>
                  </Box>
                  {errors.submit && (
                    <Box mt={3}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                  )}
                  <Box p={2}>
                    <Button
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      Update
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {
              GeneratedAccount && <Box p={2}>
              <Typography>
                Account Type: {GeneratedAccount.role}
              </Typography>
              <Typography>
                Email: {GeneratedAccount.email}
              </Typography>
              <Typography>
                password: {GeneratedAccount.orignalPass}
              </Typography>

              <Box p={2}>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={() => {
                    navigator.clipboard.writeText(`${GeneratedAccount.email} ${GeneratedAccount.orignalPass}`)
                    enqueueSnackbar('Copied To Clipboard', {
                      variant: 'success'
                    });
                  }}
                >
                  Copy
                </Button>
              </Box>
              </Box>
            }

            <Box minWidth={600}  display="flex">
              <Box minWidth={600} p={2}>
                <input accept="image/*" onChange={(event) => { setImageUpload(event.target.files[0])}} className={classes.input} id="networkIcon" type="file" />
                <label htmlFor="networkIcon">
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                  </IconButton>
                  {imageUpload && imageUpload.name}
                </label>
              </Box>
            </Box>
            
            <Button
              color="secondary"
              variant="contained"
              onClick={GenerateAccount}
            >
              Generate Account
            </Button>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Account Type</TableCell>
                <TableCell>Copy</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staff.map((row) => (
                <TableRow hover key={row?._id}>
                  <TableCell>{row?.email}</TableCell>
                  <TableCell>{row?.orignalPass}</TableCell>
                  <TableCell>{row?.role}</TableCell>
                  <TableCell>
                    <IconButton 
                    onClick={() => {
                      navigator.clipboard.writeText(`${row?.email} ${row?.orignalPass}`)
                      enqueueSnackbar('Copied To Clipboard', {
                        variant: 'success'
                      });
                    }}>
                      <SvgIcon fontSize="small">
                        <ClipboardIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => {deleteStaff(row?._id)}}>
                      <SvgIcon fontSize="small">
                        <DeleteIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TabPanel>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array
};

Results.defaultProps = {
  customers: []
};

export default Results;
