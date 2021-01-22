import React, {Component} from 'react'
import './routes.less'

class About extends Component{
    render() {
        return (
            <div className='container page-container'>
                <h3 className='page-title'>About Us</h3>
                <p className='about-us'>Jivy Group is an Israeli company with offices in Moldova, Israel and Portugal offering FinTech services 
                (movie databases are included, don't worry) for startup and middle companies. </p>
            </div>
        )
    }
}

export default About