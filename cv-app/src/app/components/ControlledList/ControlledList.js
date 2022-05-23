import React, { Component } from "react";
import uniqid from "uniqid";

export default class ControlledList extends Component {
  constructor(props) {
    super(props);
    this.state = { list: this.initailizeList() };
  }

  initailizeList() {
    const list = this.props.info;
    if (Array.isArray(list) === false) return [];
    return list.map((item) => ({ id: uniqid(), ...item }));
  }

  componentDidMount() {
    this.updateState(null);
  }

  render() {
    const { list } = this.state;
    const { title, type } = this.props;

    return (
      <article>
        {title}
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {React.cloneElement(type, {
                info: item,
                update: this.updateList(item),
                remove: this.removeList(item),
              })}
            </li>
          ))}
        </ul>
        <button onClick={this.addItem}>Add</button>
      </article>
    );
  }

  updateList = (target) => (info) => {
    this.updateState((state) => ({
      list: state.list.map((item) => (item === target ? info : item)),
    }));
  };

  removeList = (target) => () => {
    this.updateState((state) => ({
      list: state.list.filter((item) => item !== target),
    }));
  };

  addItem = () =>
    this.updateState((s) => ({ list: s.list.concat({ id: uniqid() }) }));

  updateState = (callback) => {
    this.setState(callback, () => {
      if (this.props.update) this.props.update(this.state.list);
    });
  };
}
