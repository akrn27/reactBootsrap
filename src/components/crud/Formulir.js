import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Makanan"
                name="nama"
                value={this.props.nama}
                onChange={(event) => this.props.handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="deskripsi"
                value={this.props.deskripsi}
                onChange={(event) => this.props.handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan Harga"
                name="harga"
                value={this.props.harga}
                onChange={(event) => this.props.handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
