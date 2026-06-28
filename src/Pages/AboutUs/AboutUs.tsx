// import "./AboutUs.css";
// import seetharama from "../../assets/seetharamaraju.jpeg";
// import somaraju from "../../assets/somaraju.jpeg";
// function AboutUs() {
//   return (
//     <section id="about-us" className="about-section">
//       <div className="about-container">
//         <h2 className="about-heading">
// Managing Partners        </h2>

//         <div className="about-cards">
//           <div className="about-card">
//             <img
//               src={seetharama}
//               alt="Seetharamaraju"
//             />
//             <p className="name">Seetharama Raju Sayyaparaju</p>
//           </div>

//           <div className="about-card">
//             <img
//               src={somaraju}
//               alt="Somaraju"
//             />
//             <p className="name">Somaraju</p>
            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;
import "./AboutUs.css";
import seetharama from "../../assets/seetharamaraju.jpeg";
import somaraju from "../../assets/somaraju.jpeg";

function AboutUs() {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">

        {/* Track Record Section */}
        <div className="track-record">
          <h2 className="track-heading">SS Holdings Track Record</h2>
          <p className="track-highlight">
            25 years. 35+ projects. One standard — Excellence
          </p>

          <p className="track-text">
            SS Holdings specializes in premium standalone buildings — built
            with quality, delivered on time, every time.
          </p>

          <p className="track-text">
            Standalone means more land share in your hands. More value.
            More ownership.
          </p>

          <p className="track-text">
            That's not marketing. That's our 25-year track record speaking.
          </p>
        </div>

        <h2 className="about-heading">Managing Partners</h2>

        <div className="about-cards">
          <div className="about-card">
            <img src={somaraju} alt="Somaraju" />
            <p className="name">Somaraju Bhupatiraju </p>
          </div>
          <div className="about-card">
            <img src={seetharama} alt="Seetharamaraju" />
            <p className="name">Seetharama Raju Sayyaparaju</p>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default AboutUs;