import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSeller } from "../../redux-config/sellerSlice";
import api from "../../webApi/api";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/sidebar";

function PendingSeller() {
    const { sellers } = useSelector(state => state.sellers);
    const [seller, setSeller] = useState([]);

    const activeSeller = async (sellerId, index) => {
        try {
            if (window.confirm('Are you sure ?')) {
                let response = await axios.put(`http://localhost:3000/admin/${sellerId}`);
                window.alert(response.data.status);
                if (response.data.status) {
                    setSeller([...sellers, response.data.seller]);

                }
            }
        }
        catch (err) {
            console.log(err);
            window.alert("Oops! something wrong...");
        }
    }

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSeller());

    })
    return <>

        <div className="main-content">
            <section className="section">
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row page-title-header">
                            <div className="col-12">
                                <h2>Pending Seller</h2><hr style={{ color: "#1c45ef", height: "3px" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Sno.</th>
                                            <th>SellerName</th>
                                            <th>SellerEmail</th>
                                            <th>SellerContact</th>
                                            <th>Deactive/Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sellers.filter((list) => list.status == "Inactive").map((seller, index) => <tr>
                                            <td>{index + 1}</td>
                                            <td>{seller.sellerName}</td>
                                            <td>{seller.sellerEmail}</td>
                                            <td>{seller.sellerContact}</td>
                                            <td><button onClick={() => activeSeller(seller._id, index)} className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>




    </>
}

export default PendingSeller;