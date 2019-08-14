import React from "react";

// I created the item list in the intent of styling the item list where it was all nicely displayed properly.
// But because I took a little too long architecting this out, I just wanted to further explain my logic instead
// Item List would of been a great reusable component where it will make any item list anywhere in the application look the same
// This was the intent of styling purposes or in this case a presenational component
const ItemList = ({ children }) => (
    <p>{children}</p>
)

export default ItemList;