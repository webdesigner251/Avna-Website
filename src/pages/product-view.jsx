import React, { useState } from "react";
import SmallBanner from '../components/smallBanner';
import { ReactComponent as ExploreArrow } from '../assets/icons/double-arrow.svg'


const ProductView = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('tablets');

    // Function to change active tab
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <main className="product-view-page">
            <SmallBanner Heading={'Pharmaceutical'} />

            <section className="product-tab-wrapper py-100 pb-0">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-lg-4">
                            <div className="left-tab" >
                                <h3 className={`link-wrapper ${activeTab === 'tablets' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('tablets')}>
                                    Tablets & Capsules  <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'injection' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('injection')}>
                                    Injection <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'Syrup' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('Syrup')}>
                                    Syrup <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'Ointments' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('Ointments')}>
                                    Ointments <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'Drops' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('Drops')}>
                                    Drops <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="right-tab" data-aos="fade-in" data-aos-duration="3000">
                                {activeTab === 'tablets' && (
                                    <div className="product-content">
                                        <h4 className="product-heading-small">Tablets & Capsules List</h4>
                                        <table className="table table-bordered pro-table w-100">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Product name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Tablets 1</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tablets 2</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Tablets 3</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Tablets 4</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Tablets 5</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Tablets 6</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Tablets 7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Tablets 8</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Tablets 9</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Tablets 10</td>
                                                </tr>

                                                <tr>
                                                    <td>11</td>
                                                    <td> Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Tablets 1</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tablets 2</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Tablets 3</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Tablets 4</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Tablets 5</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Tablets 6</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Tablets 7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Tablets 8</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Tablets 9</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Tablets 10</td>
                                                </tr>

                                                <tr>
                                                    <td>11</td>
                                                    <td> Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11Tablets 11</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {activeTab === 'injection' && (
                                    <div className="product-content">
                                        <h4 className="product-heading-small">Injection List</h4>
                                        <table className="table table-bordered pro-table w-100">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Product name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Tablets 1</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tablets 2</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Tablets 3</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Tablets 4</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Tablets 5</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Tablets 6</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Tablets 7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Tablets 8</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Tablets 9</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Tablets 10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {activeTab === 'Syrup' && (
                                    <div className="product-content">
                                        <h4 className="product-heading-small">Syrup List</h4>
                                        <table className="table table-bordered pro-table w-100">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Product name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Tablets 1</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tablets 2</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Tablets 3</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Tablets 4</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Tablets 5</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Tablets 6</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Tablets 7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Tablets 8</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Tablets 9</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Tablets 10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {activeTab === 'Ointments' && (
                                    <div className="product-content">
                                        <h4 className="product-heading-small">Ointments List</h4>
                                        <table className="table table-bordered pro-table w-100">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Product name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Tablets 1</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tablets 2</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Tablets 3</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Tablets 4</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Tablets 5</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Tablets 6</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Tablets 7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Tablets 8</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Tablets 9</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Tablets 10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {activeTab === 'Drops' && (
                                    <div className="product-content">
                                        <h4 className="product-heading-small">Drops List</h4>
                                        <table className="table table-bordered pro-table w-100">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Product name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Tablets 1</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Tablets 2</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Tablets 3</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Tablets 4</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Tablets 5</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Tablets 6</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Tablets 7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Tablets 8</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Tablets 9</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Tablets 10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProductView;
