import React from 'react'
import { Modal } from "antd"

class Modalable extends React.Component {
  state = {
    visible: false
  }

  showModal = () => {
    this.setState({ visible: true })
  }

  hideModal = () => {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    const { children } = this.props
    return (
      <Modal
        title="Title-Title"
        visible={visible}
        onCancel={this.hideModal}
      >
        {children}
      </Modal>
    )
  }
}

export default Modalable
