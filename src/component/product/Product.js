import { useEffect } from "react";
import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";
import api from "../../webApi/api";
import Footer from "../footer/Footer";
import { Navbar, Spinner } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";

function Product() {
    const [data, setData] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    // const [isLoading,setIsLoading] = useState(true);

    const fetchProduct = async () => {
        const response = await axios.get(api.PRODUCT_LIST);
        setData(response.data.products);
    }

    const handleNext = () => {
        if (page === pageCount) return page;
        setPage(page + 1)
    }


    const handlePrevios = () => {
        if (page === 1) return page;
        setPage(page - 1)
    }

    useEffect(() => {
        fetchProduct();
    }, [page]);

    useEffect(() => {
        const pagedatacount = Math.ceil(data.length / 5);
        setPageCount(pagedatacount);

        if (page) {
            const LIMIT = 5;
            const skip = LIMIT * page // 5 *2 = 10
            const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
            setPageData(dataskip)
        }
    }, [data])

    return <>

        <div className="main-content">
            <section className="section">
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="container">
                            <h1>Products</h1>

                            <div className='table_div mt-3 mb-4'>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="col-1">Sno.</th>
                                            <th className="col-2">Image</th>
                                            <th className="col-2">Title</th>
                                            <th className="col-2">Stock</th>
                                            <th className="col-2">Price</th>
                                            <th className="col-2">Edit</th>
                                            <th className="col-2">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            pageData.length > 0 ?
                                                pageData.map((product, index) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>{index + 1}</td>
                                                                <td><img src={product.thumbnail} style={{ width: 60, height: 60 }} alt="" /></td>
                                                                <td>{product.title.substring(0, 10)}</td>
                                                                <td>{product.stock}</td>
                                                                <td>{product.price}</td>
                                                                <td><button className="btn btn-outline-success"><i class="fa-solid fa-pen-to-square"></i>edit</button></td>
                                                                <td><button className="btn btn-outline-danger"><i class="fa-solid fa-trash"></i>delete</button></td>
                                                            </tr>
                                                        </>
                                                    )
                                                }) : <div className='d-flex justify-content-center mt-4'>
                                                    Loading... <Spinner animation="border" variant='danger' />
                                                </div>
                                        }

                                    </tbody>
                                </Table>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <Pagination >
                                    <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
                                    {
                                        Array(pageCount).fill(null).map((ele, index) => {
                                            return (
                                                <>
                                                    <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                                                </>
                                            )
                                        })
                                    }
                                    <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>
}

export default Product;