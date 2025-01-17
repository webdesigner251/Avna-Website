import React, { useState } from "react";
import SmallBanner from '../components/smallBanner';
import { ReactComponent as ExploreArrow } from '../assets/icons/double-arrow.svg'


const ProductView = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('capsules');

    // Function to change active tab
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <main className="product-view-page">
            <SmallBanner Heading={'Our Products'} />

            <section className="product-tab-wrapper py-100 pb-0">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-lg-4">
                            <div className="left-tab" >
                                <h3 className={`link-wrapper ${activeTab === 'capsules' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('capsules')}>
                                    Capsules  <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'combiKit' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('combiKit')}>
                                    Combi Kit <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'creamsAndOintment' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('creamsAndOintment')}>
                                    Creams\ointment <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'drySyrup' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('drySyrup')}>
                                    Dry Syrup <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'drops' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('drops')}>
                                    Eye\ear\nasal Drops <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'injectable' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('injectable')}>
                                    Injectable <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'liquidExternal' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('liquidExternal')}>
                                    Liquid External <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'liquidOrals' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('liquidOrals')}>
                                    Liquid Orals <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'powder' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('powder')}>
                                    Powder <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'suppositories' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('suppositories')}>
                                    Suppositories <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'tablets' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('tablets')}>
                                    Tablets <span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                                <h3 className={`link-wrapper ${activeTab === 'veterinaryTablets' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('veterinaryTablets')}>
                                    Veterinary Tablets<span><ExploreArrow className="next-icon" /> </span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="right-tab" data-aos="fade-in" data-aos-duration="3000">
                                {activeTab === 'capsules' && (
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

                                {activeTab === 'combiKit' && (
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProductView;
