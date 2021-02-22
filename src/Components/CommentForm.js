import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
export default class FormComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
      this.props.addComment(this.props.dishId,values.rating,values.name,values.comment)
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className='fa fa-pencil fa-lg'></span> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div class='form-group'>
                <label for='rating'>Rating</label>
                <Control.select
                  model='.rating'
                  name='rating'
                  className='form-control'
                  defaultValue={1}
                >
                  <option value='init'>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </div>
              <div className='form-group'>
                <label for='rating'>Your Name</label>
                <Control.text
                  model='.name'
                  id='name'
                  name='name'
                  placeholder='Your Name'
                  className='form-control'
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.name'
                  show='touched'
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>
              <div class='form-group'>
                <label for='Comment'>Comment</label>
                <Control.textarea
                  model='.comment'
                  id='comment'
                  name='comment'
                  rows='6'
                  className='form-control'
                />
              </div>
              <Button
                type='submit'
                value='submit'
                color='success'
                onClick={this.toggleModal}
              >
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}