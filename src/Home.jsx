import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='top-banner'>
        <div className="container">
          <div className="details">
            <h1 className='main-head'>Manual<br/>
             Inspection is <br/>
             <span className='second-head'>Slow& Error-Prone</span></h1>
             <p>
            AI-powered visual inspection, leveraging computer vision
            , transforms manufacturing inspection procedures, boosting 
            precision and cost-effectiveness while upholding product excellence
            . This AI inspection system detects defects with exceptional accuracy, optimizing the overall inspection process.
            </p>
            <button className='schedule'>Schedule Call</button>

            <button class='play-button'>
            &#9658; 
            </button>

            

            </div>

            <div className="img-box">
              <img className='img1' src="./img/1.webp" alt="" />
            </div>
           
        </div>

       <div className='container'>
        <div className="second-banner">
          <div className='details2'>
          <p> Leader in AI visual inspection</p>
          <h2 className='craft'>Crafting Tomorrow's World<br/> with <span className='ai'>AI Excellence</span>
            </h2>
            <p className='leverag'>Leveraging AI, Ombrulla empowers clients with data-driven insights and automation, extracting valuable information from various sources like photos, videos, and data lakes. Our AI visual inspection
               system enables businesses to enhance their bottom line through precise defect detection and actionable insights.</p>
               <button class='play-button'>
            &#9658; 
            </button>
            </div>
            </div>
        </div>

        <div className='container'>
        <div className="third-banner">

          <div className="details3">
            <h5>AI VISUAL INSPECTION</h5>
            <h2 className='craft'>Enhancing quality through AI-based visual inspection</h2>
            <p className='para'>Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates
               human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.
               <li>AI visual inspection ensures consistent performance with unmatched accuracy</li>
               <li>It boosts throughput and cuts down on labour expenses</li>
               <li>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
               <li>Real-time data and analytics enable scalability in AI-based visual inspection</li>
               </p>

               <button className='schedule'>Schedule Call</button>
               <button className='readmore'>Read more</button>
               
          </div>
          <div className="image3">
            <img className='image3'  src="./img/2.webp" alt="" />
          </div>
        </div>
        </div>


        <div className="container">
          <div className="image4">
            <img  className="image4"
            src="./img/3.webp" alt="" />

          </div>
          <div className="details4">
            <h5>AI INFRASTRUCTURE INSPECTION</h5>
            <h2 className='craft'>Enhances Efficiency, Safety, and Cost-Effectiveness</h2>
            <p className='para'>Ombrulla's AI Infrastructure Inspection utilizes AI drone inspections for real-time insights, transforming the way we inspect critical infrastructure. This AI inspection technology enhances efficiency, safety, and cost-effectiveness, all while ensuring longevity and reducing risks. By leveraging AI in Infrastructure, Ombrulla empowers better infrastructure management with increased reliability and responsiveness.

            <li>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
            <li>Efficiency: Automating inspections with AI drone technology saves time and resources</li>
            <li>Predictive Maintenance: AI-driven analysis predicts maintenance needs, preventing costly breakdowns.</li>
          <li> Safety: AI inspections in infrastructure reduce manual work in hazardous areas, enhancing worker safety</li>
</p>
            <button className='schedule'>Schedule Call</button>
               <button className='readmore'>Read more</button>
          </div>
        </div>


        <div className="conatiner-fluid">
          <div className="fourth-banner">
          <div className="details5">
          <h4 className='petran'>PETRAN</h4>
        <p className='perfomance'>PErformance - TRacking - ANalytics</p>
        <h2 className='alot'>AIoT Enabled Asset<br/>
Performance Management Software</h2>
<p className='perfomance'>PETRAN offers an Asset Management software (APM) that harnesses the power of artificial intelligence and the Internet of Things (IoT) 
  to empower data-driven decision-making and enable predictive maintenance and operational equipment effectiveness</p>
  <button className='schedule2'>Schedule Call</button>
  <button class='play-button2'>
            &#9658; 
            </button>
  
          </div>

          <div className="image5">
            <img className='image5' src="./img/4.webp" alt="" />
          </div>
          </div>

          

          
        </div>

        <div className="conatiner">
          <div className="fifth-banner">
          <div className="details6">
            <h5>PRODUCTS</h5>
            <h2>Tracking Tools</h2>
            <p>AI and IoT-enabled tracking tools enhance workplace safety by providing real-time monitoring of workers' movements and vital signs. Simultaneously, they contribute to
               environmental sustainability by optimizing energy usage, improving waste management, and promoting resource efficiency.</p>

          </div>

          <div className="details7">
            <h3>RTLS - Workplace Safety</h3>
            <p>IoT and AI integration improves workplace safety by
               continuously monitoring vital signs and locations in real-time for proactive hazard detection.</p>
               <img className='sub1' src="./img/6.webp" alt="" />
               <button className='book'>Book For Demo</button>
          </div>

          <div className="details8">
            <h3>Environmental Sustainability</h3>
            <p>AI and IoT enhance environmental sustainability by optimizing
               energy use, improving waste management, and promoting resource efficiency.</p>

               <img className='sub2' src="./img/7.webp" alt="" />
               <button className='book'>Book For Demo</button>
          </div>
          </div>
        </div>

       
          <div className="ourcustomers">
            <h6 style={{fontSize:'15px'}}>OUR CUSTOMERS</h6>
            <h1 style={{fontSize:'45px', fontWeight:'500'}}>They Trust Us</h1>
          </div>
     
{/* <div className="scroll">

</div> */}


        
      
    </div>
    
    
  )
}

export default Home
