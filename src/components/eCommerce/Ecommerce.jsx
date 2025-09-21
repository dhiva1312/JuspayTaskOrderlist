import '../eCommerce/eCommerce.css';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import grapghimg from '../../assets/ecommerceimg/graphimg.png';
import linegraphimg from '../../assets/ecommerceimg/linegraphimg.png';
import worldmap from '../../assets/ecommerceimg/worldmap.png';
import sales from '../../assets/ecommerceimg/sales.png';
const cardData = [
    {
        title: "Customers",
        number: "3,781",
        percentage: "+11.01%",
        trend: "up"
    },
    {
        title: "Orders",
        number: "1,219",
        percentage: "-0.03%",
        trend: "down"
    },
    {
        title: "Revenue",
        number: "$695",
        percentage: "+15.03%",
        trend: "up"
    },
    {
        title: "Growth",
        number: "30.1%",
        percentage: "+6.08%",
        trend: "up"
    }
];
const rows = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,158.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
    { name: "Macro Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];
export default function Ecommerce() {
    return (

        <div className="eCommerce-Container">
            <div className="ecom-row">
                <div className="ecom-frame1">
                    <div className="card-grid">

                        {cardData.map((item, index) => (
                            <div className={`card-item ${index === 0 || index === 3 ? "highlight-bg" : ""}`}
                                key={index}>
                                <div className="card-text">
                                    <span className="textfield">{item.title}</span>
                                </div>
                                <div className="card-text-block">
                                    <div className="box-1">
                                        <span className="numberfield">{item.number}</span>
                                    </div>
                                    <div className="box-2">
                                        <span
                                            className={`percentage_icon ${item.trend === "up" ? "positive" : "negative"
                                                }`}
                                        >
                                            {item.percentage}{" "}
                                            {item.trend === "up" ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="ecom-frame2">
                    <div className="frame-2-text">
                        <span>Projections vs Actuals</span>
                    </div>
                    <div className="chart-layout">
                        <img src={grapghimg} alt="" srcset="" className='chart-image' />
                    </div>
                </div>
            </div>

            <div className="ecom-row">
                <div className="ecom-frame3">
                    <div className="horizontal-row">
                        <div className="item "><span className='revenue-text'>Revenue</span></div>
                        <div className="item"><span className='divider'>|</span></div>
                        <div className="item item-3">
                            <div className="dot-layer">
                                <span className="Vdot"></span>
                            </div>
                            <div>Current Week <span style={{ fontWeight: "bold" }}>$58,211</span></div>

                        </div>
                        <div class="item">
                            <div className='item-4'>
                                <div className="dot-layer">
                                    <span className="Vdot"></span>
                                </div>
                                <div>Previous Week <span style={{ fontWeight: "bold" }}>$68,768</span></div></div>
                        </div>

                    </div>
                    <div className="graph-img-layout">
                        <img src={linegraphimg} alt="chart" class="inner-image" />
                    </div>
                </div>
                <div className="ecom-frame4">
                    <div class="frame4-item">Revenue by Location</div>
                    <div class="image-frame">
                        <img src={worldmap} alt="frame image" class="inner-image" />
                    </div>

                    <div className="content-container">
    <div className="texts">
      <span className="text">New York</span>
      <span className="text">72K</span>
    </div>
    <div className="stripline-1">
      <span className="stripline-text"></span>
    </div>
  </div>

  <div className="content-container">
    <div className="texts">
      <span className="text">San Francisco</span>
      <span className="text">39K</span>
    </div>
    <div className="stripline-2">
      <span className="stripline-text"></span>
    </div>
  </div>

  <div className="content-container">
    <div className="texts">
      <span className="text">Sydney</span>
      <span className="text">25K</span>
    </div>
    <div className="stripline-3">
      <span className="stripline-text"></span>
    </div>
  </div>
  <div className="content-container">
    <div className="texts">
      <span className="text">Singapore</span>
      <span className="text">61K</span>
    </div>
    <div className="stripline-4">
      <span className="stripline-text"></span>
    </div>
  </div>
                    




                </div>
            </div>

            <div className="ecom-row">
                <div className="ecom-frame5">
                    <div className="frame5-container">
                        <span className='frame5-text'>Top Selling Products</span>
                    </div>
                    <table className="custom-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.price}</td>
            <td>{row.quantity}</td>
            <td>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
                </div>
                <div className="ecom-frame6">
                    <div className="frame-6">
  <span className="frame-6-text">Total Sales</span>
</div>
<div className="frame-6-image">
  <img src={sales} alt="Frame 6" className='frame-6-image-img ' />
</div>
<div className="custom-container">
  <div className="container-item">
    <div className="left-text">
    <span className="frame6dot"></span>
    <span className="frame6inside-text">Direct</span>
  </div>
  <span className="amount">$300.56</span>
  </div>
  <div className="container-item">
    <div className="left-text">
    <span className="frame6dot affliateDot"></span>
    <span className="frame6inside-text">Affilliate</span>
  </div>
  <span className="amount">$135.18</span>
  </div>
  <div className="container-item">
    <div className="left-text">
    <span className="frame6dot sponsoredDot"></span>
    <span className="frame6inside-text">Sponsored</span>
  </div>
  <span className="amount">$154.02</span>
  </div><div className="container-item">
    <div className="left-text">
    <span className="frame6dot emaildot"></span>
    <span className="frame6inside-text">E-mail</span>
  </div>
  <span className="amount">$48.96</span>
  </div>
</div>



                </div>
            </div>
        </div>


    );
}
