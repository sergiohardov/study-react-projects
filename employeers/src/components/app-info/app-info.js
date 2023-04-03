import "./app-info.css";

const AppInfo = ({ increased, employeers }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании.</h1>
      <h2>Общее число сотрудников: {employeers}</h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
};

export default AppInfo;
