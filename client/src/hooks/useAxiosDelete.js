// import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosDelete = (dataUrl) => {
  axios.delete(dataUrl);
};

export default useAxiosDelete;
