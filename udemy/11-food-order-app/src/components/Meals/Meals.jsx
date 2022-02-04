import React, { Fragment } from 'react';
import MealsSummary from './MealsSumarry';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
};

export default Meals;
