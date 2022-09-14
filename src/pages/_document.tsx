import React from "react";
import Document, {
  Html,
  Head as HeadContainer,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <HeadContainer />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
