'use client';
import React, { Component } from 'react';
export default class ComponentForm extends Component {
  ComponentDidMount = () => {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://embedsocial.com/cdn/ef.js';
      d.getElementsByTagName('head')[0].appendChild(js);
    })(document, 'script', 'EmbedSocialFormsScript');
  };
  render() {
    return (
      <div
        class='embedsocial-forms-iframe'
        data-ref='ad1a0f772137cba3ba523af42ebb5a7f3c47ca3d'
        data-widget='true'
        data-height='500'
      ></div>
    );
  }
}
