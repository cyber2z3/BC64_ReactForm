import React, { Component } from "react";
import ProductForm from "../page/ReactForm/ProductForm";
import ReactForm from "../page/ReactForm/ReactForm";

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <div className="py-2 bg-dark text-light">
          <h2 className="mx-5">Thông tin sinh viên </h2>
        </div>

        <ReactForm />
      </div>
    );
  }
}
