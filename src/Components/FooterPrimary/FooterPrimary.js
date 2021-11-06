import React, {Fragment} from 'react';
import './FooterPrimary.css'

const FooterPrimary = () => {
    return (
        <Fragment>
            <footer className='footer-primary'>
                <ul className='footer-primary-ul d-flex justify-content-center'>
                    <li>
                        © 2021
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Accessibility
                    </li>
                    <li>
                        User Agreement
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Cookie Policy
                    </li>
                    <li>
                        Copyright Policy
                    </li>
                    <li>
                        Brand Policy
                    </li>
                    <li>
                        Guest Controls Here
                    </li>
                    <li>
                        Community Guidelines Here
                    </li>
                </ul>
            </footer>
        </Fragment>
    );
};

export default FooterPrimary;