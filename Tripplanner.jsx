import React from 'react';

function TripPlanner() {
  return (
    <div id="trip_planner_wrapper">
      <form id="trip_planner_form" action="#" method="get" target="_blank">
        <fieldset className="kendo-form">
          <input type="hidden" name="sspn" value="0.25,0.67" />

          <input type="hidden" name="sll" value="26.6950412573046, -80.3874555619891" />
          <input type="hidden" name="f" value="d" />
          <input type="hidden" name="hl" value="en" />
          <input type="hidden" name="dirflg" value="r" />

          <table className="form-section">
            <tr>
              <td>
                <label htmlFor="planner_from">From:</label>
              </td>
              <td>
                <input id="planner_from" type="text" name="saddr" className="required input-text" minLength="2" placeholder="Address, intersection..." />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="planner_to">To:</label>
              </td>
              <td>
                <input id="planner_to" type="text" name="daddr" className="required input-text" minLength="2" placeholder="Address, intersection..." />
              </td>
            </tr>
            <tr className="planner-when">
              <td>
                <label htmlFor="planner_when_type">Plan to:</label>
              </td>
              <td>
                <select id="planner_when_type" name="ttype">
                  <option value="arr" selected="selected">Arrive</option>
                  <option value="dep">Depart</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="planner_when_time">Time:</label>
              </td>
              <td>
                <input id="planner_when_time" type="time" name="time" placeholder="Select time" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="planner_when_date">Date:</label>
              </td>
              <td>
                <input id="planner_when_date" type="date" name="date" placeholder="Select time" />
              </td>
            </tr>
            <tr className="submit-row">
              <td></td>
              <td>
                <input type="submit" name="transitsubmit" value="Plan Trip" className="plan-trip" data-theme="b" />
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default TripPlanner;
