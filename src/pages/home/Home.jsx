// home untuk halaman utama
// didalam home akan ditampilkan sidebar, navbar, widget, chart
import Sidebar from "../../components/sidebar/Sidebar"; // panggil sidebar dari components
import Navbar from "../../components/navbar/Navbar"; // panggil navbar dari components
import Widget from "../../components/widget/Widget"; // panggil widget dari components
import Chart from "../../components/chart/Chart"; // panggil chart dari components
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar /> 
        <div className="homeContainer">
          <Navbar />
          
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="product"/>
            <Widget type="category"/>
          </div>

          <div className="charts">
            <Chart type="order" aspect={2 / 1}/>
            <Chart type="earning" aspect={2 / 1}/>
          </div>

        </div>
    </div>
  );
};

export default Home;