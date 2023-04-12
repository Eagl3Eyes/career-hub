import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-[80%] md:mx-auto px-5 p-5'>
            <h3 className='text-3xl font-bold text-center py-4 mb-2'>Blog Page</h3>
            
            <div className='grid grid-cols-1 gap-3'>
                <div className='border-2 rounded-md p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is ContextApi ?</h3>
                    <p>Answer: It uses to pass data from parent to children component tree directly, instead of passing it down through a chain of props</p>
                </div>
                <div className='border-2 rounded-md p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is custom hook in react.js?</h3>
                    <p>Answer: Instead of writing the same code across multiple components that use the same common stateful logic like (“setState”), you can put that code inside a custom hook and reuse it.</p>
                </div>
                <div className='border-2 rounded-md p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is useRef in react.js?</h3>
                    <p>Answer: useRef is used to create a reference object</p>
                </div>
                <div className='border-2 rounded-md p-4'>
                    <h3 className='text-1xl font-semibold py-3'>What is useMemo in react.js?</h3>
                    <p>Answer: It memoizes the calculation result, and returns it to the component.</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
