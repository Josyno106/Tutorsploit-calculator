import { StyledCalculator } from "../StyledComponents/Calculator.styled";
import "primeicons/primeicons.css"; //icons
import { useState, useEffect } from "react";
import { DropdownMultiple, Dropdown } from "reactjs-dropdown-component";

const Calculator = () => {
  const locations = [
    {
      label: "New York",
      value: "newYork"
    },
    {
      label: "Oslo",
      value: "oslo"
    },
    {
      label: "Istanbul",
      value: "istanbul"
    }
  ];

  //set the levels array
  const levels = [
    {
      label: "School",
      value: "school"
    },
    {
      label: "College",
      value: "college"
    },
    {
      label: "University",
      value: "university"
    },
    {
      label: "Masters's",
      value: "masters"
    },
    {
      label: "Doctorate",
      value: "doctorate"
    }
  ];
  //set the timeline array
  const timelines = [
    {
      label: "4 hours",
      value: "4 hours"
    },
    {
      label: "6 hours",
      value: "6 hours"
    },
    {
      label: "1 day",
      value: "1 day"
    },
    {
      label: "2 days",
      value: "2 days"
    },
    {
      label: "3 days",
      value: "3 days"
    },
    {
      label: "4 days",
      value: "4 days"
    },
    {
      label: "5 days",
      value: "5 days"
    },
    {
      label: "7 days",
      value: "7 days"
    },
    {
      label: "10 days",
      value: "10 days"
    },
    {
      label: "2 weeks",
      value: "2 weeks"
    },
    {
      label: "1 month",
      value: "1 month"
    },
    {
      label: "2 months",
      value: "2 months"
    }
  ];

  const [pages, setPages] = useState([1, 3]);

  useEffect(() => {}, []);

  console.log("Num of pages  " + pages.length);

  return (
    <>
      <StyledCalculator>
        <div className="outer">
          <p>Calcute the price </p>
          <Dropdown
            name="location"
            title="Subject "
            list={locations}
            onChange={(item) => {
              console.log(item.value);
            }}
            styles={{
              headerTitle: { color: "gray", textAlign: "left" },
              listSearchBar: {
                color: "green",
                marginTop: ".2rem",
                fontSize: "1rem"
              },
              listItem: {
                backgroundColor: "",
                color: "gray",
                fontSize: "1rem",
                padding: ".3rem 1rem"
              }
            }}
            searchable={["Search subjects", "No matching Subject"]}
          />

          <div style={{ display: "flex", gap: ".4rem", marginTop: "1rem" }}>
            <Dropdown
              name="location"
              title="level"
              list={levels}
              onChange={(item) => {
                console.log(item.value);
              }}
              styles={{
                headerTitle: { color: "gray", textAlign: "left" },
                listSearchBar: {
                  color: "green",
                  marginTop: ".2rem",
                  fontSize: "1rem"
                },
                listItem: {
                  backgroundColor: "",
                  color: "gray",
                  fontSize: "1rem",
                  padding: ".3rem 1rem"
                }
              }}
            />
            <Dropdown
              name="location"
              title="deadline"
              list={timelines}
              onChange={(item) => {
                console.log(item.value);
              }}
              styles={{
                headerTitle: { color: "gray", textAlign: "left" },
                listSearchBar: {
                  color: "green",
                  marginTop: ".2rem",
                  fontSize: "1rem"
                },
                listItem: {
                  backgroundColor: "",
                  color: "gray",
                  fontSize: "1rem",
                  padding: ".3rem 1rem"
                }
              }}
            />
          </div>
          <div className="num-pages">
            <button className="minus"> - </button>

            <Dropdown
              name="location"
              title="words/pages"
              list={timelines}
              onChange={(item) => {
                console.log(item.value);
              }}
              styles={{
                headerTitle: { color: "gray", textAlign: "left" },
                listSearchBar: {
                  color: "green",
                  marginTop: ".2rem",
                  fontSize: "1rem"
                },
                listItem: {
                  backgroundColor: "",
                  color: "gray",
                  fontSize: "1rem",
                  padding: ".3rem 1rem"
                }
              }}
            />

            <button className="add"> + </button>
          </div>
        </div>
      </StyledCalculator>
    </>
  );
};

export default Calculator;
