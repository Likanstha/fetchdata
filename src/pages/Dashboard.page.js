import React,{ useState } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {UniTable} from "../components/UniTable";
//import lists from '../utils/dummyfile.json'

export const Dashboard = () => {

const [lists, setlists] = useState(null);

const fetchData = () => {
    fetch('http://universities.hipolabs.com/search?country=Australia')
    .then(response => response.json())
    .then(data => setlists(data));
};

  return (
    <Container>
            <Row>
                <Col className="text-center">
                   
                    <Button  
                    style={{fontSize:"2rem",padding:"10px 30px"}}
                    onClick={fetchData}            
                    >
                    Load
                    </Button>

                    <Button 
                    style={{fontSize:"2rem",padding:"10px 30px"}}
                    >
                    Delete
                    </Button>

                    <Button 
                    style={{fontSize:"2rem",padding:"10px 30px"}}
                    >
                    Add Row
                    </Button>
                </Col>
            </Row>                      
            <hr/>
            <Row>
            {lists && <UniTable lists = {lists} />}
            </Row>
        </Container>
  )
}
