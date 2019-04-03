import React from 'react';
import { Container } from '../src/components';

const containerStyle = {
  padding: 20,
  paddingTop: 60,
};

export const storybookContainer = getStory => (
  <Container style={containerStyle}>{getStory()}</Container>
);
