import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Input from './Input';
import Select from './Select';

class Stage4 extends React.Component{
  render() {
      return (
          <div>
              <Col sm={{size: 6, offset: 3}}>
                  <div className="stepbar">
                      <div className="barwrap">
                          <div className="bar active"/>
                          <div className="bar active"/>
                          <div className="bar active"/>
                      </div>
                      <div className="step active done">
                          <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                      </div>
                      <div className="step active done">
                          <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                      </div>
                      <div className="step active done">
                          <FontAwesomeIcon icon={faCheck} color="#fff" size="xs"/>
                      </div>
                      <div className="step active">
                          <div className="instep"/>
                      </div>
                  </div>

                  <Header title={'Payment Method'} subtitle={'Add your credit card information!'}/>

                  <Form>
                      <Row>
                          <Col sm="12">
                              <label htmlFor="card-number">Card Number</label>
                              <Input
                                  type={'number'}
                                  id={'card-number'}
                                  placeholder={'1234 5678 9012 3456'}
                              />
                          </Col>
                      </Row>

                      <Row>
                          <Col sm="6">
                              <label htmlFor="card-name">Cardholder</label>
                              <Input
                                  type={'text'}
                                  id={'card-name'}
                                  placeholder={'EXAMPLE NAME'}
                              />
                          </Col>
                          <Col sm="6">
                              <label htmlFor="bank-name">Bank</label>
                              <Input
                                  type={'text'}
                                  id={'bank-name'}
                                  placeholder={'EXAMPLE BANK'}
                              />
                          </Col>
                      </Row>

                      <Row>
                          <Col sm="4">
                              <label htmlFor="cvv">CVV</label>
                              <Input
                                  type={'text'}
                                  id={'cvv'}
                                  placeholder={'123'}
                              />
                          </Col>
                          <Col sm="4">
                              <label htmlFor="expire-date-year">Expired Date</label>
                              <Select
                                  id={'expire-date-year'}
                                  start={2018}
                                  end={2030}
                                  placeholder={'YYYY'}
                              />
                          </Col>
                          <Col sm="4">
                              <label htmlFor="expire-date-year" style={{opacity: 0}}>Expired Date</label>
                              <Select
                                  id={'expire-date-month'}
                                  start={1}
                                  end={12}
                                  placeholder={'MM'}
                              />
                          </Col>
                      </Row>

                      <Link to="/app/complete">
                          <Button color="primary" block>DONE</Button>
                      </Link>
                  </Form>
              </Col>
          </div>
      );
  }
}

export default Stage4;
