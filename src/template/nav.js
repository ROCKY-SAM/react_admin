import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (<nav id="sidebar">
      
                <div id="sidebar-scroll">
 
                    <div className="sidebar-content">
             
                        <div className="content-header content-header-fullrow px-15">
             
                            <div className="content-header-section sidebar-mini-visible-b">
                     
                                <span className="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                                <span className="text-dual-primary-dark">c</span><span className="text-primary">b</span>
                            </span>
         
                            </div>
      
                            <div className="content-header-section text-center align-parent sidebar-mini-hidden">
 
                                <button type="button" className="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                                <i className="fa fa-times text-danger"></i>
                            </button>
       
                                <div className="content-header-item">
                                <a className="link-effect font-w700" href="index.html">
                                    <i className="si si-fire text-primary"></i>
                                    <span className="font-size-xl text-dual-primary-dark">code</span><span className="font-size-xl text-primary">base</span>
                                </a>
                            </div>
               
                            </div>
                      
                        </div>
      
                        <div className="content-side content-side-full content-side-user px-10 align-parent">
                                       <div className="sidebar-mini-visible-b align-v animated fadeIn">
                            <img className="img-avatar img-avatar32" src="assets/img/avatars/avatar15.jpg" alt="" />
                            </div>
          
                            <div className="sidebar-mini-hidden-b text-center">
                                <a className="img-link" href="be_pages_generic_profile.html">
                                    <img className="img-avatar" src="assets/img/avatars/avatar15.jpg" alt=""/>
                                </a>
                                    <ul className="list-inline mt-10">
                                        <li className="list-inline-item">
                                            <a className="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase" href="be_pages_generic_profile.html">J. Smith</a>
                                        </li>
                                        <li className="list-inline-item">
                           
                                        <a className="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle"  >
                                                <i className="si si-drop"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="link-effect text-dual-primary-dark" href="op_auth_signin.html">
                                                <i className="si si-logout"></i>
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                              
                        </div>
         
                        <div className="content-side content-side-full">
                                <ul className="nav-main">
                                    <li>
                                        <a href="be_pages_dashboard.html"><i className="si si-cup"></i><span className="sidebar-mini-hide">Dashboard</span></a>
                                    </li>
                                    <li className="open">
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-badge"></i><span className="sidebar-mini-hide">Page Kits</span></a>
                                        <ul>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#"><span className="sidebar-mini-hide">Dashboards</span></a>
                                                <ul>
                                                    <li>
                                                        <a href="be_pages_dashboard2.html"><span className="sidebar-mini-hide">Dashboard 2</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_dashboard3.html"><span className="sidebar-mini-hide">Dashboard 3</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_dashboard4.html"><span className="sidebar-mini-hide">Dashboard 4</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#"><span className="sidebar-mini-hide">Crypto</span></a>
                                                <ul>
                                                    <li>
                                                        <a href="be_pages_crypto_dashboard.html">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_crypto_buy_sell.html">Buy/Sell</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_crypto_wallets.html">Wallets</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_crypto_settings.html">Settings</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="open">
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#"><span className="sidebar-mini-hide">e-Commerce</span></a>
                                                <ul>
                                                    <li>
                                                        <a className="active" href="be_pages_ecom_dashboard.html">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_ecom_orders.html">Orders</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_ecom_order.html">Order</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_ecom_products.html">Products</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_ecom_product_edit.html">Product Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_ecom_customer.html">Customer</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#"><span className="sidebar-mini-hide">e-Learning</span></a>
                                                <ul>
                                                    <li>
                                                        <a href="be_pages_elearning_courses.html">Courses</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_elearning_course.html">Course</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_elearning_lesson.html">Lesson</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#"><span className="sidebar-mini-hide">Forum</span></a>
                                                <ul>
                                                    <li>
                                                        <a href="be_pages_forum_categories.html">Categories</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_forum_topics.html">Topics</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_pages_forum_discussion.html">Discussion</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#"><span className="sidebar-mini-hide">Boxed Backend</span></a>
                                                <ul>
                                                    <li>
                                                        <a href="bd_dashboard.html">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_search.html">Search</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_simple_1.html">Hero Simple 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_simple_2.html">Hero Simple 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_simple_3.html">Hero Simple 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_simple_4.html">Hero Simple 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_image_1.html">Hero Image 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_image_2.html">Hero Image 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_image_3.html">Hero Image 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_image_4.html">Hero Image 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_video_1.html">Hero Video 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="bd_variations_hero_video_2.html">Hero Video 2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-main-heading"><span className="sidebar-mini-visible">UI</span><span className="sidebar-mini-hidden">User Interface</span></li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-puzzle"></i><span className="sidebar-mini-hide">Blocks</span></a>
                                        <ul>
                                            <li>
                                                <a href="be_blocks.html">Styles</a>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">Widgets</a>
                                                <ul>
                                                    <li>
                                                        <a href="be_blocks_widgets_users.html">Users</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_blocks_widgets_stats.html">Stats</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="be_blocks_tiles.html">Tiles</a>
                                            </li>
                                            <li>
                                                <a href="be_blocks_draggable.html">Draggable</a>
                                            </li>
                                            <li>
                                                <a href="be_blocks_api.html">API</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-energy"></i><span className="sidebar-mini-hide">Elements</span></a>
                                        <ul>
                                            <li>
                                                <a href="be_ui_grid.html">Grid</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_icons.html">Icons</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_typography.html">Typography</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_activity.html">Activity</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_buttons.html">Buttons</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_navigation.html">Navigation</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_tabs.html">Tabs</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_modals_tooltips.html">Modals &amp; Tooltips</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_images.html">Images</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_animations.html">Animations</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_ribbons.html">Ribbons</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_timeline.html">Timeline</a>
                                            </li>
                                            <li>
                                                <a href="be_ui_color_themes.html">Color Themes</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-layers"></i><span className="sidebar-mini-hide">Tables</span></a>
                                        <ul>
                                            <li>
                                                <a href="be_tables_styles.html">Styles</a>
                                            </li>
                                            <li>
                                                <a href="be_tables_responsive.html">Responsive</a>
                                            </li>
                                            <li>
                                                <a href="be_tables_helpers.html">Helpers</a>
                                            </li>
                                            <li>
                                                <a href="be_tables_pricing.html">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="be_tables_datatables.html">DataTables</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-note"></i><span className="sidebar-mini-hide">Forms</span></a>
                                        <ul>
                                            <li>
                                                <a href="be_forms_elements_bootstrap.html">Bootstrap Elements</a>
                                            </li>
                                            <li>
                                                <a href="be_forms_elements_material.html">Material Elements</a>
                                            </li>
                                            <li>
                                                <a href="be_forms_css_inputs.html">CSS Inputs</a>
                                            </li>
                                            <li>
                                                <a href="be_forms_plugins.html">Plugins</a>
                                            </li>
                                            <li>
                                                <a href="be_forms_editors.html">Editors</a>
                                            </li>
                                            <li>
                                                <a href="be_forms_validation.html">Validation</a>
                                            </li>
                                            <li>
                                                <a href="be_forms_wizard.html">Wizard</a>
                                            </li>
                                            <li>
                                                <a href="be_forms_premade.html">Pre-made</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-main-heading"><span className="sidebar-mini-visible">BD</span><span className="sidebar-mini-hidden">Build</span></li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-vector"></i><span className="sidebar-mini-hide">Layout</span></a>
                                        <ul>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">General</a>
                                                <ul>
                                                    <li>
                                                        <a href="be_layout_default.html">Default</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_flipped.html">Flipped</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_native_scrolling.html">Native Scrolling</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">Header</a>
                                                <ul>
                                                    <li>
                                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#">Static</a>
                                                        <ul>
                                                            <li>
                                                                <a href="be_layout_header_modern.html">Modern</a>
                                                            </li>
                                                            <li>
                                                                <a href="be_layout_header_classNameic.html">classNameic</a>
                                                            </li>
                                                            <li>
                                                                <a href="be_layout_header_classNameic_inverse.html">classNameic Inverse</a>
                                                            </li>
                                                            <li>
                                                                <a href="be_layout_header_glass.html">Glass</a>
                                                            </li>
                                                            <li>
                                                                <a href="be_layout_header_glass_inverse.html">Glass Inverse</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#">Fixed</a>
                                                        <ul>
                                                            <li>
                                                                <a href="be_layout_header_fixed_modern.html">Modern</a>
                                                            </li>
                                                            <li>
                                                                <a href="be_layout_header_fixed_classNameic.html">classNameic</a>
                                                            </li>
                                                            <li>
                                                                <a href="be_layout_header_fixed_classNameic_inverse.html">classNameic Inverse</a>
                                                            </li>
                                                            <li>
                                                                <a href="be_layout_header_fixed_glass.html">Glass</a>
                                                            </li>
                                                            <li>
                                                                <a href="be_layout_header_fixed_glass_inverse.html">Glass Inverse</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">Sidebar</a>
                                                <ul>
                                                    <li>
                                                        <a href="be_layout_sidebar_inverse.html">Inverse</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_sidebar_hidden.html">Hidden</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_sidebar_mini.html">Mini</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">Side Overlay</a>
                                                <ul>
                                                    <li>
                                                        <a href="be_layout_side_overlay_visible.html">Visible</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_side_overlay_hoverable.html">Hoverable</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">Main Content</a>
                                                <ul>
                                                    <li>
                                                        <a href="be_layout_content_boxed.html">Boxed</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_content_narrow.html">Narrow</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_content_full_width.html">Full Width</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">Hero</a>
                                                <ul>
                                                    <li>
                                                        <a href="be_layout_hero_color.html">Color</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_hero_image.html">Image</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_layout_hero_video.html">Video</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="be_layout_api.html">API</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-trophy"></i><span className="sidebar-mini-hide">Components</span></a>
                                        <ul>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#"><span className="sidebar-mini-hide">Main Menu</span></a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Link 1-1</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Link 1-2</a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#">Sub Level 2</a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Link 2-1</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Link 2-2</a>
                                                            </li>
                                                            <li>
                                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">Sub Level 3</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="#">Link 3-1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Link 3-2</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="nav-submenu" data-toggle="nav-submenu" href="#">Chat</a>
                                                <ul>
                                                    <li>
                                                        <a href="be_comp_chat_multiple.html">Multiple</a>
                                                    </li>
                                                    <li>
                                                        <a href="be_comp_chat_single.html">Single</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="be_comp_charts.html">Charts</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_gallery.html">Gallery</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_sliders.html">Sliders</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_scrolling.html">Scrolling</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_rating.html">Rating</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_filtering.html">Filtering</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_appear.html">Appear</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_countto.html">CountTo</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_calendar.html">Calendar</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_image_cropper.html">Image Cropper</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_maps_google.html">Google Maps</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_maps_vector.html">Vector Maps</a>
                                            </li>
                                            <li>
                                                <a href="be_comp_syntax_highlighting.html">Syntax Highlighting</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-main-heading"><span className="sidebar-mini-visible">PG</span><span className="sidebar-mini-hidden">Pages</span></li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-globe-alt"></i><span className="sidebar-mini-hide">Generic</span></a>
                                        <ul>
                                            <li>
                                                <a href="be_pages_generic_blank.html">Blank</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_blank_block.html">Blank (Block)</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_blank_breadcrumb.html">Blank (Breadcrumb)</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_scrumboard.html">Scrum Board</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_search.html">Search</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_profile.html">Profile</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_inbox.html">Inbox</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_invoice.html">Invoice</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_faq.html">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_blog.html">Blog</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_story.html">Story</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_project_list.html">Project List</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_project.html">Project</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_upgrade_plan.html">Upgrade Plan</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_team.html">Team</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_contact.html">Contact</a>
                                            </li>
                                            <li>
                                                <a href="be_pages_generic_todo.html">Todo</a>
                                            </li>
                                            <li>
                                                <a href="op_coming_soon.html">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a href="op_maintenance.html">Maintenance</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-lock"></i><span className="sidebar-mini-hide">Authentication</span></a>
                                        <ul>
                                            <li>
                                                <a href="be_pages_auth_all.html">All</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_signin.html">Sign In</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_signin2.html">Sign In 2</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_signin3.html">Sign In 3</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_signup.html">Sign Up</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_signup2.html">Sign Up 2</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_signup3.html">Sign Up 3</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_lock.html">Lock Screen</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_lock2.html">Lock Screen 2</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_lock3.html">Lock Screen 3</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_reminder.html">Pass Reminder</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_reminder2.html">Pass Reminder 2</a>
                                            </li>
                                            <li>
                                                <a href="op_auth_reminder3.html">Pass Reminder 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-flag"></i><span className="sidebar-mini-hide">Error</span></a>
                                        <ul>
                                            <li>
                                                <a href="be_pages_error_all.html">All</a>
                                            </li>
                                            <li>
                                                <a href="op_error_400.html">400</a>
                                            </li>
                                            <li>
                                                <a href="op_error_401.html">401</a>
                                            </li>
                                            <li>
                                                <a href="op_error_403.html">403</a>
                                            </li>
                                            <li>
                                                <a href="op_error_404.html">404</a>
                                            </li>
                                            <li>
                                                <a href="op_error_500.html">500</a>
                                            </li>
                                            <li>
                                                <a href="op_error_503.html">503</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                           
                    </div>
                       
                </div>
                     
            </nav>
             
        )
    }
}