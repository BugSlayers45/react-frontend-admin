import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeller } from "../../redux-config/sellerSlice";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";


function Seller() {
    const navigate = useNavigate();
    const { sellers } = useSelector(state => state.sellers);

 
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSeller());
    }, [dispatch]);

    return <>

        <div className="main-content">
            <section className="section">
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row page-title-header">
                            <div className="col-12">
                                <h2>Sellers</h2><hr style={{ color: "#1c45ef", height: "3px" }} />
                            </div>
                        </div>
                        <div class="container">
                            <ul class="responsive-table uline">
                                <li class="table-header de">
                                    <div className="col col-1">Sno</div>
                                    <div className="col col-2">Name</div>
                                    <div className="col col-2">Email</div>
                                    <div className="col col-2">Contact</div>
                                    <div className="col col-3">Address</div>
                                </li>
                                {sellers.map((seller, index) => <li class="table-row de">
                                    <div class="col col-1" >{index + 1}</div>
                                    <div class="col col-2" >{seller.sellerName}</div>
                                    <div class="col col-2">{seller.sellerEmail}</div>
                                    <div class="col col-2">{seller.sellerContact}</div>
                                    <div class="col col-3">{seller.sellerAddress}</div>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default Seller;