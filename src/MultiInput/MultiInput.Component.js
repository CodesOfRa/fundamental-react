import React, { Component } from 'react';
import {
  DocsTile,
  DocsText,
  Separator,
  Header,
  Description,
  Import,
  Properties
} from '../';
import { MultiInput } from './MultiInput';

export class MultiInputComponent extends Component {
  data = [
    'Apple',
    'Apricot',
    'Acai',
    'African Moringa',
    'Bearberry',
    'Bilberry',
    'Blood orange',
    'Barbadine',
    'Barbados cherry',
    'Balsam Apple',
    'Chokeberry',
    'Cranberry',
    'Cupuacu'
  ];

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  performTagsUpdate = aTags => {
    console.log(aTags);
  };

  multiInputCode = `<MultiInput
  data={this.data}
  onTagsUpdate={this.performTagsUpdate}
  placeHolder="Select a Fruit"
/>`;

  multiInputCompactCode = `<MultiInput
  data={this.data}
  onTagsUpdate={this.performTagsUpdate}
  placeHolder="Select a Fruit"
  compact={true}
/>`;

  render() {
    return (
      <div>
        <Header>Multi Input</Header>
        <Description />
        <Import module="MultiInput" path="/fundamental-react/src/" />

        <Separator />

        <Properties
          type="Inputs"
          properties={[
            {
              name: 'data',
              description:
                'Array (Required) - Collection of items to display in the list.'
            },
            {
              name: 'placeHolder',
              description:
                'String - The text to use as placeholder when no text is entered.'
            },
            {
              name: 'onTagsUpdate',
              description:
                'Func - Method to fire on add or remove of tag. Component returns array of tags selected.'
            },
            {
              name: 'compact',
              description:
                'Bool - true: display compact style, false: default style'
            }
          ]}
        />

        <Separator />

        <h2>Default</h2>
        <Description>
          A text input when on focus will show list of items to select.
        </Description>
        <DocsTile>
          <div>
            <MultiInput
              data={this.data}
              onTagsUpdate={this.performTagsUpdate}
              placeHolder="Select a Fruit"
            />
          </div>
        </DocsTile>
        <DocsText>{this.multiInputCode}</DocsText>

        <Separator />

        <h2>Compact Style</h2>
        <Description>
          A text input when on focus will show list of items to select, but with
          a compact input box.
        </Description>
        <DocsTile>
          <div>
            <MultiInput
              data={this.data}
              onTagsUpdate={this.performTagsUpdate}
              placeHolder="Select a Fruit"
              compact={true}
            />
          </div>
        </DocsTile>
        <DocsText>{this.multiInputCompactCode}</DocsText>

        <Separator />
      </div>
    );
  }
}
