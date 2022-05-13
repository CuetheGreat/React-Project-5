import React, { Component } from 'react'
import { Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import { postNewDrink } from '../../feature/Drinks/drinkThunk'

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
    console.log(this.props)
    this.props.addDrink(this.state)
  }

  render () {
    return (
      <div
        className='w-75'
        style={{ padding: '0', margin: '0', textAlign: 'center' }}
      >
        <h1>Add New Drink</h1>
        <Form
          onSubmit={this.handleSubmit}
          style={{
            display: 'inline-block',
            justifyContent: 'space-evenly'
          }}
        >
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='description'>Description:</Form.Label>
            <Form.Control
              as='textarea'
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='glass'>Glass Type:</Form.Label>
            <Form.Control
              type='text'
              name='glass'
              value={this.state.glass}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='garnish'>Garnish:</Form.Label>
            <Form.Control
              type='text'
              name='garnish'
              value={this.state.garnish}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='image'>Image URL:</Form.Label>
            <Form.Control
              type='text'
              name='image'
              value={this.state.image}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className='ingredients-list'>
            <Form.Label>
              <strong>Ingredients:</strong>
            </Form.Label>
            {this.state.ingredients_attributes.map((element, index) => (
              <Form.Group
                style={{
                  display: 'flex',
                  margin: '15px',
                  justifyContent: 'space-evenly'
                }}
                className='form-inline'
                key={index}
              >
                <Form.Group>
                  <Form.Label>Measure:</Form.Label>
                  <Form.Control
                    type='text'
                    name='measure'
                    value={element.measure || ''}
                    onChange={e => this.handleIngredientChange(index, e)}
                  />
                  <Form.Label>Type Of Spirit:</Form.Label>
                  <Form.Control
                    as='input'
                    name='kind'
                    value={element.kind || ''}
                    onChange={e => this.handleIngredientChange(index, e)}
                  />
                </Form.Group>

                {index ? (
                  <Button
                    variant='secondary'
                    type='button'
                    className='button remove'
                    onClick={() => this.removeIngredientFields(index)}
                  >
                    x
                  </Button>
                ) : null}
              </Form.Group>
            ))}
            <Form.Group className='button-section'>
              <Button
                className='button add'
                type='button'
                onClick={() => this.addIngredientFields()}
              >
                Add
              </Button>
            </Form.Group>
          </Form.Group>

          <Form.Group className='instructions-list'>
            <Form.Label>
              <strong>Instructions</strong>
            </Form.Label>
            {this.state.instructions_attributes.map((element, index) => (
              <Form.Group
                style={{
                  display: 'flex',
                  margin: '15px',
                  justifyContent: 'space-evenly'
                }}
                className='form-inline'
                key={index}
              >
                <Form.Group>
                  <Form.Label>Order:</Form.Label>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={`${element.order}.)` || ''}
                  />
                  <Form.Label>Step:</Form.Label>
                  <Form.Control
                    as='textarea'
                    name='step'
                    value={element.step}
                    onChange={e => this.handleInstructionChange(index, e)}
                  />
                </Form.Group>

                {index ? (
                  <Button
                    variant='secondary'
                    type='button'
                    className='button remove'
                    onClick={() => this.removeInstructionFields(index)}
                  >
                    x
                  </Button>
                ) : null}
              </Form.Group>
            ))}

            <div className='button-section'>
              <Button
                className='button add'
                type='button'
                onClick={() => this.addInstructionFields()}
              >
                Add
              </Button>
            </div>
          </Form.Group>

          <Button className='button submit' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDrink: (data) => dispatch(postNewDrink(data))
  }
}

export default connect(null,mapDispatchToProps)(DrinkForm)
