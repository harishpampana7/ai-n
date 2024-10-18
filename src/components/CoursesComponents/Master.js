import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Typography } from '@mui/material';

// Tool logos (You can replace these with your own image paths)
const tools = [
  { name: 'PYTHON', imgSrc: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png' },
  { name: 'Pandas', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZd37oUzVXPHOsl-Ygg5hzYpZs7Djvk-vSw&s' },
  { name: 'Github', imgSrc: 'https://www.shareicon.net/data/512x512/2015/10/04/111717_github_512x512.png' },
  { name: 'NLP', imgSrc: 'https://static.vecteezy.com/system/resources/previews/022/377/676/original/nlp-outline-icons-simple-stock-illustration-stock-vector.jpg' },
  { name: 'LangChain', imgSrc: 'https://blog.langchain.dev/content/images/2023/09/LangChain_Logo-1.png' },
  { name: 'VectorDB', imgSrc: 'https://images.search.yahoo.com/images/view;_ylt=Awr98PNkCw1n9zs5B.6JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzFhMDRiMzc2OGI1ZmJkMzE4ZGU1MzcyYTM4ODA3YWU2BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dvector%2Bdb%2Bsvg%2Bicon%26type%3DE210US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=800&h=800&imgurl=www.svgrepo.com%2Fshow%2F499816%2Fdatabase.svg&rurl=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F499816%2Fdatabase&size=0KB&p=vector+db+svg+icon&oid=1a04b3768b5fbd318de5372a38807ae6&fr2=piv-web&fr=mcafee&tt=Database+Vector+SVG+Icon+-+SVG+Repo&b=0&ni=21&no=1&ts=&tab=organic&sigr=CdQ41rtSOoCT&sigb=yU0Rpu1IYMK9&sigi=APc4bKV5mOC6&sigt=3resKF5LyCsQ&.crumb=zQYi8wWUn4R&fr=mcafee&fr2=piv-web&type=E210US714G0' },

//   { name: 'Transformers', imgSrc: 'path_to_transformers_logo' }
];

const MasterTools = () => {
  return (
    <Container className="mt-7" style={{marginTop:"60px",}}>
      {/* Section title */}
      <Typography variant="h5" align="left" gutterBottom>
        <span style={{ borderLeft: '4px solid #203864', paddingLeft: '8px' }}>Master These Tools</span>
      </Typography>

      {/* Tools section */}
      <Row className="justify-content-center" >
        {tools.map((tool, index) => (
          <Col key={index} md={2} xs={4} className="mb-4" style={{}}>
            <Card className="text-center shadow-sm" style={{ borderRadius: '8px',height:"150px" }}>
              <Card.Body>
                <img
                  src={tool.imgSrc} 
                  alt={tool.name} 
                  style={{ width: '60px', height: 'auto', marginBottom: '10px' }} 
                />
                <Card.Title style={{ fontSize: '0.9rem', fontWeight: 600 }}>{tool.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MasterTools;
