import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (

<main id="main-container">

    <div className="bg-image" >
        <div className="bg-black-op-75">
            <div className="content content-top content-full text-center">
                <div className="py-20">
                    <h1 className="h2 font-w700 text-white mb-10">e-Commerce Dashboard</h1>
                    <h2 className="h4 font-w400 text-white-op mb-0">Welcome Admin, you have <a className="text-primary-light link-effect" href="be_pages_ecom_orders.html">12 pending orders</a>.</h2>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-body-light border-b">
        <div className="content py-5 text-center">
            <nav className="breadcrumb bg-body-light mb-0">
                <a className="breadcrumb-item" href="be_pages_ecom_dashboard.html">e-Commerce</a>
                <span className="breadcrumb-item active">Dashboard</span>
            </nav>
        </div>
    </div>

    <div className="content">

        <div className="content-heading">
            <div className="dropdown float-right">
                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-dashboard-stats-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Today
                            </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-dashboard-stats-drop">
                    <a className="dropdown-item active" >
                        <i className="fa fa-fw fa-calendar mr-5"></i>Today
                                </a>
                    <a className="dropdown-item" >
                        <i className="fa fa-fw fa-calendar mr-5"></i>This Week
                                </a>
                    <a className="dropdown-item" >
                        <i className="fa fa-fw fa-calendar mr-5"></i>This Month
                                </a>
                    <a className="dropdown-item" >
                        <i className="fa fa-fw fa-calendar mr-5"></i>This Year
                                </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" >
                        <i className="fa fa-fw fa-circle-o mr-5"></i>All Time
                                </a>
                </div>
            </div>
            Statistics <small className="d-none d-sm-inline">Awesome!</small>
        </div>
        <div className="row gutters-tiny">

            <div className="col-md-6 col-xl-3">
                <a className="block block-rounded block-transparent bg-gd-elegance" >
                    <div className="block-content block-content-full block-sticky-options">
                        <div className="block-options">
                            <div className="block-options-item">
                                <i className="fa fa-area-chart text-white-op"></i>
                            </div>
                        </div>
                        <div className="py-20 text-center">
                            <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to="2420" data-before="$">0</div>
                            <div className="font-size-sm font-w600 text-uppercase text-white-op">Earnings</div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-md-6 col-xl-3">
                <a className="block block-rounded block-transparent bg-gd-dusk" href="be_pages_ecom_orders.html">
                    <div className="block-content block-content-full block-sticky-options">
                        <div className="block-options">
                            <div className="block-options-item">
                                <i className="fa fa-archive text-white-op"></i>
                            </div>
                        </div>
                        <div className="py-20 text-center">
                            <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to="35">0</div>
                            <div className="font-size-sm font-w600 text-uppercase text-white-op">Orders</div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-md-6 col-xl-3">
                <a className="block block-rounded block-transparent bg-gd-sea" >
                    <div className="block-content block-content-full block-sticky-options">
                        <div className="block-options">
                            <div className="block-options-item">
                                <i className="fa fa-users text-white-op"></i>
                            </div>
                        </div>
                        <div className="py-20 text-center">
                            <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to="15">0</div>
                            <div className="font-size-sm font-w600 text-uppercase text-white-op">New Customers</div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-md-6 col-xl-3">
                <a className="block block-rounded block-transparent bg-gd-aqua" >
                    <div className="block-content block-content-full block-sticky-options">
                        <div className="block-options">
                            <div className="block-options-item">
                                <i className="fa fa-cart-arrow-down text-white-op"></i>
                            </div>
                        </div>
                        <div className="py-20 text-center">
                            <div className="font-size-h2 font-w700 mb-0 text-white">5.6%</div>
                            <div className="font-size-sm font-w600 text-uppercase text-white-op">Conversion</div>
                        </div>
                    </div>
                </a>
            </div>

        </div>

        <div className="content-heading">
            <div className="dropdown float-right">
                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-orders-overview-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    This Week
                            </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-orders-overview-drop">
                    <a className="dropdown-item active" >
                        <i className="fa fa-fw fa-calendar mr-5"></i>This Week
                                </a>
                    <a className="dropdown-item" >
                        <i className="fa fa-fw fa-calendar mr-5"></i>This Month
                                </a>
                    <a className="dropdown-item" >
                        <i className="fa fa-fw fa-calendar mr-5"></i>This Year
                                </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" >
                        <i className="fa fa-fw fa-circle-o mr-5"></i>All Time
                                </a>
                </div>
            </div>
            Orders <small className="d-none d-sm-inline">Overview</small>
        </div>

        <div className="row gutters-tiny">

            <div className="col-md-6">
                <div className="block block-rounded block-mode-loading-refresh">
                    <div className="block-header">
                        <h3 className="block-title">
                            Earnings
                                    </h3>
                        <div className="block-options">
                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                <i className="si si-refresh"></i>
                            </button>
                            <button type="button" className="btn-block-option">
                                <i className="si si-wrench"></i>
                            </button>
                        </div>
                    </div>
                    <div className="block-content block-content-full bg-body-light text-center">
                        <div className="row gutters-tiny">
                            <div className="col-4">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">All</div>
                                <div className="font-size-h3 font-w600">$9,587</div>
                            </div>
                            <div className="col-4">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Profit</div>
                                <div className="font-size-h3 font-w600 text-success">$8,087</div>
                            </div>
                            <div className="col-4">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Expenses</div>
                                <div className="font-size-h3 font-w600 text-danger">$1,500</div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="pull-all">

                            <canvas className="js-chartjs-ecom-dashboard-earnings"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="block block-rounded block-mode-loading-refresh">
                    <div className="block-header">
                        <h3 className="block-title">
                            Volume
                                    </h3>
                        <div className="block-options">
                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                <i className="si si-refresh"></i>
                            </button>
                            <button type="button" className="btn-block-option">
                                <i className="si si-wrench"></i>
                            </button>
                        </div>
                    </div>
                    <div className="block-content block-content-full bg-body-light text-center">
                        <div className="row gutters-tiny">
                            <div className="col-4">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">All</div>
                                <div className="font-size-h3 font-w600">183</div>
                            </div>
                            <div className="col-4">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Completed</div>
                                <div className="font-size-h3 font-w600 text-success">175</div>
                            </div>
                            <div className="col-4">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Canceled</div>
                                <div className="font-size-h3 font-w600 text-danger">8</div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="pull-all">

                            <canvas className="js-chartjs-ecom-dashboard-orders"></canvas>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="row gutters-tiny">

            <div className="col-xl-6">
                <h2 className="content-heading">Latest Orders</h2>
                <div className="block block-rounded">
                    <div className="block-content">
                        <table className="table table-borderless table-striped">
                            <thead>
                                <tr>
                                    <th  >ID</th>
                                    <th>Status</th>
                                    <th className="d-none d-sm-table-cell">Customer</th>
                                    <th className="text-right">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1851</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-info">Processing</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Jose Mills</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$443</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1850</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-info">Processing</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Andrea Gardner</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$130</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1849</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-danger">Canceled</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Danielle Jones</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$132</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1848</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-info">Processing</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Jack Greene</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$534</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1847</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-info">Processing</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Laura Carr</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$968</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1846</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-success">Completed</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Laura Carr</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$620</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1845</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-info">Processing</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Barbara Scott</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$925</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1844</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-warning">Pending</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Lisa Jenkins</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$166</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1843</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-danger">Canceled</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Jack Estrada</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$678</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="be_pages_ecom_order.html">ORD.1842</a>
                                    </td>
                                    <td>
                                        <span className="badge badge-info">Processing</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">Betty Kelley</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">$745</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="col-xl-6">
                <h2 className="content-heading">Top Products</h2>
                <div className="block block-rounded">
                    <div className="block-content">
                        <table className="table table-borderless table-striped">
                            <thead>
                                <tr>
                                    <th className="d-none d-sm-table-cell" >ID</th>
                                    <th>Product</th>
                                    <th className="text-center">Orders</th>
                                    <th className="d-none d-sm-table-cell text-center">Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.258</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Dark Souls III</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">912</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.198</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Bioshock Collection</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">895</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.852</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Alien Isolation</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">820</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.741</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Bloodborne</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">793</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.985</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Forza Motorsport 7</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">782</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.056</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Fifa 18</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">776</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.036</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Gears of War 4</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">680</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.682</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Minecraft</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">670</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.478</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Dishonored 2</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">640</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="d-none d-sm-table-cell">
                                        <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.952</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Gran Turismo Sport</a>
                                    </td>
                                    <td className="text-center">
                                        <a className="text-gray-dark" href="be_pages_ecom_orders.html">630</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell text-center">
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    </div>

</main>

        )
    }
}