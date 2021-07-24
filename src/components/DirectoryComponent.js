import React, { Component } from 'react';
//importing built in components in reactstrap
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

// class components are objects declared as a class by { Directory />}
class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedCampsite: null
        };
    }

    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }

    renderSelectedCampsite(campsite) {
        if (campsite) {
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

// the render method
    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                // this is the JSX 
                <div key={campsite.id} className = "col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>                        
                        </CardImgOverlay>                    
                    </Card>                   
                </div>
            );
        });
// this is what's shown on the screen and is considered the main return
return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            <div className="row">
                
                    <CampsiteInfo campsite={this.state.selectedCampsite}></CampsiteInfo>
               
            </div>
            </div>
        );
    }
}

export default Directory;