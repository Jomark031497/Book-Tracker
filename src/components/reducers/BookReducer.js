import * as uuid from "uuid";

export const bookReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, {
                id: uuid.v4(),
                title: action.book.title,
                author: action.book.author,
                genre: action.book.genre,
                rating: action.book.rating,
                isRead: action.book.isRead
            }]
        case "REMOVE_BOOK":{
            return state.filter((book) => book.id !== action.id)
        }

        default:
            return state
    }
}