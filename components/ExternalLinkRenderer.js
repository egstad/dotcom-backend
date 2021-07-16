// ExternalLinkRenderer.js
import React from "react";
import PropTypes from "prop-types";
import { MdInsertLink } from "react-icons/md";

const ExternalLinkRenderer = (props) => (
  <span>
    {props.children} <MdInsertLink />
  </span>
);

ExternalLinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExternalLinkRenderer;
