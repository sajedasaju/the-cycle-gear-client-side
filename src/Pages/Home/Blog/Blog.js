import React from 'react';

const Blog = () => {
    return (
        <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
            <h1 class="text-3xl text-center font-bold text-blue-500">Timeline with Tailwindcss</h1>
            <div class="border-l-2 mt-10">

                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                    <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>


                    <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div class="flex-auto">

                        <h1 class="text-lg font-bold  mb-3">How will you improve the performance of a React Application?</h1>
                        <h3>The performance of a React Application by Keeping component state local where necessary.Optimize also can be  happen when re-rendering a component only when necessary.Memoizing React components to prevent unnecessary re-renders.This process caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. OPtization also happen by Use Production Build. </h3>
                    </div>

                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                    <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>


                    <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div class="flex-auto">
                        <h1 class="text-xl font-bold  mb-3">What are the different ways to manage a state in a React application?</h1>
                        <h3>React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.We can manage state by using hooks or by using context.There are four main types of state :Local state,Global state,Server state,URL state.Local stage manage by useState. Usestate is use for manage state in our components.Global state is is managed by context api.  </h3>
                    </div>

                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                    <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>


                    <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div class="flex-auto">
                        <h1 class="text-xl font-bold  mb-3">How does prototypical inheritance work?</h1>
                        <h3>JavaScript is a prototype-based, Object Oriented programming language.Prototypical inheritance refers to the ability to access object properties from another object.Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. <br />
                            For example:If an object name animal has property eats:true,and an object rabbit has property jumps: true.
                            And now if we  read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal by using prototype inheritence. </h3>
                    </div>

                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                    <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>


                    <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div class="flex-auto">
                        <h1 class="text-xl font-bold  mb-3">Why you do not set the state directly in React?</h1>
                        <h3>When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.And it will lose control of the state across all components.The ui of a component renders based on the state.If i set value directly to products and call the setProducts,it cant rerender the ui,if we set value in setProducts it can rerender ui and result changed can show on ui. </h3>
                    </div>
                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                    <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>


                    <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div class="flex-auto">
                        <h1 class="text-xl font-bold mb-3">What is a unit test? Why should write unit tests?</h1>
                        <h3>In unit test individual units or components of the software are tested. A unit might be an individual function, method, procedure, module, or object. A unit test isolates a section of code and verifies its correctness, in order to validate that each unit of the software’s code performs as expected.By using unit test it ensures dependability, security, and high performance, which leads to time-saving, customer satisfaction, and cost-effectiveness. <br />
                            Unit test perform by using jest .Unit tests help to find and fix bugs quickly and easily,it contribute to higher code quality. </h3>
                    </div>

                </div>



            </div>

        </div>
    );
};

export default Blog;