import React from 'react';
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

type FormData = {
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
};

const fields: Array<keyof FormData> = [
  'firstName',
  'lastName',
  'country',
  'address',
  'city',
  'state',
  'postalCode',
];

const BillingDetailsForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Billing Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {fields.map((field) => (
            <Grid
              item
              md={field === 'city' || field === 'state' || field === 'postalCode' ? 4 : 6}
              xs={12}
              key={field}
            >
              <Controller
                name={field}
                control={control}
                render={({ field: controllerField }) => (
                  <TextField
                    {...controllerField}
                    label={`${field.charAt(0).toUpperCase() + field.slice(1)}*`}
                    fullWidth
                    error={!!errors[field]}
                    helperText={errors[field]?.message || ''}
                    aria-label={field}
                  />
                )}
              />
            </Grid>
          ))}
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
                  aria-label="Phone"
                />
              )}
            />
            {errors.phone && (
              <Typography color="error" variant="body2">
                {errors.phone.message}
              </Typography>
            )}
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
