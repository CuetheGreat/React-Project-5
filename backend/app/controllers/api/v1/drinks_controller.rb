class Api::V1::DrinksController < ApplicationController
  skip_before_action :authorized

  def index
    drinks = Drink.all
    render json: drinks, each_serializer: DrinkSerializer, status: :ok
  end

  def create
    drink = Drink.create(drink_params)
    if drink.valid?
      render json: { result: DrinkSerializer.new(drink) }, status: :created
    else
      render json: { message: drink.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    drink = Drink.find_by(params[:id])
    render json: { drinks: DrinkSerializer.new(drink) }, status: :ok
  end

  def delete
    drink = Drink.find_by(params[:id])
    drink.destroy
    render json: { message: 'Drink has been destroyed' }, status: :accepted
  end

  private

  def drink_params
    params.require(:drink)
          .permit(:name, :description, :glass,
                  :garnish, :image, ingredients_attributes: %i[measure kind],
                                    instructions_attributes: %i[order step])
  end
end
