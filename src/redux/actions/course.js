import { createAction } from ".";
import connector from "../../configs/connector";
import { SET_COURSES } from "./type";

//create async action
export const fetchCourses = (dispatch) => {
  connector({
    url:
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    method: "GET",
  })
    // request(
    //   "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    //   "GET"
    // )
    .then((res) => {
      console.log(res.data);
      dispatch(createAction(SET_COURSES, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
