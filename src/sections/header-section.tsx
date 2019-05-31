/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React, { Component } from 'react';

import { Header, Logo } from "r-t-components";

import { Grid, Row, Col } from 'react-flexbox-grid';

// import { NavLink } from "../components"

// import styled from 'styled-components';

// const HyperLink = styled.a`
//   padding: 1em;
// `;s

type MyProps = {};
type MyState = { value: string };
class HeaderSection extends Component<MyProps, MyState> {
  render() {
    return (
      <Header backgroundColor="#f6f6f6">
        <Grid>
          <Row>
            <Col xs style={{display: 'flex', alignItems: 'center'}}>
              <Logo logoUrl="logo.png" />
              <h1 style={{display: 'inline-flex'}}>
              Defne Sanat
              </h1>
            </Col>
            <Col xs/>
            <Col xs style={{margin: 'auto'}}>
            {/* <ResponsiveMenu
              menu = {
                <div>
                  <NavLink to="/hakkimizda">Hakkımızda</NavLink>
                  <NavLink to="/etkinlikler">Etkinlikler</NavLink>
                  <NavLink to="/duyurular">Duyurular</NavLink>
                  <NavLink to="/kitaplar">Kitaplar</NavLink>
                  <NavLink to="/yazilar">Yazılar</NavLink>
                </div>
              }
            /> */}
            </Col>
          </Row>
        </Grid>
      </Header>
    );
  }
}

export default HeaderSection;