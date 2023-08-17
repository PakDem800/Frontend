import React from 'react';
import { Formik, Form } from 'formik';
import OtherFile from './Fake';

export const ParentComponent = () => {
  const initialValues = {
    starting: null,
    ending: null,
  };

  const handleSubmit = (values) => {
    const { starting, ending } = values;
    const startingDate = starting.toISOString().split('T')[0];
    const endingDate = ending.toISOString().split('T')[0];

    if (endingDate < startingDate) {
      alert('Ending date should be greater than or equal to the starting date.');
    } else {
      console.log('Starting Date:', startingDate);
      console.log('Ending Date:', endingDate);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue, handleBlur, errors, touched }) => (
        <Form>
          <OtherFile values={values} setFieldValue={setFieldValue} handleBlur={handleBlur} errors={errors} touched={touched} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ParentComponent;
