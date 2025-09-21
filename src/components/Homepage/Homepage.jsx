
import '../../components/orderList/cssStyles/mainlayout.css';
import logo from '../../assets/images/logo.png';
import { PiChartPieSliceDuotone, PiChatsTeardrop, PiIdentificationCard, PiNotebook, PiUsersThree } from "react-icons/pi";
import { PiShoppingBagOpen } from "react-icons/pi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BsFolder } from "react-icons/bs";
import { PiBookOpen } from "react-icons/pi";
import { PiIdentificationBadge } from "react-icons/pi";
import ChartCard from '../orderList/Chartcard';
import IconButton from '../orderList/Dropdowns';
import Header from '../orderList/Header';
import Rightbar from '../orderList/Rightlayout';
import TextBox from '../orderList/Textfield';
import Ecommerce from '../eCommerce/Ecommerce';
import TableContainer from '../orderTable/TableContainer';
export default function MainLayout() {
    return (
        <div className="container-fluid bg-dark text-white min-vh-100 d-flex ">
            {/* Outer container - max width 1440px */}
            <div className="row flex-grow-1 w-100" style={{ maxWidth: "1440px" }}>

            {/* sidebar */}
                <aside
                    className="sidebar-container">

                    {/* sidebar */}
                    <div className="sidebar-logo">
                        <div className="sidebar-inner-item">
                            <div className="sidebar-icon">
                                <img src={logo} alt="Logo" className='logo-img' />

                            </div>
                            <div className="text-box">
                                <span className="text-style">ByeWind</span>

                            </div>
                        </div>
                    </div>

                    {/* Sidebar Frame 1 */}
                    <div className="sidebar-frame-1">
                        <div className="group-1">
                            <div className="sub-group-1">
                                <div className="text-box-vertical">
                                    <span className='text-favorites'>Favorites</span>
                                </div>
                            </div>
                            <div className="subgroup-item">
                                <div className="text-box-vertical-2">
                                    <span className='subgroup-item-text'>Recently</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 py-1 rounded" style={{ width: 180, height: 28, opacity: 1 }}>
                            <div className="d-flex align-items-center gap-1 rounded" style={{ width: "164px", height: "20px", borderRadius: "8px", opacity: 1, }}>
                                <div className="position-relative" style={{ width: "16px", height: "16px" }}>
                                    <div className="rounded-circle" style={{ width: "6px", height: "6px", background: "var(--black-20, #FFFFFF33)", opacity: 1, position: "absolute", top: "5px", left: "5px" }}></div>
                                </div>
                                <span className="fw-normal" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: "20px" }}>
                                    Overview
                                </span>


                            </div>

                        </div>
                        <div className="d-flex align-items-center gap-2 px-2 py-1 rounded" style={{ width: 180, height: 28, opacity: 1 }}>
                            <div className="d-flex align-items-center gap-1 rounded" style={{ width: "164px", height: "20px", borderRadius: "8px", opacity: 1, }}>
                                <div className="position-relative" style={{ width: "16px", height: "16px" }}>
                                    <div className="rounded-circle" style={{ width: "6px", height: "6px", background: "var(--black-20, #FFFFFF33)", opacity: 1, position: "absolute", top: "5px", left: "5px" }}></div>
                                </div>
                                <span className="fw-normal" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: "20px" }}>
                                    Projects
                                </span>


                            </div>

                        </div>


                    </div>


                    {/*  sidebar Frame 2 */}
                    <div className="Frame-2-container">
                        <div className='box-container'>
                            <span className="inner-text">
                                Dashboards
                            </span>
                        </div>
                        <div className="d-flex align-items-center rounded-2 gap-1 px-2" style={{ width: "180px", height: "28px", backgroundColor: "#FFFFFF1A" }}>
                            <div className="d-flex justify-content-center align-items-center rounded-2" style={{ width: "24px", height: "20px", borderRadius: "8px", opacity: 1 }}>
                                <div className="default-vector-icon">
                                    <div className="selected">
                                        <div className="line"></div>
                                    </div>
                                </div>
                                <div className="element">
                                    <div className="vector-icon-layout">
                                        <div className="vector-icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center  rounded-2" style={{ width: "144px", height: "20px", borderRadius: "8px", gap: "4px", opacity: 1 }}>
                                <div className="chartpieslice">
                                    <PiChartPieSliceDuotone style={{ marginBottom: '10px' }} size={20} />

                                </div>
                                <div className="icon-text">
                                    <span style={{ marginBottom: '10px' ,fontSize:"14px"}}>Default</span>
                                </div>
                            </div>



                        </div>
                        <IconButton
                            leftIcon={MdKeyboardArrowRight}
                            rightIcon={PiShoppingBagOpen}
                            text="eCommerce"
                            onClick={() => alert("Clicked!")}
                        />

                        <IconButton
                            leftIcon={MdKeyboardArrowRight}
                            rightIcon={BsFolder}
                            text="Projects"
                            onClick={() => alert("Clicked!")}
                        />

                        <IconButton
                            leftIcon={MdKeyboardArrowRight}
                            rightIcon={PiBookOpen}
                            text="OnlineCourses"
                            onClick={() => alert("Clicked!")}
                        />



                    </div>


                    {/* sidebar Frame 3 */}

                    <div className="Frame-3-container">
                        <div className='box-container'>
                            <span className="inner-text">
                                Pages
                            </span>
                        </div>
                        
                        <IconButton
                            leftIcon={MdKeyboardArrowDown}
                            rightIcon={PiIdentificationBadge}
                            text="UserProfile"
                            onClick={() => alert("Clicked!")}
                        />
                        <div className="d-flex flex-column gap-2 " >
                            <ChartCard label="Overview" />
                            <ChartCard label="Projects" />
                            <ChartCard label="Campaigns" />
                            <ChartCard label="Documents" />
                            <ChartCard label="Followers" />
                        </div>
                        <IconButton
                            leftIcon={MdKeyboardArrowRight}
                            rightIcon={PiIdentificationCard}
                            text="Account"
                            onClick={() => alert("Clicked!")}
                        />
                        <IconButton
                            leftIcon={MdKeyboardArrowRight}
                            rightIcon={PiUsersThree}
                            text="Corporate"
                            onClick={() => alert("Clicked!")}
                        />
                        <IconButton
                            leftIcon={MdKeyboardArrowRight}
                            rightIcon={PiNotebook}
                            text="Blog"
                            onClick={() => alert("Clicked!")}
                        />
                        <IconButton
                            leftIcon={MdKeyboardArrowRight}
                            rightIcon={PiChatsTeardrop}
                            text="Social"
                            onClick={() => alert("Clicked!")}
                        />


                    </div>




                </aside>

                {/* Header */}
                <Header/>
                <TextBox/>
                <Ecommerce/> 
                {/* <TableContainer/> */}
                <Rightbar/>

            </div>
        </div>
    );
}
