import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  country: yup.string().required('Country / Region is required'),
  address: yup.string().required('Street Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  postalCode: yup.string().required('Postal Code is required'),
  phone: yup.string().required('Phone is required'),
});

const BillingDetailsForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Billing Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name*"
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name*"
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Country / Region*"
                  fullWidth
                  error={!!errors.country}
                  helperText={errors.country ? errors.country.message : ''}
                />
              )}
            />
          </Grid>
          {/* <Grid item md={6} xs={12}>
            <Controller
              name="company"
              control={control}
              render={({ field }) => <TextField {...field} label="Company Name" fullWidth />}
            />
          </Grid> */}
          <Grid item md={6} xs={12}>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Street Address*"
                  fullWidth
                  error={!!errors.address}
                  helperText={errors.address ? errors.address.message : ''}
                />
              )}
            />
          </Grid>
          {/* <Grid item md={6} xs={12}>
            <Controller
              name="apt"
              control={control}
              render={({ field }) => <TextField {...field} label="Apt, suite, unit" fullWidth />}
            />
          </Grid> */}
          <Grid item md={4} xs={12}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="City*"
                  fullWidth
                  error={!!errors.city}
                  helperText={errors.city ? errors.city.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="State*"
                  fullWidth
                  error={!!errors.state}
                  helperText={errors.state ? errors.state.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Controller
              name="postalCode"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Postal Code*"
                  fullWidth
                  error={!!errors.postalCode}
                  helperText={errors.postalCode ? errors.postalCode.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  defaultCountry="US"
                  placeholder="Phone"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                />
              )}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Save my information for a faster checkout"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Continue to delivery
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default BillingDetailsForm;
