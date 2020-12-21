import connector from "../../configs/connector";
import { createAction } from ".";
import { SET_TOKEN } from "./type";

export const signIn = (data, callback) => {
  return (dispatch) => {
    connector({
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data,
    })
      // request(
      //   "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      //   "POST",
      //   data
      // )
      .then((res) => {
        console.log(res);
        localStorage.setItem("t", res.data.accessToken);

        dispatch(createAction(SET_TOKEN, res.data.accessToken));

        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
