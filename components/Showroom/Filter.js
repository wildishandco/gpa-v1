import React, { useState } from "react";
import styled from "styled-components";

const FilterStyles = styled.form`
  flex: 25%;
  background: var(--yellow);
  margin-right: 30px;
  padding: 20px;
  position: relative;
  .container {
    position: relative;
    margin-bottom: 1rem;
    cursor: pointer;
    user-select: none;
    padding-left: 40px;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 1.3rem;
      width: 1.3rem;
      background-color: var(--background);
    }
  }
  .container:hover input ~ .checkmark {
    background-color: white;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 0.2rem;
    left: 0.2rem;
    width: 0.9rem;
    height: 0.9rem;
    background: var(--copycolor);
  }
`;

export default function Filter({ brands, setBrand }) {
  const [brandUpdate, setBrandUpdate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBrand(brandUpdate);
  };

  return (
    <FilterStyles onSubmit={handleSubmit}>
      {brands.map((b, i) => {
        return (
          <div className="filter-inner" key={i}>
            <label className="container">
              {b.data.brand_name}
              <input
                type="radio"
                id={b.uid}
                name="brands"
                value={b.uid}
                onChange={(event) => setBrandUpdate(event.target.value)}
              />
              <span className="checkmark" />
            </label>
            <br />
          </div>
        );
      })}
      <label className="container">
        Show All
        <input
          type="radio"
          id="all"
          name="brands"
          value="all"
          onChange={(event) => setBrandUpdate(event.target.value)}
        />
        <span className="checkmark" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </FilterStyles>
  );
}
