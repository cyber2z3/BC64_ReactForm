import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSvAction,
  updateSvAction,
} from "../../redux/reducers/SinhVienReducer";

class ProductForm extends Component {
  state = {
    value: {
      id: "",
      name: "",
      phone: "",
      mail: "",
    },
    errValue: {
      id: "",
      name: "",
      phone: "",
      mail: "",
    },
    isSubmit: true,
  };

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("currentState: ", currentState);
    console.log("newProps: ", newProps);
    // Can thiệp trước khi render , lấy props product edit gán vào state
    // Trả ra state mới để hàm lấy dữ liệu
    if (newProps.productEdit.id !== currentState.value.id) {
      // Hành động khi user click nút edit
      currentState.value = { ...newProps.productEdit };
    }
    return currentState;
  }

  //main render
  render() {
    let { id, name, phone, mail } = this.state.value;
    let { arrSV, dispatch } = this.props;

    const handleSubmit = (e) => {
      // Sự kiện chặn load trang
      e.preventDefault();
      dispatch(addSvAction(this.state.value));
    };
    const handleChangeInput = (e) => {
      // e.target đại diện cho thẻ input
      let tag = e.target;
      let dataType = e.target.getAttribute("data-type");
      let nameInput = tag.name;
      // clone value hiện tại
      let newValue = { ...this.state.value };
      // sửa tại value của key đó
      newValue[nameInput] = tag.value;

      // xử lý err
      let newErrValue = { ...this.state.errValue };
      let message = "";

      if (newValue[nameInput] === "") {
        message = `${nameInput} cannot be blank !`;
      } else {
        if (dataType) {
          switch (dataType) {
            case "number":
              {
                let regex = /^(?:[1-9]\d{0,9}|1000)$/;
                if (!regex.test(newValue[nameInput])) {
                  message = "* Trường này chỉ nhận số";
                }
              }
              break;
            case "string":
              {
                let regex = /^[A-Za-z]+$/;
                if (!regex.test(newValue[nameInput])) {
                  message = "* Trường này chỉ chữ";
                }
              }
              break;
            default: {
            }
          }
        }
      }
      newErrValue[nameInput] = message;

      let valid = true;
      for (let key in newErrValue) {
        if (newErrValue[key] !== "") {
          valid = false;
          break;
        }
      }

      for (let key in newValue) {
        if (newValue[key] === "") {
          valid = false;
          break;
        }
      }

      this.setState({
        value: newValue,
        errValue: newErrValue,
        isSubmit: valid,
      });
    };
    const handleUpdateProduct = () => {
      console.log(this.state.value);
      dispatch(updateSvAction(this.state.value));
    };

    return (
      <div className="container mt-5">
        <form className="border rounded-2 p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="productId" className="form-label">
                  Ma SV
                </label>
                <input
                  data-type="number"
                  type="text"
                  className="form-control"
                  name="id"
                  id="xinchaobc64"
                  placeholder="Nhập ID sản phẩm"
                  value={id}
                  onInput={handleChangeInput}
                />
                <p style={{ height: "30px" }} className="text-danger">
                  {this.state.errValue.id}
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Họ tên
                </label>
                <input
                  type="text"
                  data-type="string"
                  className="form-control"
                  name="name"
                  value={name}
                  placeholder="Nhập tên sản phẩm"
                  onInput={handleChangeInput}
                />
                <p style={{ height: "30px" }} className="text-danger">
                  {this.state.errValue.name}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="productImage" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  datatype="number"
                  className="form-control"
                  name="phone"
                  value={phone}
                  placeholder="Nhập số điện thoại sản phẩm"
                  onInput={handleChangeInput}
                />
                <p style={{ height: "30px" }} className="text-danger">
                  {this.state.errValue.phone}
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                  Email
                </label>
                <input
                  type="mail"
                  datatype="mail"
                  className="form-control"
                  name="mail"
                  value={mail}
                  placeholder="Nhập email"
                  onInput={handleChangeInput}
                />
                <p style={{ height: "30px" }} className="text-danger">
                  {this.state.errValue.mail}
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Thêm Sinh Viên
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={() => {
              handleUpdateProduct();
            }}
          >
            Cập nhật thông tin
          </button>
        </form>
      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    arrSV: state.SinhVienReducer.arrSV,
  };
};
export default connect(mapStateTopProps)(ProductForm);
