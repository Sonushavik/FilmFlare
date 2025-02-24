import React from 'react'
import { useNavigate,NavLink, useRouteError } from 'react-router'
// import { NavLink } from 'react-router';

const ErrorPage = () => {
        const error = useRouteError();
        const navigate = useNavigate();
        console.log(error);
        const handleGoBack = () => {
                navigate(-1);
        }
        if (error.status === 404) {
                return (
                        <section className=" error-section">
                                <div id="error-text">
                                        <figure>
                                                <img
                                                        src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                                                        alt="404 page"
                                                        style={{width: "600px", height:"400px"}}
                                                />
                                        </figure>
                                        <div className="text-center">
                                                <p className="p-a">
                                                        {error.data};
                                                </p>
                                                <p className="p-b">... Back to previous page</p>
                                        </div>
                                </div>
                                {/* <NavLink to="/" className="btn">
          Go Back To HomePage
        </NavLink> */}
                                <button className="btn" onClick={handleGoBack}>
                                        Go Back
                                </button>
                        </section>
                )
        }

}

export default ErrorPage
