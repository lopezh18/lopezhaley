import React, { Component } from 'react'
import ProjectTech from '../components/ProjectTech'
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';


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

    let movie = 
     ( <video className='demo-video' autoPlay width="400" height="400">
      <source src={this.props.video} type="video/mp4"/>
          Your browser does not support the video tag.  
      </video>)

      if(!this.props.video){
        movie = <p>Video coming soon</p>
      }
    
    let projectPreview = (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title} Preview</ModalHeader>
          <ModalBody>
            {movie}
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
