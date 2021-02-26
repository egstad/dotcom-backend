import React from 'react'
import PropTypes from 'prop-types'
import FormField from 'part:@sanity/components/formfields/default'
import { TextInput, Flex, Card, Text } from '@sanity/ui'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(String(value)))

export default class Slider extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  // this is called by the form builder whenever this input should receive focus
  focus() {
    this._inputElement.focus()
  }

  state = {
    hexIsValid: false,
  }

  render() {
    const { type, value, onChange } = this.props

    const isValid = (color) => {
      if (!color || typeof color !== 'string') return false

      // Validate hex values
      if (color.substring(0, 1) === '#') color = color.substring(1)

      typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))

      switch (color.length) {
        case 3:
          return /^[0-9A-F]{3}$/i.test(color)
        case 6:
          return /^[0-9A-F]{6}$/i.test(color)
        case 8:
          return /^[0-9A-F]{8}$/i.test(color)
        default:
          return 'This needs to be a valid HEX code (eg: #000000)'
      }
    }

    return (
      <FormField label={type.title} description={type.description}>
        <Flex>
          <Card flex={1}>
            <TextInput
              type="text"
              placeholder={type.placeholder}
              value={value}
              onChange={(event) => {
                onChange(createPatchFrom(event.target.value))
              }}
              ref={(element) => {
                this._inputElement = element
              }}
            />
          </Card>
          <Card flex={1} marginLeft={[2, 2, 3, 4]}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: isValid(value)
                  ? value
                  : 'repeating-conic-gradient(#cccccc 0% 25%, transparent 0% 50%) 50% / 20px 20px',
              }}
            ></div>
          </Card>
        </Flex>
      </FormField>
    )
  }
}
