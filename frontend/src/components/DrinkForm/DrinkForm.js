import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postNewDrink } from '../../feature/Drinks/drinkThunk';

const defaultState = {
  name: '',
  description: '',
  ingredients_attributes: [{ measure: '', kind: '' }],
  instructions_attributes: [{ order: 1, step: '' }],
  glass: '',
  garnish: '',
  image: '',
};

const DrinkForm = () => {
  const [formState, setFormState] = useState(defaultState);
  const dispatch = useDispatch();

  const handleIngredientChange = (i, e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      const ingredients = [...prevState.ingredients_attributes];
      ingredients[i][name] = value;
      return { ...prevState, ingredients_attributes: ingredients };
    });
  };

  const handleInstructionChange = (i, e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      const instructions = [...prevState.instructions_attributes];
      instructions[i][name] = value;
      return { ...prevState, instructions_attributes: instructions };
    });
  };

  const addIngredientFields = () => {
    setFormState((prevState) => ({
      ...prevState,
      ingredients_attributes: [...prevState.ingredients_attributes, { measure: '', kind: '' }],
    }));
  };

  const addInstructionFields = () => {
    setFormState((prevState) => {
      const order = prevState.instructions_attributes.length + 1;
      return {
        ...prevState,
        instructions_attributes: [...prevState.instructions_attributes, { order, step: '' }],
      };
    });
  };

  const removeIngredientFields = (i) => {
    setFormState((prevState) => {
      const ingredients = prevState.ingredients_attributes.filter((_, index) => index !== i);
      return { ...prevState, ingredients_attributes: ingredients };
    });
  };

  const removeInstructionFields = (i) => {
    setFormState((prevState) => {
      const instructions = prevState.instructions_attributes.filter((_, index) => index !== i);
      return { ...prevState, instructions_attributes: instructions };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewDrink(formState));
    setFormState(defaultState);
  };

  return (
    <Container className='w-75' style={{ padding: '0', margin: '0', textAlign: 'center' }}>
      <h1>Add New Drink</h1>
      <Form onSubmit={handleSubmit} style={{ display: 'inline-block', justifyContent: 'space-evenly' }}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type='text' name='name' value={formState.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='description'>Description:</Form.Label>
          <Form.Control
            as='textarea'
            name='description'
            value={formState.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='glass'>Glass Type:</Form.Label>
          <Form.Control type='text' name='glass' value={formState.glass} onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='garnish'>Garnish:</Form.Label>
          <Form.Control type='text' name='garnish' value={formState.garnish} onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='image'>Image URL:</Form.Label>
          <Form.Control type='text' name='image' value={formState.image} onChange={handleChange} />
        </Form.Group>

        <Form.Group className='ingredients-list'>
          <Form.Label>
            <strong>Ingredients:</strong>
          </Form.Label>
          {formState.ingredients_attributes.map((element, index) => (
            <Form.Group
              key={index}
              style={{ display: 'flex', margin: '15px', justifyContent: 'space-evenly' }}
              className='form-inline'
            >
              <Form.Group>
                <Form.Label>Measure:</Form.Label>
                <Form.Control
                  type='text'
                  name='measure'
                  value={element.measure || ''}
                  onChange={(e) => handleIngredientChange(index, e)}
                />
                <Form.Label>Type Of Spirit:</Form.Label>
                <Form.Control
                  as='input'
                  name='kind'
                  value={element.kind || ''}
                  onChange={(e) => handleIngredientChange(index, e)}
                />
              </Form.Group>
              {index ? (
                <Button
                  variant='secondary'
                  type='button'
                  className='button remove'
                  onClick={() => removeIngredientFields(index)}
                >
                  x
                </Button>
              ) : null}
            </Form.Group>
          ))}
          <Form.Group className='button-section'>
            <Button className='button add' type='button' onClick={addIngredientFields}>
              Add
            </Button>
          </Form.Group>
        </Form.Group>

        <Form.Group className='instructions-list'>
          <Form.Label>
            <strong>Instructions</strong>
          </Form.Label>
          {formState.instructions_attributes.map((element, index) => (
            <Form.Group
              key={index}
              style={{ display: 'flex', margin: '15px', justifyContent: 'space-evenly' }}
              className='form-inline'
            >
              <Form.Group>
                <Form.Label>Order:</Form.Label>
                <Form.Control plaintext readOnly defaultValue={`${element.order}.)` || ''} />
                <Form.Label>Step:</Form.Label>
                <Form.Control
                  as='textarea'
                  name='step'
                  value={element.step}
                  onChange={(e) => handleInstructionChange(index, e)}
                />
              </Form.Group>
              {index ? (
                <Button
                  variant='secondary'
                  type='button'
                  className='button remove'
                  onClick={() => removeInstructionFields(index)}
                >
                  x
                </Button>
              ) : null}
            </Form.Group>
          ))}
          <div className='button-section'>
            <Button className='button add' type='button' onClick={addInstructionFields}>
              Add
            </Button>
          </div>
        </Form.Group>

        <Button className='button submit' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default DrinkForm;
