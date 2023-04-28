
function Order() {
    return <>
        <div className="main-content">
            <section className="section">
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row page-title-header">
                            <div className="col-12">
                                <h2>Orders</h2><hr style={{ color: "#1c45ef", height: "3px" }} />
                            </div>
                        </div>
                        <div class="container">
                            <ul class="responsive-table uline">
                                <li class="table-header de">
                                    <div className="col col-1">OrderId</div>
                                    <div className="col col-2">SellerId</div>
                                    <div className="col col-1">Date</div>
                                    <div className="col col-2">Customer</div>
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
export default Order;