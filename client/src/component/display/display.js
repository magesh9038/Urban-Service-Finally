import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { getallservices } from "../../actions/profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./display.css";
const Display = (props) => {
  const { getallservices } = props;
  useEffect(() => {
    getallservices();
  }, [getallservices]);
  console.log(props);
  let Services = props.Profile.profile.map((data, index) => (
    <Link to={`/Services/${data.services}`}>
      <div class="service-workers">
        <h1>{data.services}</h1>
        <p>{data.About}</p>
        <img src={data.Image} alt="jj" />
      </div>
    </Link>
  ));
  return (
    <Fragment>
      {console.log("nfjsnfjnjvgndfjn")}
      <img className="image" src="https://images.pexels.com/photos/38293/workers-construction-site-hardhats-38293.jpeg?cs=srgb&dl=pexels-pixabay-38293.jpg&fm=jpg"/>
      <section className="display">
        <nav>
          <a href="navbar-link">
            {/*  */}
            {/* <img
              src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/50933597_2260255480856103_8462898186757865472_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=goCM1oShOxUAX_Glntm&tn=q7oP6gqNiabZsvxe&_nc_ht=scontent-bom1-2.xx&oh=24631776f851e4c95b273bcc9c36986a&oe=616C63C6"
              alt=""
              width="100"
              height="104"
              class="d-inline-block align-text-top"
            />{" "} */}
          </a>
          <div className="nav-link" id="navlinks">
            <i class="fa fa-times" onClick="hidemenu()"></i>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">SERVICE WORKERS</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <i class="fa fa-bars" onClick="showmenu()"></i>{" "}
        </nav>

        <div className="nav-another">
          <h1>URBAN SERVICE</h1>
          <p>
            Urban Company is an Indian gig marketplace that offers home
            installation, maintenance and repair services, and home beauty and
            wellness services.
          </p>
          <a href="" className="urban-button">
            Visit as for more details
          </a>
        </div>
      </section>
      <section class="workers">
        <h1>Service workers</h1>
        <p>
          Urban Company is an Indian gig marketplace that offers home
          installation, maintenance and repair services, and home beauty and
          wellness services
        </p>
        <div className="service">
          {/* <div class="service-workers">
            <h1>electrician</h1>
            <p>
              There are also many advantages to this career. In addition to
              these benefits, electricians can take satisfaction in playing an
              important role in their communities. Without their wiring work,
              the world might not be as comfortable of a place
            </p>
          </div>
          <div class="service-workers">
            <h1>Saloon</h1>
            <p>
              Do salons do men's hair? The main difference between the two types
              of haircutters is that barbers are typically trained to cut
              shorter, traditional haircuts for men while salon stylists are
              trained to cut longer, fuller men's styles. A barber's primary
              focus is cutting men's hair.
            </p>
          </div>
          <div class="service-workers">
            <h1>Acting Driver</h1>
            <p>
              Drivers increasingly opt to freelance rather than become full-time
              chauffeurs. Increasingly, young drivers, some in their early 20s
              and others in their 30s are now willing to risk an unstable income
              and prefer to be freelancers. Popularly known as 'acting drivers
              ', they choose to drive based on the customer's demands
            </p>
          </div> */}
        </div>
      </section>
      <section class="campus">
        <h1>Global Services</h1>
        <p>
          Drivers increasingly opt to freelance rather than become full-time
          chauffeurs. Increasingly, young drivers, some in their early 20s
        </p>
        <div className="row">
          <div>{Services}</div>
          {/* <div class="row-col">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              width="300"
            />
            <div class="layer">
              <h3>SALON</h3>
            </div>
          </div> */}
          {/* <div class="row-col">
            <img
              src="https://media.istockphoto.com/photos/woman-at-home-calling-a-plumber-about-a-leaking-pipe-in-her-sink-picture-id1300212975?b=1&k=20&m=1300212975&s=170667a&w=0&h=IX7i5mCBiHoOX6UA9hqODeNhKRFEAhI12rhLbx5NYoM="
              width="300"
            />
            <div class="layer">
              <h3>PLUMBER</h3>
            </div>
          </div> */}
          {/* <div class="row-col"> */}
            {/* <img
              src="https://media.istockphoto.com/photos/hardworking-woman-driving-car-for-rideshare-picture-id1247754273?b=1&k=20&m=1247754273&s=170667a&w=0&h=Cywy2UNeEqun-DI5AGPYraYOxIvQoBurdyJgZh2BSk8="
              width="300"
            /> */}
            {/* <div class="layer">
              <h3>ACTING DRIVER</h3>
            </div>
          </div> */}
          {/* <div class="row-col">
            <img
              src="https://images.unsplash.com/photo-1518181835702-6eef8b4b2113?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cmljaWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              width="300"
            />
            <div class="layer">
              <h3>ELECTRICIAN</h3>
            </div>
          </div> */}
        </div>
      </section>
      <section className="facility">
        <h1>CUSTOMER REVIEW</h1>
        <p>What customers are saying about services</p>
        <div className="service">
          <div class="service-workers">
            <img
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/273203233_3069207916626338_1597722056565804843_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=HWuuGoWq38gAX_v5_yO&_nc_ht=scontent-bom1-1.xx&oh=00_AT-O5reqPsCD01c3APlPSs-C3txMzzXImIbTkVSJGQUmqQ&oe=62573742"
              width="70"
            />
            <h1>
              <i class="fab fa-instagram-square"></i>venkat
            </h1>
            <p>
              Urban clap is one of the greatest search engine where service
              provider and customer comes together for purpose of get benifit
              from it yoga, photography and pest control I used three clearly
              the best I ever seen highly reommended service provider in mumbai
              . prompt response and great effective team.
            </p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <div class="service-workers">
            <img
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t31.18172-1/26685116_383114612100880_7376172406874987962_o.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kmn1CvJZYKsAX-GeAeK&_nc_ht=scontent-bom1-1.xx&oh=00_AT8n1WkNnXzaHAMLlaYYiZPAIN925jw_p9fK2bTXjyvlHg&oe=62766CA3"
              width="70"
            />
            <h1>
              <i class="fab fa-instagram-square"></i>yogesh
            </h1>
            <p>
              very good service and support. You can book any service very
              quickly. Service providers they sent are very professional.
            </p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="service-workers">
            <img
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/102353991_692382184663747_903692151011001305_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=66sztiaO5zYAX93WxoK&_nc_ht=scontent-bom1-1.xx&oh=00_AT9qfJlzFPSBF1W90VHN3kMB6nVl0pm6cYsc28hoNHoG9Q&oe=62767828"
              width="50"
            />
            <h1>
              <i class="fab fa-facebook"></i>ravi kumar
            </h1>
            <p>
              The Company Does Not Have a Customer Care Number which can help
              the customer and we have to at the whims and fancies of their
              Professional. Today a Plumber Called Asif was scheduled at 9.30 AM
              did not turn up till 10.30 and was not picking up call
            </p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
        </div>
      </section>
      <section className="final">
        <h1>You can book the labours for any time</h1>
        <a href="https://www.facebook.com/search/top?q=urban%20clap%20home%20services">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/company/urbancompany/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/c/UrbanclapApps">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://twitter.com/search?q=urban%20company&src=typeahead_click&f=top">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/_urbanclap/">
          <i class="fab fa-instagram"></i>
        </a>
      </section>
     
    </Fragment>
  );
};

Display.propTypes = {
  getallservices: PropTypes.func.isRequired,
  Profile: PropTypes.object.isRequired,
};
let mapStateToProps = (state) => ({
  Profile: state.Profile,
});

export default connect(mapStateToProps, { getallservices })(Display);
