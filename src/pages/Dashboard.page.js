import React,{ useState } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {UniTable} from "../components/UniTable";


export const Dashboard = () => {

const [lists, setlists] = useState(null);

  return (
    <Container>
            <Row>
                <Col className="text-center">
                   
                    <Button  
                    style={{fontSize:"2rem",padding:"10px 30px"}}
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
