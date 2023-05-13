import axios from "axios";
import { useLocation } from "react-router-dom";
import api from "../../webApi/api";
import { useEffect, useState } from "react";

function CustomerProductList() {
    const [customerOrders, setCustomerOrdes] = useState([]);
    const location = useLocation();
    const id = location.state.customerId
    // console.log(id);

    const fetchCustomerByOrders = async () => {
        console.log(id);
        const response = await axios.get(`http://localhost:3000/order/orderdetailbycustomer/${id}`);
        if (response.data.status)
            setCustomerOrdes(response.data.order);
        console.log(response.data.order);
    }

    useEffect(() => {
        fetchCustomerByOrders();
    }, []);

    return <>
        <div className="main-content">
            <section className="section">
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row page-title-header">
                            <div className="col-12">
                                <h2>Customer Orders</h2><hr style={{ color: "#1c45ef", height: "3px" }} />
                            </div>
                        </div>
                        <div class="container">
                            <ul class="responsive-table uline">
                                <li class="table-header de">
                                    <div className="col col-1">OrderId</div>
                                    <div className="col col-2">SellerId</div>
                                    <div className="col col-1">Date</div>
                                    <div className="col col-2">Location</div>
                                    <div className="col col-2">Total</div>
                                    <div className="col col-1">Status</div>
                                    <div className="col col-1">Paid</div>
                                </li>
                                <li class="table-row de">
                                    <div class="col col-1" ></div>
                                    <div class="col col-2" ></div>
                                    <div class="col col-1"></div>
                                    <div class="col col-2"></div>
                                    <div class="col col-2"></div>
                                    <div class="col col-2" ></div>
                                    <div class="col col-1" ></div>
                                    <div class="col col-1"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default CustomerProductList;