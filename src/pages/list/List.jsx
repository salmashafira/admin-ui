// list untuk menampilkan semua data
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar"; // panggil components sidebar 
import Navbar from "../../components/navbar/Navbar"; // panggil components navbar
import Datatable from "../../components/datatable/Datatable"; // panggil components datatable

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={columns}/>
      </div>
    </div>
  );
};

export default List;