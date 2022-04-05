import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-yellow-500 my-5'>what is semantic tag?</h1>
            <p className='text-left m-6'>Semantic tag is something that makes a web page meamningful to browser,It has a design that makes the browser to understand that what this tag will be used for, such as a header tag represents that the things inside it will be used as the header of a web page,A paragraph tag that is annoted with p clearly means that this tag will contain texts, on the other hand tags like b or i these doesnot mean anything to the browser, so these are not semantic tags.  </p>
            <h1 className='text-yellow-500 my-5 mx-5'>inline block inline-block elements?</h1>
            <p className='text-left m-6'>
                1. Inline element only takes the height and width that it needs to contain,it doesnot start with a new line,it doesnot take any more spaces other than it's own.So we cannot set width and height of an inline element. <br></br>
                2. block element takes the whole space in a line,It takes the whole width of it's parent , So everytime a block element starts in a new line,So we can set the height and width as per as we wish, <br></br>
                3. Inline-Block elements are inline elements that behaves like block element,so it starts in the same line ,But we can set the height and width of it if it is necessary.
            </p>
        </div>
        
    );
};

export default Blogs;