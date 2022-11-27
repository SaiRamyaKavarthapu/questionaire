import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import MockData from './Mock/MockData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: {},
      sl: 5,
      nexts: false,
      ukey: uuidv4(),
      tempt: [],
      checked: false
    };
  }





  render() {
    return (
      <div className="App">
      <div className="container-md">
        <h1 class="text-primary">Pain & Functional Description</h1>
        <p>
          The description of the current situation gives your Optimum Trainer
          a picture of and clues to the underlying causes of your problems
        </p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            If you have problem with pain/aches, stiffness, weakness or
            functional problems, describe this/these below. (List the symptoms
            in descending order with the most troublesome first)
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            name="Title description"
            rows="3"
           // onChange={handleChange}
          ></textarea>
        </div>

        {MockData.values.slice(0, this.state.sl).map((e, i) => (
          <>
            <p className="text-start m-4" key={this.state.ukey}>
              {e.question + ""} {"  "}
              {e.options &&
                e.options.map((option, index) => {
                  return (
                    <>
                      <div
                        className="form-check form-check-inline ms-3"
                        key={index}
                      >
                        <input
                          key={index + this.state.ukey}
                          className="form-check-input"
                          type={e.optionType}
                          name={e.question}
                          id={e.id}
                          value={option}
                         // onChange={(event) => handleChange(event)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={e.id}
                          key={index + this.state.ukey + 10}
                        >
                          {option}
                        </label>
                     
                      </div>
                    </>
                  );
                })}
            </p>
          </>
        ))}
        
    
      </div>
    </div>
    );
  }
}

export default App;