import React from 'react';
import { Container} from '@mui/material';
import '../css/footer.css';

function Footer({ currentPage, setCurrentPage, nextPage }) {
return (
    <Container>
      <div>
        
        <img
            src="images/footer.jpg"
            alt="Footer Image"
           
         />
        
      </div>
    </Container>
  );
}

export default Footer;