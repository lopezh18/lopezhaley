import React, { Component } from 'react'
import ProjectTech from '../components/ProjectTech'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {

    let projectPreview = (
      <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{this.props.title} Preview</ModalHeader>
            <ModalBody>
              Video coming soon
          </ModalBody>
          </Modal>
        </div>
    )
    return (
      <div className={`project-card ${this.props.bottom}`}>
        <div className={this.props.title.toLowerCase()}>
        </div>
        <div className='project-content'>
          <h5>{this.props.title}</h5>
          <p className='project-card-details'> {this.props.content}</p>
          <ProjectTech tech={this.props.tech} />
          <div className='project-card-buttons'>
            <a href={this.props.git} className='project-card-button project-card-github'>
              Github
           </a>

            <button className='project-card-button project-card-preview'
            onClick={this.toggle}>
              Preview
            </button>
          </div>
        </div>
        {projectPreview}
      </div>
    )
  }
}
