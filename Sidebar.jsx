import React from 'react';

function Sidebar() {
  return (
    <section id="sidebar">
        
      <div className="inner-content">
        <div align="left">
          <div className="server-time">
            <ul id="clockList">
              <li id="timeLabel">Current time</li>
              <li id="hours"></li>
              <li id="point">:</li>
              <li id="min"></li>
              <li id="ampm"></li>
            </ul>
          </div>
        </div>
        <ul id="overview_panelbar">
          <li>
            Routes
            <div id="routes_grid_wrapper">
              <div className="search-container">
                <button type="button" className="clear-x"></button>
                <input type="text" />
                <input type="submit" value="" />
              </div>
              <div id="routes_grid"></div>
            </div>
          </li>
          <li>
            Stops
            <div id="stops_grid_wrapper">
              <div className="filter-container selected-routes">
                <div className="filter-msg">
                  <span className="filter-header">Stops for:</span>
                  <span className="filter-status">None</span>
                </div>
                <div className="filter-clear">Clear</div>
              </div>
              <div className="filter-container selected-filters">
                <div className="filter-msg">
                  Filter: <span className="filter-status">None</span>
                </div>
                <div className="filter-clear">Clear</div>
              </div>
              <div className="search-container filterable">
                <button type="button" className="clear-x"></button>
                <input type="text" />
                <button type="button" className="filter-options"></button>
                <input type="submit" value="" />
              </div>
              <div id="stops_grid"></div>
            </div>
          </li>
          <li>
            Trip Planner
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
                        <input
                          id="planner_from"
                          type="text"
                          name="saddr"
                          className="required input-text"
                          minLength="2"
                          placeholder="Address, intersection..."
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="planner_to">To:</label>
                      </td>
                      <td>
                        <input
                          id="planner_to"
                          type="text"
                          name="daddr"
                          className="required input-text"
                          minLength="2"
                          placeholder="Address, intersection..."
                        />
                      </td>
                    </tr>
                    <tr className="planner-when">
                      <td>
                        <label htmlFor="planner_when_type">Plan to:</label>
                      </td>
                      <td>
                        <select id="planner_when_type" name="ttype">
                          <option value="arr" selected="selected">
                            Arrive
                          </option>
                          <option value="dep">Depart</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="planner_when_time">Time:</label>
                      </td>
                      <td>
                        <input
                          id="planner_when_time"
                          type="time"
                          name="time"
                          placeholder="Select time"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="planner_when_date">Date:</label>
                      </td>
                      <td>
                        <input
                          id="planner_when_date"
                          type="date"
                          name="date"
                          placeholder="Select time"
                        />
                      </td>
                    </tr>
                    <tr className="submit-row">
                      <td></td>
                      <td>
                        <input
                          type="submit"
                          name="transitsubmit"
                          value="Plan Trip"
                          className="plan-trip"
                          data-theme="b"
                        />
                      </td>
                    </tr>
                  </table>
                </fieldset>
              </form>
            </div>
          </li>
          <li>
            Set Alert
            <div id="set_alert_wrapper">
              <form id="set_alert_form" method="get" action="">
                <fieldset className="kendo-form">
                  <table className="form-section">
                    <tr>
                      <td>
                        <label htmlFor="alert_route">Route:</label>
                      </td>
                      <td>
                        <select id="alert_route" name="route" className="required"></select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="alert_direction">Direction:</label>
                      </td>
                      <td>
                        <select id="alert_direction" name="direction" className="required"></select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="alert_stop">Stop:</label>
                      </td>
                      <td>
                        <select id="alert_stop" name="stop" className="required"></select>
                      </td>
                    </tr>
                    <tr className="depart-times">
                      <td>
                        <label htmlFor="alert_depart_from">Departures<br />between:</label>
                      </td>
                      <td className="bi">
                        <div className="col">
                          <input id="alert_depart_from" name="departfrom" type="time" />
                        </div>
                        <div className="col">
                          <input id="alert_depart_to" name="departto" type="time" />
                        </div>
                      </td>
                    </tr>
                    <tr className="notify-before">
                      <td colSpan="2" className="tri">
                        <div className="col">
                          <input
                            id="alert_notify_before"
                            type="radio"
                            name="notifyme"
                            checked="checked"
                          />
                          <label htmlFor="alert_notify_before">Notify me:</label>
                        </div>
                        <div className="col">
                          <input
                            id="alert_notify_before_mins"
                            name="notifybeforemins"
                            type="number"
                            pattern="[0-9]*"
                          />
                        </div>
                        <div className="col mins">
                          <span>mins before<br />bus departs</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="authenticated notify-during" style={{ display: "none" }}>
                      <td colSpan="2" className="tri">
                        <div className="col">
                          <input id="alert_notify_during" type="radio" name="notifyme" />
                          <label htmlFor="alert_notify_during">Notify me<br />every:</label>
                        </div>
                        <div className="col">
                          <input
                            id="alert_notify_during_mins"
                            name="notifyduringmins"
                            type="number"
                            pattern="[0-9]*"
                          />
                        </div>
                        <div className="col">
                          <span>mins during<br />this interval</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="authenticated" style={{ display: "none" }}>
                      <td>
                        <label className="notify-by">Notify me by:</label>
                      </td>
                      <td>
                        <div className="notify-by-email">
                          <input id="alert_notify_email" type="checkbox" name="notifyemail" />
                          <label htmlFor="alert_notify_email">Email</label>
                        </div>
                        <div className="notify-by-sms">
                          <input id="alert_notify_sms" type="checkbox" name="notifysms" />
                          <label htmlFor="alert_notify_sms">Text Message</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="anonymous">
                      <td>
                        <label htmlFor="alert_email">Email:</label>
                      </td>
                      <td>
                        <input
                          type="email"
                          name="email"
                          id="alert_email"
                          className="email input-text required"
                        />
                      </td>
                    </tr>
                    <tr className="submit-row">
                      <td colSpan="2">
                        <div className="submit-container">
                          <input
                            type="submit"
                            name="submit"
                            value="One-time Alert"
                            className="set-alert"
                            data-theme="b"
                          />
                          <button
                            type="button"
                            name="subscriptions"
                            href="#"
                            className="authenticated my-subscriptions"
                            style={{ display: "none" }}
                          >
                            My Subscriptions
                          </button>
                          <button
                            type="button"
                            name="recurring"
                            href="#"
                            className="anonymous recurring-alert"
                          >
                            Recurring Alert
                          </button>
                        </div>
                      </td>
                    </tr>
                  </table>
                </fieldset>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
