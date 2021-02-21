import React from "react";
import PropTypes from "prop-types";

import FormField from "part:@sanity/components/formfields/default";
import { TextInput, Box, Code, Inline, Badge } from "@sanity/ui";

import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

const createPatchFrom = (value) =>
  PatchEvent.from(value === "" ? unset() : set(String(value)));

export default class Slider extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  // this is called by the form builder whenever this input should receive focus
  focus() {
    this._inputElement.focus();
  }

  state = {
    linkIsValid: false,
  };

  render() {
    const { type, value, onChange } = this.props;

    const renderLink = () => {
      if (value) {
        return (
          <Box marginTop={3}>
            <Inline space={2}>
              <Badge tone={this.state.linkIsValid ? "positive" : "critical"}>
                {this.state.linkIsValid ? "Nice!" : "Error!"}
              </Badge>
              <Code size={1}>https://egstad.link/{value}</Code>
            </Inline>
          </Box>
        );
      }
    };

    const renderPreview = () => {
      if (value) {
        return (
          <Box marginTop={3}>
            <video
              src={`https://egstad.link/${value}`}
              muted
              controls
              onLoadedData={() => {
                this.setState({ linkIsValid: true });
              }}
              onError={() => {
                this.setState({ linkIsValid: false });
              }}
              style={{
                width: "100%",
                height: "auto",
                display: this.state.linkIsValid ? "block" : "none",
              }}
            ></video>
          </Box>
        );
      }
    };

    return (
      <FormField label={type.title} description={type.description}>
        <TextInput
          type="text"
          placeholder={type.placeholder}
          value={value}
          onChange={(event) => {
            onChange(createPatchFrom(event.target.value));
          }}
          ref={(element) => {
            this._inputElement = element;
          }}
        />

        {renderPreview()}
        {renderLink()}
      </FormField>
    );
  }
}
