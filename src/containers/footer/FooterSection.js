import React from 'react';
import Styles from './footer.module.css';

function Footer() {
    return (
        <div data-testId="footer" className={Styles.footerContainer}>
            <div className={Styles.footerContent}>
         
                <div className={Styles.version}>
                    <span>Version 1.0.0</span>
                </div>

                <div className={Styles.copyright}>
                    <span>© 2025 Readit Reddit. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
