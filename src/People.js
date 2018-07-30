import React, { Component, Fragment } from 'react'
import Person from './Person'

const getPeople = async uri => await fetch(uri)
  .then(res => res.json())
  .then(({ results = [] }) => results)

const formatPersonWithFullName = ({ firstName = '', lastName = '' }) => {
  return `${firstName} ${lastName}`
}

export default class extends Component {

  state = {
    people: []
  }

  async componentDidMount() {
    const people = await getPeople(this.props.uri)
    this.setState({ people })
  }

  render() {

    return (
      <Fragment>
        {this.state.people.map(person => (
          <Person {...person} />
        ))}
      </Fragment>
    )
  }
}
