import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAddDrink } from '../../actions/Drinks/drinkActions'


class DrinkForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      description: '',
      ingredients_attributes: [{ measure: '', kind: '' }],
      instructions_attributes: [{ order: 1, step: '' }],
      glass: '',
      garnish: '',
      image: ''
    }
  }
  /* ------  Handle CHanges in form field ----- */
  handleIngredientChange = (i, e) => {
    let newFormValues = [...this.state.ingredients_attributes]
    newFormValues[i][e.target.name] = e.target.value
    this.setState({
      ingredients_attributes: newFormValues
    })
  }

  handleInstructionChange = (i, e) => {
    let newFormValues = [...this.state.instructions_attributes]
    newFormValues[i][e.target.name] = e.target.value
    this.setState({
      instructions_attributes: newFormValues
    })
  }

  /*   --------  Handle adding fields  ----------- */
  addIngredientFields = () => {
    this.setState({
      ...this.state,
      ingredients_attributes: [
        ...this.state.ingredients_attributes,
        { measure: '', kind: '' }
      ]
    })
  }

  addInstructionFields = () => {
    let num = this.state.instructions_attributes.at(-1).order + 1
    this.setState({
      instructions_attributes: [
        ...this.state.instructions_attributes,
        { order: num, kind: '' }
      ]
    })
  }

  /*   --------  Handle removing fields  ----------- */

  removeIngredientFields = i => {
    let newFormValues = [...this.state.ingredients_attributes]
    newFormValues.splice(i, 1)
    this.setState({
      ingredients_attributes: newFormValues
    })
  }
  removeInstructionFields = i => {
    let newFormValues = [...this.state.instructions_attributes]
    newFormValues.splice(i, 1)
    this.setState({
      ...this.state,
      instructions_attributes: newFormValues
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addDrink(this.state)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor='description'>Description:</label>
            <input
              type='text'
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='glass'>Glass Type:</label>
            <input
              type='text'
              name='glass'
              value={this.state.glass}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='garnish'>Garnish:</label>
            <input
              type='text'
              name='garnish'
              value={this.state.garnish}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='image'>Image URL:</label>
            <input
              type='text'
              name='image'
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>

          <div className='ingredients-list'>
            <strong>Ingredients</strong>
            {this.state.ingredients_attributes.map((element, index) => (
              <div className='form-inline' key={index}>
                <label>Measure:</label>
                <input
                  type='text'
                  name='measure'
                  value={element.measure || ''}
                  onChange={e => this.handleIngredientChange(index, e)}
                />
                <label>Type Of Spirit:</label>
                <input
                  type='text'
                  name='kind'
                  value={element.kind || ''}
                  onChange={e => this.handleIngredientChange(index, e)}
                />
                {index ? (
                  <button
                    type='button'
                    className='button remove'
                    onClick={() => this.removeIngredientFields(index)}
                  >
                    x
                  </button>
                ) : null}
              </div>
            ))}
            <div className='button-section'>
              <button
                className='button add'
                type='button'
                onClick={() => this.addIngredientFields()}
              >
                Add
              </button>
            </div>
            <div className='instructions-list'>
              <strong>Instructions</strong>

              {this.state.instructions_attributes.map((element, index) => (
                <div className='form-inline' key={index}>
                  <label>Order:</label> {element.order || ''}
                  <label>Step:</label>
                  <input
                    type='text'
                    name='step'
                    value={element.step}
                    onChange={e => this.handleInstructionChange(index, e)}
                  />
                  {index ? (
                    <button
                      type='button'
                      className='button remove'
                      onClick={() => this.removeInstructionFields(index)}
                    >
                      x
                    </button>
                  ) : null}
                </div>
              ))}
              <div className='button-section'>
                <button
                  className='button add'
                  type='button'
                  onClick={() => this.addInstructionFields()}
                >
                  Add
                </button>
              </div>
            </div>

            <button className='button submit' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDrink: (obj) => dispatch(fetchAddDrink(obj))
  }
}

export default connect(null, mapDispatchToProps)(DrinkForm)
