import React from 'react';

//Bootstrap Components
import { Panel, ListGroup, ListGroupItem  } from 'react-bootstrap';

class AppLinkedItems extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Linked Items</h2>
        <Panel>
          <ListGroup>
            <ListGroupItem header="Heading 1">Some body text Unselectable</ListGroupItem>
            <ListGroupItem header="Heading 2" href="#" active>Active Linked item</ListGroupItem>
            <ListGroupItem header="Heading 3" href="#">Linked item</ListGroupItem>
            <ListGroupItem header="Heading 4" href="#">Linked item</ListGroupItem>
            <ListGroupItem header="Heading 5" href="#">Linked item</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

export default AppLinkedItems;
