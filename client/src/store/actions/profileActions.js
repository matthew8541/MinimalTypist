const axios = require("axios");

export const getProfileAction = async (id) => {
  try {
    const res = await axios.get(`/profile?id=${id}`);
    // console.log("getProfile: ", res)
    return {currUser: res.data.currUser, profile: res.data.profile};
  } catch (error) {
    console.log(error)
  }
}

export const updateRecordAction = async (userId, newRecord) => {
  try {
    const res = await axios.put("/home", {userId, newRecord});
    console.log("updateRecordAction: ", res)
  } catch (error) {
    console.log(error)
  }
}