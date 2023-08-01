import Axios from "./connection";

export const getCashPayment = async (startDate = null, endDate = null) => {
    try {
      const response = await Axios.get('/CashPayment', { params: { startDate, endDate } });
      return response.data; // Return the response data
    } catch (error) {
      // If there's an error, check the response status and show the appropriate alert message
      if (error.response && error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again later.");
      }
      return null; // Return null in case of an error
    }
  };

  export const getCAPayment = async (startDate = null, endDate = null) => {
    try {
      const response = await Axios.get('/CAPayment', { params: { startDate, endDate } });
      return response.data; // Return the response data
    } catch (error) {
      // If there's an error, check the response status and show the appropriate alert message
      if (error.response && error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again later.");
      }
      return null; // Return null in case of an error
    }
  };

  export const getOnlinePayment = async (startDate = null, endDate = null) => {
    try {
      const response = await Axios.get('/OnlinePayment', { params: { startDate, endDate } });
      return response.data; // Return the response data
    } catch (error) {
      // If there's an error, check the response status and show the appropriate alert message
      if (error.response && error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again later.");
      }
      return null; // Return null in case of an error
    }
  };