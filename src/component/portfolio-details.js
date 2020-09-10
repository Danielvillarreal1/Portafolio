import React from 'react';


const PortfolioDetails = () => {
    return ( 
        <>

         <main id="main">


<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Portfoio Details</h2>
      <ol>
        <li><a href="index.html">Home</a></li>
        <li>Portfoio Details</li>
      </ol>
    </div>

  </div>
</section>


<section id="portfolio-details" className="portfolio-details">
  <div className="container">

    <div className="portfolio-details-container">

      <div className="owl-carousel portfolio-details-carousel">
        <img src="assets/img/portfolio-details-1.jpg" className="img-fluid" alt="" />
        <img src="assets/img/portfolio-details-2.jpg" className="img-fluid" alt="" />
        <img src="assets/img/portfolio-details-3.jpg" className="img-fluid" alt="" />
      </div>

      <div className="portfolio-info">
        <h3>Project information</h3>
        <ul>
          <li><strong>Category</strong>: Web design</li>
          <li><strong>Client</strong>: ASU Company</li>
          <li><strong>Project date</strong>: 09 September, 2020</li>
          <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
        </ul>
      </div>

    </div>

    <div className="portfolio-description">
      <h2>This is an example of portfolio detail</h2>
      <p>
        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
      </p>
    </div>

  </div>
</section>
</main>
        </>
     );
}
 
export default PortfolioDetails;
