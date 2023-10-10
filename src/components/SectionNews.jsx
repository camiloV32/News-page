import { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {loadContent} from '../requestApi';
import New from './New';
import Spinner from 'react-bootstrap/Spinner';
function SectionNews(props){
    const {data, loading} = loadContent(props.name);
    //console.log(data);
    return(
        <>
            <section id={`${props.name}`} className="section-new">
                <Container>
                    <h2>{props.name}</h2>
                    <Suspense fallback={<Spinner animation="border" />}>
                        <Container className='d-flex justify-content-center align-items-center my-5'>
                            <Row className='g-4'>
                                {data?.articles.map(newElement=>{return <New dataNew={newElement}/>})}
                            </Row>
                            
                        </Container>
                    </Suspense>
                    
                </Container>
            </section>
           
        </>
    );
}
export default SectionNews;