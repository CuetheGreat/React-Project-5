class Api::V1::DrinksController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    drinks = Drink.all
    render json: drinks, each_serializer: DrinkSerializer, status: :ok
  end

  def create
    drink = Drink.new(drink_params)
    if drink.save
      render json: { drinks: [DrinkSerializer.new(drink)] }, status: :created
    else
      render json: { message: drink.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    drink = Drink.find_by(slug: params[:slug])
    if drink
      render json: { drinks: [DrinkSerializer.new(drink)] }, status: :ok
    else
      render json: { message: 'Drink not found' }, status: :not_found
    end
  end

  def destroy
    drink = Drink.find_by(slug: params[:slug])
    if drink
      drink.destroy
      render json: { message: 'Drink has been destroyed' }, status: :accepted
    else
      render json: { message: 'Drink not found' }, status: :not_found
    end
  end

  private

  def drink_params
    params.require(:drink)
          .permit(:name, :description, :glass,
                  :garnish, :image, ingredients_attributes: [:measure, :kind],
                                    instructions_attributes: [:order, :step])
  end
end
