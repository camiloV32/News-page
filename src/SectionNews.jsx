import { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {loadContent} from './requestApi';
import New from './New';
import Spinner from 'react-bootstrap/Spinner';
function SectionNews(props){
    const {data, loading} = loadContent(props.name);

    return(
        <>
            <section id={`${props.name}`} className="section-new">
                <Container>
                    <h2>{props.name}</h2>
                    <Suspense fallback={<Spinner animation="border" />}>
                        <Container className='d-flex justify-content-center align-items-center my-5'>
                            <Row className='g-4'>
                                {data?.articles.map(newElement=>{return <New dataNew={newElement} key={data?.articles.indexOf(newElement)}/>})}
                            </Row>
                            
                        </Container>
                    </Suspense>
                    
                </Container>
            </section>
           
        </>
    );
}
export default SectionNews;
function generateKey(palabras) {
    let hash = 0;
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i];
      for (let j = 0; j < palabra.length; j++) {
        const char = palabra.charCodeAt(j);
        hash = (hash << 5) - hash + char;
      }
    }
    return hash;
  }
  