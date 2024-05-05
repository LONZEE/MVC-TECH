const { category } = require('../models');

const categoryBlogs = [
    {
        title: 'Technology',
        description: 'The latest news and trends in technology.',
        id: 1
    },
    {
        title: 'Travel',
        description: 'Travel tips, destinations, and more.',
        id: 2
    },
    {
        title: 'Food',
        description: 'Recipes, restaurant reviews, and more.',
        id: 3
    },
    {
        title: 'Fashion',
        description: 'The latest trends in fashion.',
        id: 4
    }
];

const seedCategories = () => category.bulkCreate(categoryBlogs);

module.exports = seedCategories;