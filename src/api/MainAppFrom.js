import Axios from "./connection";

export const getMainAppFormDetails = async () => {
  try {
    const response = await Axios.get('/allotmentForm/mainform');
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

export const getSingleDetails = async (ApplicationNo) => {
  try {
    console.log(ApplicationNo)
    const response = await Axios.get('/allotmentForm/mainform/details' , {
                                      params: { ApplicationNo },
                                     });

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
