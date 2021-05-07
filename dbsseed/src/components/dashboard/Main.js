import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";
import { Card } from "react-bootstrap"
 
const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Codersbite</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <Card style={{boxShadow: "5px 5px 13px #ededed, -5px -5px 13px #ffffff" }}>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <p className="text-primary-p">TOTAL SPENDING</p>
                <span className="font-weight-bold text-title" style={{ fontSize: "1.5rem" }}>$24,000</span>
              </div>
              <div>
                <i className="fa fa-user-o fa-2x text-lightblue"/>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */ }

  {/* <!-- CHARTS STARTS HERE --> */ }
  <div className="charts">
    <div className="charts__left">
      <div className="charts__left__title">
        <div>
          <h1>Daily Reports</h1>
          <p>Cupertino, California, USA</p>
        </div>
        <i className="fa fa-usd" aria-hidden="true"></i>
      </div>
      <Chart />
    </div>

    <div className="charts__right">
      <div className="charts__right__title">
        <div>
          <h1>Stats Reports</h1>
          <p>Cupertino, California, USA</p>
        </div>
        <i className="fa fa-usd" aria-hidden="true"></i>
      </div>

      <div className="charts__right__cards">
        <div className="card1">
          <h1>Income</h1>
          <p>$75,300</p>
        </div>

        <div className="card2">
          <h1>Sales</h1>
          <p>$124,200</p>
        </div>

        <div className="card3">
          <h1>Users</h1>
          <p>3900</p>
        </div>

        <div className="card4">
          <h1>Orders</h1>
          <p>1881</p>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- CHARTS ENDS HERE --> */ }
      </div >
    </main >
  );
};

export default Main;
