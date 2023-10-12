import {Col, Form, Row, Stack} from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable"

export const NoteForm = () => {
  return (
    <Form>
      <Stack gap={2}>
        <Row>
          <Col>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control required/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='tags'>
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group controlId="textarea"></Form.Group>
          <Form.Label>Note Input Area</Form.Label>
          <Form.Control as="textarea" rows={3}></Form.Control>
        </Row>
      </Stack>
    </Form>
  )
}