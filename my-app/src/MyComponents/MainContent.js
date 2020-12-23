import React from 'react'
import WhiteContent from './WhiteContent';
import{ Button,Col,Row} from "react-bootstrap";
function MainContent () {
    return (
        <div>
            <Row className="set1">
                <Col lg={5}>
                <h1> Welcome to prime Video</h1>
                <p>Join prime to watch the latest movies,TV shows and Award winning Amazon Originals</p>
                <Button variant="info">Sign in to start free trial</Button>
                </Col>
            </Row>
             <div className="set2">
                  <h1 >Great Entertainment</h1>
                  <p>With your prime membership, You have access to exclusive Amazon Originals,
                    blockbuster Bollywood movies,regional movies and more.</p>
                 <Button variant="info" className="button" >Get Started</Button>
           </div>   
           <Row className="set3">
                <Col lg={4}>
                     <h1>One Membership, Many Benefits </h1>
                     <p>Your prime membership now also includes add-free music, along with unlimited free,
                         fast delivery on eligible items, exclusive  access to deals and more.</p>
                     <Button variant="info">Get Started</Button><br/><br/>
                     <small >*Go to amazon.in/prime for more information</small>
                </Col>
            </Row>
            <div className="set4">
                  <h1 >Even better with Fire TV Stick</h1>
                  <p>The biggest movies and TV shows are always better on a big screen. 
                Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button
                 on the remote and say the name of the title you want to watch to find it in seconds.</p>
                 <Button variant="info" className="button" >Get Started</Button>
           </div>   
            <WhiteContent />
            <Row className="set5">
                <Col lg={4}>
                     <h1>Family Friendly</h1>
                    <p>With easy to use Parental Controls and a dedicated kids page, 
                    enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig,
                    Powerpuff Girls, and Chhota Bheem.</p>
                    <Button variant="info">Get Started</Button>
                </Col>
                </Row>
        </div>
    )
}

export default MainContent;
