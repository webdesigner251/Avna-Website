import React from 'react';

const SmallBanner = ({ Heading }) => {
    return (
        <main>
            <section className='small-banner'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className='small-banner-heading'>{Heading}</h1>
                        </div>
                    </div>
                </div>                
            </section>
        </main>
    );
}

export default SmallBanner