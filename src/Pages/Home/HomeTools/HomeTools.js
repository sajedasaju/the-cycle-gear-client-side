import React from 'react';
import SingleTools from '../SingleTools/SingleTools';
import useTools from './../../../hooks/useTools';
import Loading from '../../Shared/Loading/Loading'

const HomeTools = () => {
    const [tools, setTools, isLoading] = useTools()
    return (
        <>
            {
                isLoading && <Loading></Loading>}
            <section className='w-4/5 mx-auto  my-20'>
                <h2 className='text-2xl text-center mb-12 font-bold border-y-2 py-3 font-serif text-primary text-[#7aad3b]'>FEATURED TOOLS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>


                    {
                        tools.slice(0, 6).map(tool => <SingleTools
                            key={tool._id}
                            tool={tool}
                        ></SingleTools>)
                    }


                </div>
            </section>

        </>
    );
};

export default HomeTools;