/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React, { Component } from 'react';

import { Footer, FollowUsContainer, SocialMediaItem, Logo } from "r-t-components";

import { Grid, Row, Col } from 'react-flexbox-grid';

// import styled from 'styled-components';

// const HyperLink = styled.a`
//   padding: 1em;
// `;s

type MyProps = {};
type MyState = { value: string };
class FooterSection extends Component<MyProps, MyState> {
  render() {
    return (
      <Footer backgroundColor="#f6f6f6">
        <Grid>
          <Row>
            {/* <Col xs>
              <h2>Menü</h2>
            </Col> */}
            <Col xs>
              <h2>İletişim</h2>
              <FollowUsContainer followUsText="Bizi Takip Edin">
                <SocialMediaItem iconSelection="facebook" linkUrl="www.facebook.com"/>
              </FollowUsContainer>
            </Col>
            <Col xs>

              <Logo logoUrl="logo.png" companyName="Defne Sanat" isFooter/>
            </Col>
          </Row>
        </Grid>
      </Footer>
    );
  }
}

export default FooterSection;