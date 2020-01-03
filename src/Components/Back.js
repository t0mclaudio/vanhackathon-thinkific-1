/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => <Link className="backBtn" to={props.to}>Back</Link>;
