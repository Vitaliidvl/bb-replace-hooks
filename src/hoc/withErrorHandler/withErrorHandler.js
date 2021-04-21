import React from 'react';

// import axios from '../../axios-orders';
import Modal from '../../components/UI/Modal/Modal';
import Auxilliary from '../Auxilliary/Auxilliary';
import useHttpErroHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpErroHandler(axios);
    return (
      <Auxilliary>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxilliary>
    );
  };
};

export default withErrorHandler;
