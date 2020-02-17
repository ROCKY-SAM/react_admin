import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (

<header id="page-header">
   
                <div className="content-header">
      
                    <div className="content-header-section">
            
                        <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="sidebar_toggle">
                <i className="fa fa-navicon"></i>
            </button>
           

                        
          
                        <div className="btn-group" role="group">
                <button type="button" className="btn btn-circle btn-dual-secondary" id="page-header-options-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-wrench"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="page-header-options-dropdown">
                    <h6 className="dropdown-header">Header</h6>
                    <button type="button" className="btn btn-sm btn-block btn-alt-secondary" data-toggle="layout" data-action="header_fixed_toggle">Fixed Mode</button>
                    <button type="button" className="btn btn-sm btn-block btn-alt-secondary d-none d-lg-block mb-10" data-toggle="layout" data-action="header_style_classNameic">classNameic Style</button>
                    <div className="d-none d-xl-block">
                        <h6 className="dropdown-header">Main Content</h6>
                        <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="content_layout_toggle">Toggle Layout</button>
                    </div>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="be_layout_api.html">
                        <i className="si si-chemistry"></i> All Options (API)
                                </a>
                </div>
            </div>
     
                        <div className="btn-group" role="group">
                <button type="button" className="btn btn-circle btn-dual-secondary" id="page-header-themes-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-paint-brush"></i>
                </button>
                <div className="dropdown-menu min-width-150" aria-labelledby="page-header-themes-dropdown">
                    <h6 className="dropdown-header text-center">Color Themes</h6>
                    <div className="row no-gutters text-center mb-5">
                        <div className="col-4 mb-5">
                            <a className="text-default" data-toggle="theme" data-theme="default" >
                                <i className="fa fa-2x fa-circle"></i>
                            </a>
                        </div>
                        <div className="col-4 mb-5">
                            <a className="text-elegance" data-toggle="theme" data-theme="assets/css/themes/elegance.min.css" >
                                <i className="fa fa-2x fa-circle"></i>
                            </a>
                        </div>
                        <div className="col-4 mb-5">
                            <a className="text-pulse" data-toggle="theme" data-theme="assets/css/themes/pulse.min.css" >
                                <i className="fa fa-2x fa-circle"></i>
                            </a>
                        </div>
                        <div className="col-4 mb-5">
                            <a className="text-flat" data-toggle="theme" data-theme="assets/css/themes/flat.min.css" >
                                <i className="fa fa-2x fa-circle"></i>
                            </a>
                        </div>
                        <div className="col-4 mb-5">
                            <a className="text-corporate" data-toggle="theme" data-theme="assets/css/themes/corporate.min.css" >
                                <i className="fa fa-2x fa-circle"></i>
                            </a>
                        </div>
                        <div className="col-4 mb-5">
                            <a className="text-earth" data-toggle="theme" data-theme="assets/css/themes/earth.min.css" >
                                <i className="fa fa-2x fa-circle"></i>
                            </a>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="sidebar_style_inverse_toggle">Sidebar Style</button>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="be_ui_color_themes.html">
                        <i className="fa fa-paint-brush"></i> All Color Themes
                                </a>
                </div>
            </div>
  
                    </div>
 
                     <div className="content-header-section">
                         <div className="btn-group" role="group">
                <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    J. Smith<i className="fa fa-angle-down ml-5"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right min-width-150" aria-labelledby="page-header-user-dropdown">
                    <a className="dropdown-item" href="be_pages_generic_profile.html">
                        <i className="si si-user mr-5"></i> Profile
                                </a>
                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.html">
                        <span><i className="si si-envelope-open mr-5"></i> Inbox</span>
                        <span className="badge badge-primary">3</span>
                    </a>
                    <a className="dropdown-item" href="be_pages_generic_invoice.html">
                        <i className="si si-note mr-5"></i> Invoices
                                </a>
                    <div className="dropdown-divider"></div>

                   
                                <a className="dropdown-item"  data-toggle="layout" data-action="side_overlay_toggle">
                        <i className="si si-wrench mr-5"></i> Settings
                                </a> 
                                <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="op_auth_signin.html">
                        <i className="si si-logout mr-5"></i> Sign Out
                                </a>
                </div>
            </div>
         
                        <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="side_overlay_toggle">
                <i className="fa fa-tasks"></i>
            </button>
      
                    </div>
      
                </div>
 
                <div id="page-header-search" className="overlay-header">
        <div className="content-header content-header-fullrow">
 
                    </div>
        </div>
   
                <div id="page-header-loader" className="overlay-header bg-primary">
            <div className="content-header content-header-fullrow text-center">
                <div className="content-header-item">
                    <i className="fa fa-sun-o fa-spin text-white"></i>
                </div>
            </div>
        </div>
     
            </header>

    )
}
}