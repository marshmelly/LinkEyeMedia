import React from 'react'



const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
   <div className='footer'>
     <footer style={{ textAlign: 'center', padding: '1rem 0', backgroundColor: '#f1f1f1', marginTop: 'auto' }}>
      <div className='container fluid row'>
        <div className="col-md-4">
          
        </div>
      </div>
     © {currentYear} Link Eye Agencies. All rights reserved. <br />
     <a href="/about" className="text-sm hover:underline">About Us</a>
     </footer>
   </div>
  )
}

export default Footer
