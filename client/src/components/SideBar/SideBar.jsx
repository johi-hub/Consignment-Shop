import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './SideBar.scss'

export default class SideBar extends Component {
render() {
    return (
<div>
  <ButtonGroup className="sidebar" vertical>
    <Button 
      href="/johnsjewelery" className="sidebar__btn">John's Jeweler's
    </Button>
    <Button 
      href="/sarasclothing" className="sidebar__btn">Sara's Clothing
    </Button>
    <Button 
      href="/franksfurniture" className="sidebar__btn">Frank's Furniture
    </Button>
    <Button 
      href="/ygrettesgotcollection" className="sidebar__btn">Ygrette's Game Of<br></br> Thrones Collection
    </Button>
    <Button 
      href="/loraslamp" 
      className="sidebar__btn">Lora's Lamps
    </Button>
    <Button 
      href="/timmysfancyclothes" className="sidebar__btn">Timmy's Fancy Clothes
    </Button>
    <Button 
      href="/nicksknickknacks" className="sidebar__btn">Nick's Knick-knacks
    </Button>
    <Button 
      href="/thestorestore" 
      className="sidebar__btn">The Store Store
    </Button>
  </ButtonGroup>
</div>
)}
}
