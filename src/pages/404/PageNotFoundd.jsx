/* eslint-disable no-unused-vars */
import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
const PageNotFoundd = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
}

export default PageNotFoundd