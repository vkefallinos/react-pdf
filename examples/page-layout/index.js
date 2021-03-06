/* eslint react/prop-types: 0 */
/* eslint react/jsx-sort-props: 0 */

import React from 'react';
import ReactPDF from 'react-pdf-node';
import { Page, View, Document, StyleSheet } from 'react-pdf';
import { times } from 'lodash';

import Header from './Header';
import Body from './Body';
import Aside from './Aside';
import Line from './Line';
import Footer from './Footer';

const TemplatePage = ({ title, lines = 20 }) => (
  <Page size="A4">
    <Header title={title} />
    <Body>
      <Aside />
      <View style={styles.main}>
        {times(lines, (line, i) => <Line key={i} />)}
      </View>
    </Body>
    <Footer />
  </Page>
);

const styles = StyleSheet.create({
  main: {
    padding: 30,
    backgroundColor: 'white',
  },
});

// Renders document and save it
ReactPDF.render(
  <Document>
    <TemplatePage title="Joe Doe" lines={15} />
    <TemplatePage title="Jane Doe" lines={10} />
  </Document>,
  `${__dirname}/output.pdf`,
);
