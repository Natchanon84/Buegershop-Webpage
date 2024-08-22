import React, { useEffect, useState } from "react";
import { items } from "./item";
import "./Style.css";
import person from "../Multifilter/image/person.svg"
import people from "../Multifilter/image/people.svg"
import phone from "../Multifilter/image/phone.svg"
import mail from "../Multifilter/image/mail.svg"
import clock from "../Multifilter/image/clock.svg"
import calendar from "../Multifilter/image/calendar.svg"
import location from "../Multifilter/image/location.svg"
import phone2 from "../Multifilter/image/phone2.svg"
import heart from "../Multifilter/image/heart.svg"

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["BURGER", "PIZZA", "SALAD", "SWEETS", "COLD DRINK"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      <div className="container-MultiFilter">
        <p className="Header-MultiFilter">From Our Menu</p>

        <div className="buttons-container">

          {filters.map((category, idx) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button-MultiFilter ${selectedFilters?.includes(category) ? "active" : ""
                }`}
              key={`filters-${idx}`}
            >
              {category}
            </button>
          ))}

        </div>

        <div className="items-container-MultiFilter">
          {filteredItems.map((item, idx) => (
            <div key={`items-${idx}`} className="item">
              <img src={item.img} className="item-img" />
              <p className="item-name">{item.name}</p>
              <p className="text-MultiFilter">It is a long established fact that a reader will be distracted by the readable.</p>
              <p className="price-item-MultiFilter">{item.pirce}</p>
              {/* <button className="btn-item-MultiFilter">Order</button>
            <p className="category">{item.category}</p>  */}
            </div>
          ))}
        </div>
      </div>

      <div className="BookaTable-container">
        <div className="box-container">
          <div className="content-bookatable">
            <div className="header-content-bookatable">
              <h2>Book a Table</h2>
              <p>Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, to using making it look like readable English.</p>
            </div>


            <form className="container-input-bookatable">

              <div className="item-input-bookatable">
                <img src={person}></img>
                <input className="input-bookatable" type="text" placeholder="Your Name" name="name"></input>
              </div>

              <div className="item-input-bookatable">
                <img src={phone}></img>
                <input className="input-bookatable" type="text" placeholder="Phone Number"></input>
              </div>

              <div className="item-input-bookatable">
                <img src={people}></img>
                <input className="input-bookatable" type="text" placeholder="Number Of People"></input>
              </div>

              <div className="item-input-bookatable">
                <img src={mail}></img>
                <input className="input-bookatable" type="text" placeholder="Your Email"></input>
              </div>

              <div className="item-input-bookatable">
                <img src={clock}></img>
                <input className="input-bookatable" type="time" placeholder="Time" ></input>
              </div>

              <div className="item-input-bookatable" >
                <img src={calendar}></img>
                <input className="input-bookatable" type="date" placeholder="Date"></input>
              </div>
              <button className="btn-submit-bookatable" type="submit">Book a Table</button>
            </form>
          </div>

          <div className="contact-bookatable">
            <div className="box-contact-bookatable">
              <div className="contact-content-bookatable">
                <h2>Contact Info</h2>
                <p className="color">Lorem Ipsum is simply dummy text of the printing typesetting industry.</p>
              </div>
              <div className="item-content-bookatable">
                <img src={location}></img>
                <div>
                  <p>Ocean Tower II Sukhumvit 21</p>
                  <p>Khlong Toei,Watthana Bangkok</p>
                </div>

              </div>
              <div className="item-content-bookatable">
                <img src={phone2}></img>
                <div>
                  <p>+66 97 654 3210</p>
                  <p>+66 84 321 5678</p>
                </div>

              </div>
              <div className="item-content-bookatable">
                <img src={mail}></img>
                <div>
                  <p>info@example.com</p>
                  <p>info@example.com</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer-container">
        <div className="box-footer-container" >
          <div className="item-footer-container1">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAgCAYAAACRiqPIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAonSURBVHgB7VxNVhu7Ei4T3t8IZwURyQIgK0izgpAVYK8gsILYKwDGb4AZvtElK3idFVxnAQnK7M5uZ3pzAre+dsmRRUkttc0gJ/7Oadyt1k9JKtWf1AwowPPnzyf8c3J/f28Hg0HD97i+3N3dWbnHZQHaYosNYRAmGGOOd3Z2znFL3WjAsPhlpm1/acG0LbPSD6ZtaIstEhhoicyMQ2asC75OaHOwHVJ2/tgMi37xDxbaAR6ZHsP0II34vqWDn+dM1wem5SZSB8q/1t5xuammKVjLvOWfw0iZM63fXOYd6cLAfv78eer6I0Iju16vHytj4ejzx4Gvj9+/f78pmRehacS3BzK+JlJv7Y/VIFUpD8Yt5UnGtcBE1nyNw0nkTmFwmnXNAK6n4s6/46sqKGZlMlcYUkyXd1oBzn/E+eswncv8yT9DrQwzlaaVDE/mLemYcZmx5Ks43/+VPA3neaoVlrpB/3GMpgCWr0uu7yKVCfXy+F4VjLGlRV/aRbXjVVRhtcuvkeT39LjAKjm7vb09csyGFQVpsL+//7sM8iGtAdSFegqZsCWFy/3G5U8LyjyQHC9evMid8CW43ePYO2b2Sy+fOja8qOdaukjz3/l2VECT4etcJLQKSHzUWzjGhq+Jq3dXKoJ4Pw0qp0eGFQlivTahwia4546dlaqFENLJCa2HdzyBsxw6eCL+VJL7mDdqGTAY0+Ez2QHpdHwM04QJf6P+mHAdH0KJL3N2Qf3R1rsr0s8xoaV+qthNUtYqw4Dy9caTgq1Y59sKz8yg+xtQx4a6mdC67Ik8Q6HrhsppGHI/jwvLGIpoAWakyyApZnfWYZ0xW7IEIqlrv15ajwmX9UI1+ysdOnvAHXnK10t+nnfU0UCqwR4Rm+SSugGnZSkJQ7EOe5EUFVeKhHqDwTxGH5nmfVxg/BTtT548yV1gX4OkLia0YQLTHTUFYOAHSYc59YpNaCJ5LzGH3pxHFxycD6Veyqx3mqj3YBcqh5kBmVo1xvcjnqgpdxpMmJqAB6qVnydM3NuMMi2jaSYBGBIqTkwD52nbLi9Q6dxrLqe9uvn06dNshSgGL+4o7TwWWe2G9PWMOqgeOffnvT/W4sjF6Jh7+VrvOJJ1ygtx4j3POf+Yx6Eife73vHoNLWxNDWeBcwN65mz3v4rZka2zIsQ4jkVY40qMWkMRgFlD9dnBKI3PuMxoUMVdjoARwkdMz4QK4MIyCr5qiR2011QIMTeqwjJgLqO94/6vSCqW0mq+0FHhfBXpTGUDJlwk8jjEnJ3A9qxIh4152Fz+Q6TMD68ZRDkVFSPEwyyUKkDKs2JMAyYckU4s1Oa+iPUjUdUY4FdUhhgjnrAnOwoTYcxLGGnl4ldFkthD1ZVBYmtLJLSJDceby1ZaRsTpcvJRj8Xl257M4K8j2a4pDnVOwOC7foIwSiulEjEqELRszIl+UUMV6Zi5VZJiQoAHDvUdcttG1GslxEZXU6SeDy6YGgAOxJUsGtgxNVSZxAuLHRIP1n9Q1LJ7b7y0kMEr0lGHCbCrIqbHxz75HBKS3Pp0hPaiA49nVIglaLG7FIelhQEPzjd+Olx4iaBjBYNxu2zJVu3L5I8ojXOut71xRHMHrjnW2KXGV8BlZh02mnFtMV2tOuL76zDir9RrIoP5o2J9MmtK9B0LnyJq2V/4Dlx/zGOe98nnAXM5VdpbbtWK8InZqFFGTNESZUQnHbnRC7EXHbPVrNpOeEIuKCNcw420YRo/RtgBiz9QW5CCXP5G263orITLeE5YF7ClWUGNCWNOXMS/J6owAcwkW18q+F1s0diw/2JLxsbed1RMTr6gsTl1R0tiTBjdBeuiOSURHWFgIkjG5YRC2lAeYBfOS+JNCKfQhgC7l5uueZJhDpiCoogeGLeVlgPf3lNsPUtKqIZWHaeKdDwIK8FR4fZIoWFlv57zHebkEyaJMZfDMpheuqOTQ3OUEd02HxiRV/OFFzMaUR6mwgjDmK2poI9TkIRIk32xeeGQvIqpiAAjLnNdII2d2jL0cFJrrYDbielQyw/sVu5DjP4vffIxHeddHj40G/2QlEbLo+3oeLRUlKBlJ1aQK0Vc7VacC4jUkhjetQsNdARTw3KWHglgKKbplG3Nl+KVQ9rZVJmEukyVOQ7TuC3s2RsqbAdeu6bqYhGE0GPm59gWYB085yxM67Wv1hvu6PiIlXG0pFTzM/kdZRLqGoRjMcJ9sH2Yg7UlYsKQbpxqkcmd4ZJDDer2V8wz7MBbpd0bkXoxqO/gPGnpCaO/9p9zPFsZry5bv/GD5AnpGZ2/LqcpJRGHQSVoxJJu78DrrBH3c0wo5Yo22eVw7VpA4BumQHhBwmv5JayUszXZha9aQBphJPxGtgm/yOkco7xrcOgjTOxgnNBG6xQgsM9EQ8A2v9Hy+LafM9k08BirR9dkESZp7grfXMsqs6VBXW68SJIKvtCa4DafaUYxedtTBWW+Uj72tL1XtyPCTDV0YSkPBzGVxYidPEp5rFlzJFt4tXuWLU5DEcmcG8Pleo9ooWmWEB/hKlJk5miOMiJLijff/jusdnfbI0nVPQ0NeVw9WHCy/X5H77/tUP2fcWMDonLCJiE27qw4QJ3A3pWYnJVknEp5HTshE26rddWvpTuphgC98lptF9Bih1JPsceq4C2PxZ7YrkM5pQ0TZRihZUYZYBpwbvHAq9fQwlQxkXqXfYwy4v3V8JxlxOl97P1iZfIOCB3/iyf2r6vhm3+Om3YwUl5gCvLpwFrgwUhJ1VEqlhfAKqddSmmpbb/tQRvz1pnhX2nSO+KxYj40xgXDnaZO+ni49B0mCec1pDNtSb0zv49RG/G+7GS02fHy41g+9cPaElELd/TEZSw4mwvf2Sh0fKIn4xMOSF1STw4gZXGiSnm1rk3dnqbyE6KMuDNuju6IEOLoEvk18u2OmxkesINSeurEw9qMKKtsnV0R4Cx2goSZa48y0VeiIm6rpXdsrVmtnkKVvYQc+jjSJPq69fpHAR1U1YyTKPxT747tjH9nrKaH33AkyxPHLDGbf3DnB+NmWaG39dcXljYACaTbkhgmLRbBDb4JsavH8VfA74dde82AEgN8RhmIxQ4FKUflAc2YbB6HI4kYpM6JrrTP1zQVyBcmeum+gaeMMUa90BA8NzPtvTqiiK1xwRP/OH8XtEOupdC+aFsXLqQiRn7IDPCKrcSysj5n7dgz9WGVg6zF5YK2DUVCPanFI2XRdhUZB/dpb69vhGTXqqJF//b61DtIVIxtOUsLKXGtdVS+hcCKGFEP5ySA3eQ+8xY/F6ISSPmmeflfHWhxWgXvclZ4FiC68VkpbfFLIhq+wSa3SEXHbMMeAepsbGJXZYufF09iL5qm+WNvb+9/fPtUpN+/6REBxuc21/aat/g5UeQceMayi5pDWj5zsS1hWEPlmGof8mzx62DjXiogHpqhBaOagGmH3rckcwmX1LTFL42/AVMgOfAhhnItAAAAAElFTkSuQmCC" alt="/"></img>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="item-footer-container2">
            <h2>Subscribe To Our Newsletter</h2>
            <div className="box-item-footer-container2">
              <input type="text" placeholder="Enter Your Email"></input>
              <button>Subscribe</button>
            </div>

          </div>

          <div className="item-footer-container3">
            <h2>OUR LINKS</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Team</li>
              <li>Blog</li>
            </ul>
          </div>


          <div className="item-footer-container4">
            <h2>HELP CENTER</h2>
            <ul>
              <li>FAQ</li>
              <li>Shop</li>
              <li>Category Filter</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="therealfooter-haha">
            <div className="box-therealfooter-haha">Copyright 2023 All rights reserved.</div>
            <div className="box-therealfooter-haha1">
            <p>Crafted With</p>
            <img src={heart}></img>
            <p>by</p>
            <p style={{color:"red"}}>Natchaaaa</p>
            </div>
          </div>
        </div>

      </div>
    </div>



  );
}
