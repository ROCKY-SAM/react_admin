import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
 
            <aside id="side-overlay">
              
                <div id="side-overlay-scroll">
                     
                    <div className="content-header content-header-fullrow">
                        <div className="content-header-section align-parent">
                           
                            <button type="button" className="btn btn-circle btn-dual-secondary align-v-r" data-toggle="layout" data-action="side_overlay_close">
                                <i className="fa fa-times text-danger"></i>
                            </button>
                          
                            <div className="content-header-item">
                                <a className="img-link mr-5" href="be_pages_generic_profile.html">
                                    <img className="img-avatar img-avatar32" src="assets/img/avatars/avatar15.jpg" alt=""/>
                                </a>
                                <a className="align-middle link-effect text-primary-dark font-w600" href="be_pages_generic_profile.html">John Smith</a>
                            </div>
                          
                        </div>
                    </div>
       
                    <div className="content-side">
                     
                        <div className="block pull-t pull-r-l">
                            <div className="block-content block-content-full block-content-sm bg-body-light">

                            </div>
                        </div>
           
                        <div className="block pull-r-l">
                            <div className="block-content block-content-full block-content-sm bg-body-light">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="font-size-sm font-w600 text-uppercase text-muted">Clients</div>
                                        <div className="font-size-h4">460</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="font-size-sm font-w600 text-uppercase text-muted">Sales</div>
                                        <div className="font-size-h4">728</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="font-size-sm font-w600 text-uppercase text-muted">Earnings</div>
                                        <div className="font-size-h4">$7,860</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="block pull-r-l">
                            <div className="block-header bg-body-light">
                                <h3 className="block-title"><i className="fa fa-fw fa-users font-size-default mr-5"></i>Friends</h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                        <i className="si si-refresh"></i>
                                    </button>
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                                </div>
                            </div>
                            <div className="block-content">
                                <ul className="nav-users push">
                                    <li>
                                        <a href="be_pages_generic_profile.html">
                                            <img className="img-avatar" src="assets/img/avatars/avatar8.jpg" alt=""/>
                                            <i className="fa fa-circle text-success"></i> Marie Duncan
                                            <div className="font-w400 font-size-xs text-muted">Photographer</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="be_pages_generic_profile.html">
                                            <img className="img-avatar" src="assets/img/avatars/avatar15.jpg" alt=""/>
                                            <i className="fa fa-circle text-success"></i> David Fuller
                                            <div className="font-w400 font-size-xs text-muted">Web Designer</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="be_pages_generic_profile.html">
                                            <img className="img-avatar" src="assets/img/avatars/avatar4.jpg" alt=""/>
                                            <i className="fa fa-circle text-warning"></i> Helen Jacobs
                                            <div className="font-w400 font-size-xs text-muted">UI Designer</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="be_pages_generic_profile.html">
                                            <img className="img-avatar" src="assets/img/avatars/avatar13.jpg" alt=""/>
                                            <i className="fa fa-circle text-danger"></i> Jack Greene
                                            <div className="font-w400 font-size-xs text-muted">Copywriter</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="block pull-r-l">
                            <div className="block-header bg-body-light">
                                <h3 className="block-title">
                                    <i className="fa fa-fw fa-clock-o font-size-default mr-5"></i>Activity
                                </h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                        <i className="si si-refresh"></i>
                                    </button>
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                                </div>
                            </div>
                            <div className="block-content">
                                <ul className="list list-activity">
                                    <li>
                                        <i className="si si-wallet text-success"></i>
                                        <div className="font-w600">+$29 New sale</div>
                                        <div>
                                            <a >Admin Template</a>
                                        </div>
                                        <div className="font-size-xs text-muted">5 min ago</div>
                                    </li>
                                    <li>
                                        <i className="si si-close text-danger"></i>
                                        <div className="font-w600">Project removed</div>
                                        <div>
                                            <a >Best Icon Set</a>
                                        </div>
                                        <div className="font-size-xs text-muted">26 min ago</div>
                                    </li>
                                    <li>
                                        <i className="si si-pencil text-info"></i>
                                        <div className="font-w600">You edited the file</div>
                                        <div>
                                            <a >
                                                <i className="fa fa-file-text-o"></i> Docs.doc
                                            </a>
                                        </div>
                                        <div className="font-size-xs text-muted">3 hours ago</div>
                                    </li>
                                    <li>
                                        <i className="si si-plus text-success"></i>
                                        <div className="font-w600">New user</div>
                                        <div>
                                            <a >StudioWeb - View Profile</a>
                                        </div>
                                        <div className="font-size-xs text-muted">5 hours ago</div>
                                    </li>
                                    <li>
                                        <i className="si si-wrench text-warning"></i>
                                        <div className="font-w600">App v5.5 is available</div>
                                        <div>
                                            <a >Update now</a>
                                        </div>
                                        <div className="font-size-xs text-muted">8 hours ago</div>
                                    </li>
                                    <li>
                                        <i className="si si-user-follow text-pulse"></i>
                                        <div className="font-w600">+1 Friend Request</div>
                                        <div>
                                            <a >Accept</a>
                                        </div>
                                        <div className="font-size-xs text-muted">1 day ago</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="block pull-r-l">
                            <div className="block-header bg-body-light">
                                <h3 className="block-title">
                                    <i className="fa fa-fw fa-pencil font-size-default mr-5"></i>Profile
                                </h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                                </div>
                            </div>
                            <div className="block-content">

                            </div>
                        </div>
                        
                        <div className="block pull-r-l">
                            <div className="block-header bg-body-light">
                                <h3 className="block-title">
                                    <i className="fa fa-fw fa-wrench font-size-default mr-5"></i>Settings
                                </h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                                </div>
                            </div>
                            <div className="block-content">
                                <div className="row gutters-tiny">
                                    <div className="col-6">
                                        <div className="custom-control custom-checkbox mb-5">
                                            <input type="checkbox" className="custom-control-input" id="side-overlay-settings-status" name="side-overlay-settings-status" value="1" />
                                            <label className="custom-control-label" htmlFor="side-overlay-settings-status">Online Status</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-5">
                                            <input type="checkbox" className="custom-control-input" id="side-overlay-settings-public-profile" name="side-overlay-settings-public-profile" value="1"/>
                                            <label className="custom-control-label" htmlFor="side-overlay-settings-public-profile">Public Profile</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-5">
                                            <input type="checkbox" className="custom-control-input" id="side-overlay-settings-notifications" name="side-overlay-settings-notifications" value="1" />
                                            <label className="custom-control-label" htmlFor="side-overlay-settings-notifications">Notifications</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="custom-control custom-checkbox mb-5">
                                            <input type="checkbox" className="custom-control-input" id="side-overlay-settings-updates" name="side-overlay-settings-updates" value="1"/>
                                            <label className="custom-control-label" htmlFor="side-overlay-settings-updates">Auto updates</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-5">
                                            <input type="checkbox" className="custom-control-input" id="side-overlay-settings-api-access" name="side-overlay-settings-api-access" value="1" />
                                            <label className="custom-control-label" htmlFor="side-overlay-settings-api-access">API Access</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-5">
                                            <input type="checkbox" className="custom-control-input" id="side-overlay-settings-limit-requests" name="side-overlay-settings-limit-requests" value="1"/>
                                            <label className="custom-control-label" htmlFor="side-overlay-settings-limit-requests">API Requests</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
       
                </div>
            
            </aside>
                                                                
        
                                                            )
                                                        }
}