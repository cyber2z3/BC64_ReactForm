import React, { Component } from "react";
import ProductForm from "./ProductForm";
import { connect } from "react-redux";
import {
  addSvAction,
  deleteSvAction,
} from "../../redux/reducers/SinhVienReducer";

class ReactForm extends Component {
  state = {
    productEdit: {
      id: "",
      name: "",
      phone: "",
      mail: "",
    },
  };
  //main render
  render() {
    let { arrSV, dispatch } = this.props;
    // console.log(arrSV);

    const handleDeleteSv = (idProduct) => dispatch(deleteSvAction(idProduct));
    const handleEditSv = (item) => {
      console.log(item);
      this.setState({
        productEdit: item,
      });
    };
    const renderList = (arr) => {
      return arr.map((item) => {
        return (
          <tr key={item}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={() => handleEditSv(item)}
              >
                Sửa
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteSv(item.id)}
              >
                Xóa
              </button>
            </td>
          </tr>
        );
      });
    };

    return (
      <div>
        {/* Form input student information */}
        <ProductForm
          // handleUpdateProduct={this.handleUpdateProduct}
          // productEdit={this.state.productEdit}
          productEdit={this.state.productEdit}
        />

        <table className="table container mt-4">
          <thead>
            <tr className="table-dark">
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Số ĐT</th>
              <th>Email</th>
              <th>Hành động</th>
              {/* <th>Thao tác</th> */}
            </tr>
          </thead>
          <tbody>{renderList(arrSV)}</tbody>
        </table>
      </div>
    );
  }
}
// handleUpdateProduct = (productUpdate) => {
//   console.log("productUpdate: ", productUpdate);

//   let index = this.state.arrProduct.findIndex(
//     (item) => item.id == productUpdate.id
//   );

//   this.state.arrProduct[index] = productUpdate;

//   this.setState({
//     arrProduct: this.state.arrProduct,
//   });
// };

const mapStateTopProps = (state) => {
  return {
    arrSV: state.SinhVienReducer.arrSV,
  };
};
export default connect(mapStateTopProps)(ReactForm);
