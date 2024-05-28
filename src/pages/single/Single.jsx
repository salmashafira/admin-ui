// single untuk menampilkan satu data
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar"; // panggil component sidebar 
import Navbar from "../../components/navbar/Navbar"; // panggil component navbar
import Chart from "../../components/chart/Chart"; // import chart
import List from "../../components/datatable/Datatable"; // import list yang berisi datatable

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">

          <div className="left"> 
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://sun9-57.userapi.com/impg/5Hvc6SKJTmBXIoo_6LgrXDl9CCsL93Lydbxu_g/cv9aG6hWlCg.jpg?size=604x604&quality=96&sign=a18ebaaacec7fa62fa7fbe455cdeb1f9&c_uniq_tag=1lL25tfAafohNdmQHp5d2QKbrONRaO4zlxLJo70_tvU&type=album"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Raiden</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">electro.archon@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Tenshukaku, Inazuma City, Narukami Island
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Inazuma (Japan)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3 / 1} type="order" />
          </div>

        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;