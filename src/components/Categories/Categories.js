import React from "react";
import JewelleryImage from "../../assets/jewellers.jpg";
import "./Categories.scss";

export default function Categories() {
  return (
    <div className="cards">
      <div className="category-img">
        <img
          className="profile-photo"
          src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/pre-landing-Women-03Sep2020.jpg"
          alt={"Carlie Anglemire"}
        />
        <div className="category-button">
          <button>WOMEN</button>
        </div>
      </div>
      <div className="category-img">
        <img
          className="profile-photo"
          src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/pre-landing-Men-03Sep2020.jpg"
          alt={"Carlie Anglemire"}
        />
        <div className="category-button">
          <button>MEN</button>
        </div>
      </div>
      <div className="category-img">
        <img className="profile-photo" src={JewelleryImage} alt={""} />
        <div className="category-button">
          <button>JEWELLERY</button>
        </div>
      </div>
      <div className="category-img">
        <img
          className="profile-photo"
          src={
            "https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/05/11/Photos/Processed/tv-kSBF--621x414@LiveMint.jpg"
          }
          alt={""}
        />
        <div className="category-button">
          <button>ELECTRONICS</button>
        </div>
      </div>
    </div>
  );
}

Categories.propTypes = {};
